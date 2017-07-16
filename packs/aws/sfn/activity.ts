// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class Activity extends lumi.NamedResource implements ActivityArgs {
    public readonly creationDate?: string;
    public readonly activityName?: string;

    constructor(name: string, args: ActivityArgs) {
        super(name);
        this.creationDate = args.creationDate;
        this.activityName = args.activityName;
    }
}

export interface ActivityArgs {
    readonly creationDate?: string;
    readonly activityName?: string;
}

