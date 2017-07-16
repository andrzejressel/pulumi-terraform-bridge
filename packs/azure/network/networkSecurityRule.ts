// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class NetworkSecurityRule extends lumi.NamedResource implements NetworkSecurityRuleArgs {
    public readonly access: string;
    public readonly description?: string;
    public readonly destinationAddressPrefix: string;
    public readonly destinationPortRange: string;
    public readonly direction: string;
    public readonly networkSecurityRuleName?: string;
    public readonly networkSecurityGroupName: string;
    public readonly priority: number;
    public readonly protocol: string;
    public readonly resourceGroupName: string;
    public readonly sourceAddressPrefix: string;
    public readonly sourcePortRange: string;

    constructor(name: string, args: NetworkSecurityRuleArgs) {
        super(name);
        if (args.access === undefined) {
            throw new Error("Property argument 'access' is required, but was missing");
        }
        this.access = args.access;
        this.description = args.description;
        if (args.destinationAddressPrefix === undefined) {
            throw new Error("Property argument 'destinationAddressPrefix' is required, but was missing");
        }
        this.destinationAddressPrefix = args.destinationAddressPrefix;
        if (args.destinationPortRange === undefined) {
            throw new Error("Property argument 'destinationPortRange' is required, but was missing");
        }
        this.destinationPortRange = args.destinationPortRange;
        if (args.direction === undefined) {
            throw new Error("Property argument 'direction' is required, but was missing");
        }
        this.direction = args.direction;
        this.networkSecurityRuleName = args.networkSecurityRuleName;
        if (args.networkSecurityGroupName === undefined) {
            throw new Error("Property argument 'networkSecurityGroupName' is required, but was missing");
        }
        this.networkSecurityGroupName = args.networkSecurityGroupName;
        if (args.priority === undefined) {
            throw new Error("Property argument 'priority' is required, but was missing");
        }
        this.priority = args.priority;
        if (args.protocol === undefined) {
            throw new Error("Property argument 'protocol' is required, but was missing");
        }
        this.protocol = args.protocol;
        if (args.resourceGroupName === undefined) {
            throw new Error("Property argument 'resourceGroupName' is required, but was missing");
        }
        this.resourceGroupName = args.resourceGroupName;
        if (args.sourceAddressPrefix === undefined) {
            throw new Error("Property argument 'sourceAddressPrefix' is required, but was missing");
        }
        this.sourceAddressPrefix = args.sourceAddressPrefix;
        if (args.sourcePortRange === undefined) {
            throw new Error("Property argument 'sourcePortRange' is required, but was missing");
        }
        this.sourcePortRange = args.sourcePortRange;
    }
}

export interface NetworkSecurityRuleArgs {
    readonly access: string;
    readonly description?: string;
    readonly destinationAddressPrefix: string;
    readonly destinationPortRange: string;
    readonly direction: string;
    readonly networkSecurityRuleName?: string;
    readonly networkSecurityGroupName: string;
    readonly priority: number;
    readonly protocol: string;
    readonly resourceGroupName: string;
    readonly sourceAddressPrefix: string;
    readonly sourcePortRange: string;
}

