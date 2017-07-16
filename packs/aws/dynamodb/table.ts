// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class Table extends lumi.NamedResource implements TableArgs {
    public readonly arn?: string;
    public readonly attribute: { name: string, type: string }[];
    public readonly globalSecondaryIndex?: { hashKey: string, name: string, nonKeyAttributes?: string[], projectionType: string, rangeKey?: string, readCapacity: number, writeCapacity: number }[];
    public readonly hashKey: string;
    public readonly localSecondaryIndex?: { name: string, nonKeyAttributes?: string[], projectionType: string, rangeKey: string }[];
    public readonly tableName?: string;
    public readonly rangeKey?: string;
    public readonly readCapacity: number;
    public readonly streamArn?: string;
    public readonly streamEnabled?: boolean;
    public readonly streamLabel?: string;
    public readonly streamViewType?: string;
    public readonly tags?: {[key: string]: any};
    public readonly ttl?: { attributeName: string, enabled: boolean }[];
    public readonly writeCapacity: number;

    constructor(name: string, args: TableArgs) {
        super(name);
        this.arn = args.arn;
        if (args.attribute === undefined) {
            throw new Error("Property argument 'attribute' is required, but was missing");
        }
        this.attribute = args.attribute;
        this.globalSecondaryIndex = args.globalSecondaryIndex;
        if (args.hashKey === undefined) {
            throw new Error("Property argument 'hashKey' is required, but was missing");
        }
        this.hashKey = args.hashKey;
        this.localSecondaryIndex = args.localSecondaryIndex;
        this.tableName = args.tableName;
        this.rangeKey = args.rangeKey;
        if (args.readCapacity === undefined) {
            throw new Error("Property argument 'readCapacity' is required, but was missing");
        }
        this.readCapacity = args.readCapacity;
        this.streamArn = args.streamArn;
        this.streamEnabled = args.streamEnabled;
        this.streamLabel = args.streamLabel;
        this.streamViewType = args.streamViewType;
        this.tags = args.tags;
        this.ttl = args.ttl;
        if (args.writeCapacity === undefined) {
            throw new Error("Property argument 'writeCapacity' is required, but was missing");
        }
        this.writeCapacity = args.writeCapacity;
    }
}

export interface TableArgs {
    readonly arn?: string;
    readonly attribute: { name: string, type: string }[];
    readonly globalSecondaryIndex?: { hashKey: string, name: string, nonKeyAttributes?: string[], projectionType: string, rangeKey?: string, readCapacity: number, writeCapacity: number }[];
    readonly hashKey: string;
    readonly localSecondaryIndex?: { name: string, nonKeyAttributes?: string[], projectionType: string, rangeKey: string }[];
    readonly tableName?: string;
    readonly rangeKey?: string;
    readonly readCapacity: number;
    readonly streamArn?: string;
    readonly streamEnabled?: boolean;
    readonly streamLabel?: string;
    readonly streamViewType?: string;
    readonly tags?: {[key: string]: any};
    readonly ttl?: { attributeName: string, enabled: boolean }[];
    readonly writeCapacity: number;
}

