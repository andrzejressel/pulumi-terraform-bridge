// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class Router extends lumi.NamedResource implements RouterArgs {
    public readonly bgp: { asn: number }[];
    public readonly description?: string;
    public readonly routerName?: string;
    public readonly network: string;
    public readonly project?: string;
    public readonly region?: string;
    public readonly selfLink?: string;

    constructor(name: string, args: RouterArgs) {
        super(name);
        if (args.bgp === undefined) {
            throw new Error("Property argument 'bgp' is required, but was missing");
        }
        this.bgp = args.bgp;
        this.description = args.description;
        this.routerName = args.routerName;
        if (args.network === undefined) {
            throw new Error("Property argument 'network' is required, but was missing");
        }
        this.network = args.network;
        this.project = args.project;
        this.region = args.region;
        this.selfLink = args.selfLink;
    }
}

export interface RouterArgs {
    readonly bgp: { asn: number }[];
    readonly description?: string;
    readonly routerName?: string;
    readonly network: string;
    readonly project?: string;
    readonly region?: string;
    readonly selfLink?: string;
}

