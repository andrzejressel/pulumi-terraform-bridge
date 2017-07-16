// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class GroupPolicy extends lumi.NamedResource implements GroupPolicyArgs {
    public readonly group: string;
    public readonly groupPolicyName?: string;
    public readonly namePrefix?: string;
    public readonly policy: string;

    constructor(name: string, args: GroupPolicyArgs) {
        super(name);
        if (args.group === undefined) {
            throw new Error("Property argument 'group' is required, but was missing");
        }
        this.group = args.group;
        this.groupPolicyName = args.groupPolicyName;
        this.namePrefix = args.namePrefix;
        if (args.policy === undefined) {
            throw new Error("Property argument 'policy' is required, but was missing");
        }
        this.policy = args.policy;
    }
}

export interface GroupPolicyArgs {
    readonly group: string;
    readonly groupPolicyName?: string;
    readonly namePrefix?: string;
    readonly policy: string;
}

