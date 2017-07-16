// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class Queue extends lumi.NamedResource implements QueueArgs {
    public readonly queueName?: string;
    public readonly resourceGroupName: string;
    public readonly storageAccountName: string;

    constructor(name: string, args: QueueArgs) {
        super(name);
        this.queueName = args.queueName;
        if (args.resourceGroupName === undefined) {
            throw new Error("Property argument 'resourceGroupName' is required, but was missing");
        }
        this.resourceGroupName = args.resourceGroupName;
        if (args.storageAccountName === undefined) {
            throw new Error("Property argument 'storageAccountName' is required, but was missing");
        }
        this.storageAccountName = args.storageAccountName;
    }
}

export interface QueueArgs {
    readonly queueName?: string;
    readonly resourceGroupName: string;
    readonly storageAccountName: string;
}

