// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class Account extends lumi.NamedResource implements AccountArgs {
    public readonly consistencyPolicy: { consistencyLevel: string, maxIntervalInSeconds?: number, maxStalenessPrefix?: number }[];
    public readonly failoverPolicy: { id?: string, location: string, priority: number }[];
    public readonly ipRangeFilter?: string;
    public readonly location: string;
    public readonly accountName?: string;
    public readonly offerType: string;
    public readonly primaryMasterKey?: string;
    public readonly primaryReadonlyMasterKey?: string;
    public readonly resourceGroupName: string;
    public readonly secondaryMasterKey?: string;
    public readonly secondaryReadonlyMasterKey?: string;
    public readonly tags?: {[key: string]: any};

    constructor(name: string, args: AccountArgs) {
        super(name);
        if (args.consistencyPolicy === undefined) {
            throw new Error("Property argument 'consistencyPolicy' is required, but was missing");
        }
        this.consistencyPolicy = args.consistencyPolicy;
        if (args.failoverPolicy === undefined) {
            throw new Error("Property argument 'failoverPolicy' is required, but was missing");
        }
        this.failoverPolicy = args.failoverPolicy;
        this.ipRangeFilter = args.ipRangeFilter;
        if (args.location === undefined) {
            throw new Error("Property argument 'location' is required, but was missing");
        }
        this.location = args.location;
        this.accountName = args.accountName;
        if (args.offerType === undefined) {
            throw new Error("Property argument 'offerType' is required, but was missing");
        }
        this.offerType = args.offerType;
        this.primaryMasterKey = args.primaryMasterKey;
        this.primaryReadonlyMasterKey = args.primaryReadonlyMasterKey;
        if (args.resourceGroupName === undefined) {
            throw new Error("Property argument 'resourceGroupName' is required, but was missing");
        }
        this.resourceGroupName = args.resourceGroupName;
        this.secondaryMasterKey = args.secondaryMasterKey;
        this.secondaryReadonlyMasterKey = args.secondaryReadonlyMasterKey;
        this.tags = args.tags;
    }
}

export interface AccountArgs {
    readonly consistencyPolicy: { consistencyLevel: string, maxIntervalInSeconds?: number, maxStalenessPrefix?: number }[];
    readonly failoverPolicy: { id?: string, location: string, priority: number }[];
    readonly ipRangeFilter?: string;
    readonly location: string;
    readonly accountName?: string;
    readonly offerType: string;
    readonly primaryMasterKey?: string;
    readonly primaryReadonlyMasterKey?: string;
    readonly resourceGroupName: string;
    readonly secondaryMasterKey?: string;
    readonly secondaryReadonlyMasterKey?: string;
    readonly tags?: {[key: string]: any};
}

