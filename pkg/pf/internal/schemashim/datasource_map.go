// Copyright 2016-2022, Pulumi Corporation.
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

package schemashim

import (
	"github.com/pulumi/pulumi-terraform-bridge/v3/pkg/pf/internal/runtypes"
	shim "github.com/pulumi/pulumi-terraform-bridge/v3/pkg/tfshim"
	"github.com/pulumi/pulumi-terraform-bridge/v3/pkg/tfshim/schema"
)

// Data Source map needs to support Set (mutability) for RenameDataSource.
func newSchemaOnlyDataSourceMap(dataSources runtypes.DataSources) shim.ResourceMap {
	m := schema.ResourceMap{}
	for _, name := range dataSources.All() {
		key := string(name)
		v := dataSources.Schema(name)
		m[key] = &schemaOnlyDataSource{v}
	}
	return m
}
