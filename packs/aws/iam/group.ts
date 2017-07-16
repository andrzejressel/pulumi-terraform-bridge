// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class Group extends lumi.NamedResource implements GroupArgs {
    public readonly arn?: string;
    public readonly groupName?: string;
    public readonly path?: string;
    public readonly uniqueId?: string;

    constructor(name: string, args: GroupArgs) {
        super(name);
        this.arn = args.arn;
        this.groupName = args.groupName;
        this.path = args.path;
        this.uniqueId = args.uniqueId;
    }
}

export interface GroupArgs {
    readonly arn?: string;
    readonly groupName?: string;
    readonly path?: string;
    readonly uniqueId?: string;
}

