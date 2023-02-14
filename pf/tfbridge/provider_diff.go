// Copyright 2016-2023, Pulumi Corporation.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package tfbridge

import (
	"context"
	"fmt"
	"sort"

	"github.com/hashicorp/terraform-plugin-go/tftypes"

	"github.com/pulumi/pulumi/sdk/v3/go/common/resource"
	"github.com/pulumi/pulumi/sdk/v3/go/common/resource/plugin"
	"github.com/pulumi/pulumi/sdk/v3/go/common/tokens"

	"github.com/pulumi/pulumi-terraform-bridge/pf/internal/convert"
)

// Diff checks what impacts a hypothetical update will have on the resource's properties. Receives checkedInputs from
// Check and the prior state. The implementation here calls PlanResourceChange Terraform method. Essentially:
//
//	Diff(priorState, checkedInputs):
//	    proposedNewState = priorState.applyChanges(checkedInputs)
//	    plannedState = PlanResourceChange(priorState, proposedNewState)
//	    priorState.Diff(plannedState)
func (p *provider) Diff(
	urn resource.URN,
	id resource.ID,
	priorStateMap resource.PropertyMap,
	checkedInputs resource.PropertyMap,
	allowUnknowns bool,
	ignoreChanges []string,
) (plugin.DiffResult, error) {

	ctx := context.TODO()

	rh, err := p.resourceHandle(ctx, urn)
	if err != nil {
		return plugin.DiffResult{}, err
	}

	rawPriorState, err := parseResourceState(&rh, priorStateMap)
	if err != nil {
		return plugin.DiffResult{}, err
	}

	priorState, err := p.UpgradeResourceState(ctx, &rh, rawPriorState)
	if err != nil {
		return plugin.DiffResult{}, err
	}

	tfType := rh.schema.Type().TerraformType(ctx).(tftypes.Object)

	checkedInputsValue, err := convert.EncodePropertyMap(rh.encoder, checkedInputs)
	if err != nil {
		return plugin.DiffResult{}, err
	}

	planResp, err := p.plan(ctx, rh.terraformResourceName, rh.schema, priorState, checkedInputsValue)
	if err != nil {
		return plugin.DiffResult{}, err
	}

	// TODO[pulumi/pulumi-terraform-bridge#747] handle planResp.PlannedPrivate

	// TODO detect errors in planResp.Diagnostics

	// TODO process ignoreChanges

	plannedStateValue, err := planResp.PlannedState.Unmarshal(tfType)
	if err != nil {
		return plugin.DiffResult{}, err
	}
	// fmt.Printf("checkedInputsValue = %s\n\n", checkedInputsValue)

	// fmt.Printf("priorStateValue   = %s\n\n", priorStateValue)
	// fmt.Printf("plannedStateValue = %s\n\n", plannedStateValue)

	tfDiff, err := priorState.state.Value.Diff(plannedStateValue)
	if err != nil {
		return plugin.DiffResult{}, err
	}

	renames := convert.NewTypeLocalPropertyNames(p.propertyNames, tokens.Token(rh.token))

	replaceKeys, err := diffPathsToPropertyKeySet(renames, planResp.RequiresReplace)
	if err != nil {
		return plugin.DiffResult{}, err
	}

	changedKeys, err := diffChangedKeys(renames, tfDiff)
	if err != nil {
		return plugin.DiffResult{}, err
	}

	// Compute deleteBeforeReplace. TODO there are some intricacies in the old bridge regarding
	// nameRequiresDeleteBeforeReplace that are not handled yet.
	deleteBeforeReplace := false
	if len(replaceKeys) > 0 {
		info := rh.pulumiResourceInfo
		if info != nil && info.DeleteBeforeReplace {
			deleteBeforeReplace = true
		}
	}

	changes := plugin.DiffNone
	if len(changedKeys) > 0 {
		changes = plugin.DiffSome
	}

	diffResult := plugin.DiffResult{
		Changes:             changes,
		ReplaceKeys:         replaceKeys,
		ChangedKeys:         changedKeys,
		DeleteBeforeReplace: deleteBeforeReplace,
	}

	// TODO how to compute StableKeys

	// TODO currently not yet computing DetailedDiff, which is intricate in the old bridge due to Set encoding as
	// lists in Pulumi.
	return diffResult, nil
}

// Every entry in tfDiff has an AttributePath; extract the set of paths and find their roots.
func diffChangedKeys(renames convert.LocalPropertyNames, tfDiff []tftypes.ValueDiff) ([]resource.PropertyKey, error) {
	paths := []*tftypes.AttributePath{}
	for _, diff := range tfDiff {
		paths = append(paths, diff.Path)
	}
	return diffPathsToPropertyKeySet(renames, paths)
}

// Convert AttributeName to PropertyKey. Currently assume property names are identical in Pulumi and TF worlds.
func diffAttributeNameToPropertyKey(
	renames convert.LocalPropertyNames, name tftypes.AttributeName,
) resource.PropertyKey {
	var property convert.TerraformPropertyName = string(name)
	return renames.PropertyKey(property, nil /* this param should be deprecated */)
}

// For AttributePath that drills down from a property key, return that top-level propery key.
func diffPathToPropertyKey(
	renames convert.LocalPropertyNames, path *tftypes.AttributePath,
) (resource.PropertyKey, error) {
	steps := path.Steps()
	if len(steps) == 0 {
		return "", fmt.Errorf("Unexpected empty AttributePath")
	}

	firstStep := steps[0]
	name, ok := firstStep.(tftypes.AttributeName)
	if !ok {
		return "", fmt.Errorf("AttributePath did not start with AttributeName: %v", path.String())
	}

	return diffAttributeNameToPropertyKey(renames, name), nil
}

// Computes diffPathToPropertyKey for every path and gathers root property keys into a set.
func diffPathsToPropertyKeySet(
	renames convert.LocalPropertyNames, paths []*tftypes.AttributePath,
) ([]resource.PropertyKey, error) {
	keySet := map[resource.PropertyKey]struct{}{}
	for _, path := range paths {
		key, err := diffPathToPropertyKey(renames, path)
		if err != nil {
			return nil, err
		}
		keySet[key] = struct{}{}
	}
	keySlice := []resource.PropertyKey{}
	for k := range keySet {
		keySlice = append(keySlice, k)
	}
	sort.SliceStable(keySlice, func(i, j int) bool {
		return keySlice[i] < keySlice[j]
	})
	return keySlice, nil
}