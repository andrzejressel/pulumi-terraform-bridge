// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class Table extends lumi.NamedResource implements TableArgs {
    public readonly instanceName: string;
    public readonly tableName?: string;
    public readonly project?: string;
    public readonly splitKeys?: string[];

    constructor(name: string, args: TableArgs) {
        super(name);
        if (args.instanceName === undefined) {
            throw new Error("Property argument 'instanceName' is required, but was missing");
        }
        this.instanceName = args.instanceName;
        this.tableName = args.tableName;
        this.project = args.project;
        this.splitKeys = args.splitKeys;
    }
}

export interface TableArgs {
    readonly instanceName: string;
    readonly tableName?: string;
    readonly project?: string;
    readonly splitKeys?: string[];
}

