// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class LogGroup extends lumi.NamedResource implements LogGroupArgs {
    public readonly arn?: string;
    public readonly logGroupName?: string;
    public readonly namePrefix?: string;
    public readonly retentionInDays?: number;
    public readonly tags?: {[key: string]: any};

    constructor(name: string, args: LogGroupArgs) {
        super(name);
        this.arn = args.arn;
        this.logGroupName = args.logGroupName;
        this.namePrefix = args.namePrefix;
        this.retentionInDays = args.retentionInDays;
        this.tags = args.tags;
    }
}

export interface LogGroupArgs {
    readonly arn?: string;
    readonly logGroupName?: string;
    readonly namePrefix?: string;
    readonly retentionInDays?: number;
    readonly tags?: {[key: string]: any};
}

