#!/usr/bin/env bash

set -euo pipefail

mkdir -p $PWD/bin

HERE=$PWD

(cd $PWD/../../internal/cmd/pulumi-resource-random && go build -o $HERE/bin/pulumi-resource-random)

export PATH=$PWD/bin:$PATH
export PATH=~/.pulumi-dev/bin:$PATH

OUT=../../testdata/genrandom
mkdir -p $OUT

pulumi stack init generate
pulumi stack select generate
pulumi config set min 1
PULUMI_DEBUG_GRPC=$OUT/random-initial-update.json pulumi up --yes
PULUMI_DEBUG_GRPC=$OUT/random-empty-update.json pulumi up --yes
pulumi config set min 2
PULUMI_DEBUG_GRPC=$OUT/random-replace.json pulumi up --yes
pulumi config set min 0
PULUMI_DEBUG_GRPC=$OUT/random-delete.json pulumi up --yes
pulumi destroy --yes
pulumi stack rm --yes
