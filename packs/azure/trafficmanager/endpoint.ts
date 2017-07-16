// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class Endpoint extends lumi.NamedResource implements EndpointArgs {
    public readonly endpointLocation?: string;
    public readonly endpointStatus?: string;
    public readonly minChildEndpoints?: number;
    public readonly endpointName?: string;
    public readonly priority?: number;
    public readonly profileName: string;
    public readonly resourceGroupName: string;
    public readonly target?: string;
    public readonly targetResourceId?: string;
    public readonly type: string;
    public readonly weight?: number;

    constructor(name: string, args: EndpointArgs) {
        super(name);
        this.endpointLocation = args.endpointLocation;
        this.endpointStatus = args.endpointStatus;
        this.minChildEndpoints = args.minChildEndpoints;
        this.endpointName = args.endpointName;
        this.priority = args.priority;
        if (args.profileName === undefined) {
            throw new Error("Property argument 'profileName' is required, but was missing");
        }
        this.profileName = args.profileName;
        if (args.resourceGroupName === undefined) {
            throw new Error("Property argument 'resourceGroupName' is required, but was missing");
        }
        this.resourceGroupName = args.resourceGroupName;
        this.target = args.target;
        this.targetResourceId = args.targetResourceId;
        if (args.type === undefined) {
            throw new Error("Property argument 'type' is required, but was missing");
        }
        this.type = args.type;
        this.weight = args.weight;
    }
}

export interface EndpointArgs {
    readonly endpointLocation?: string;
    readonly endpointStatus?: string;
    readonly minChildEndpoints?: number;
    readonly endpointName?: string;
    readonly priority?: number;
    readonly profileName: string;
    readonly resourceGroupName: string;
    readonly target?: string;
    readonly targetResourceId?: string;
    readonly type: string;
    readonly weight?: number;
}

