// Copyright 2016-2024, Pulumi Corporation.
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

package tfbridgetests

import (
	"context"
	"fmt"
	"os"
	"testing"

	"github.com/pulumi/pulumi-terraform-bridge/pf/internal/muxer"
	"github.com/pulumi/pulumi-terraform-bridge/pf/tests/internal/providerbuilder"
	"github.com/pulumi/pulumi-terraform-bridge/v3/pkg/tfbridge/info"
	"github.com/pulumi/pulumi-terraform-bridge/v3/pkg/tfgen"
	helper "github.com/pulumi/pulumi-terraform-bridge/v3/pkg/tfshim/schema"
	"github.com/pulumi/pulumi/sdk/v3/go/common/diag"
	"github.com/pulumi/pulumi/sdk/v3/go/common/diag/colors"
	"github.com/pulumi/pulumi/sdk/v3/go/common/tokens"
	"github.com/stretchr/testify/require"
)

func TestRenameResourceWithAliasInAugmentedProvider(t *testing.T) {
	ctx := context.Background()
	discardSink := diag.DefaultSink(os.Stdout, os.Stdout, diag.FormatOptions{Color: colors.Never})
	providerID := "my"
	resourceID := "res"
	fullResourceID := fmt.Sprintf("%s_%s", providerID, resourceID)
	resModule := "mod"
	baselineProvider := (&helper.Provider{}).Shim()
	pfProvider := &providerbuilder.Provider{
		TypeName: providerID,
		AllResources: []providerbuilder.Resource{
			{Name: resourceID},
		},
	}
	legacyToken := tokens.Type(fmt.Sprintf("my:%s:Resource", resModule))
	aliasToken := tokens.Type(fmt.Sprintf("my:%s:LegacyResource", resModule))
	ri := &info.Resource{Tok: legacyToken}
	i := info.Provider{
		Name: providerID,
		P:    muxer.AugmentShimWithPF(ctx, baselineProvider, pfProvider),
		Resources: map[string]*info.Resource{
			fullResourceID: ri,
		},
	}
	i.RenameResourceWithAlias(fullResourceID, legacyToken, aliasToken, resModule, resModule, nil)
	_, err := tfgen.GenerateSchema(i, discardSink)
	require.NoError(t, err)
	_, err = i.P.(*muxer.ProviderShim).ResolveDispatch(&i)
	require.NoError(t, err)
}