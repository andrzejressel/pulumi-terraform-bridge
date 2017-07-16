// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class MainRouteTableAssociation extends lumi.NamedResource implements MainRouteTableAssociationArgs {
    public readonly originalRouteTableId?: string;
    public readonly routeTableId: string;
    public readonly vpcId: string;

    constructor(name: string, args: MainRouteTableAssociationArgs) {
        super(name);
        this.originalRouteTableId = args.originalRouteTableId;
        if (args.routeTableId === undefined) {
            throw new Error("Property argument 'routeTableId' is required, but was missing");
        }
        this.routeTableId = args.routeTableId;
        if (args.vpcId === undefined) {
            throw new Error("Property argument 'vpcId' is required, but was missing");
        }
        this.vpcId = args.vpcId;
    }
}

export interface MainRouteTableAssociationArgs {
    readonly originalRouteTableId?: string;
    readonly routeTableId: string;
    readonly vpcId: string;
}

