// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class Policy extends lumi.NamedResource implements PolicyArgs {
    public readonly arn?: string;
    public readonly description?: string;
    public readonly policyName?: string;
    public readonly namePrefix?: string;
    public readonly path?: string;
    public readonly policy: string;

    constructor(name: string, args: PolicyArgs) {
        super(name);
        this.arn = args.arn;
        this.description = args.description;
        this.policyName = args.policyName;
        this.namePrefix = args.namePrefix;
        this.path = args.path;
        if (args.policy === undefined) {
            throw new Error("Property argument 'policy' is required, but was missing");
        }
        this.policy = args.policy;
    }
}

export interface PolicyArgs {
    readonly arn?: string;
    readonly description?: string;
    readonly policyName?: string;
    readonly namePrefix?: string;
    readonly path?: string;
    readonly policy: string;
}

