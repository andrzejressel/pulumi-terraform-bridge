// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class GroupMembership extends lumi.NamedResource implements GroupMembershipArgs {
    public readonly group: string;
    public readonly groupMembershipName?: string;
    public readonly users: string[];

    constructor(name: string, args: GroupMembershipArgs) {
        super(name);
        if (args.group === undefined) {
            throw new Error("Property argument 'group' is required, but was missing");
        }
        this.group = args.group;
        this.groupMembershipName = args.groupMembershipName;
        if (args.users === undefined) {
            throw new Error("Property argument 'users' is required, but was missing");
        }
        this.users = args.users;
    }
}

export interface GroupMembershipArgs {
    readonly group: string;
    readonly groupMembershipName?: string;
    readonly users: string[];
}

