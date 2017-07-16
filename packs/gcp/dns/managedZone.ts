// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class ManagedZone extends lumi.NamedResource implements ManagedZoneArgs {
    public readonly description?: string;
    public readonly dnsName: string;
    public readonly managedZoneName?: string;
    public readonly nameServers?: string[];
    public readonly project?: string;

    constructor(name: string, args: ManagedZoneArgs) {
        super(name);
        this.description = args.description;
        if (args.dnsName === undefined) {
            throw new Error("Property argument 'dnsName' is required, but was missing");
        }
        this.dnsName = args.dnsName;
        this.managedZoneName = args.managedZoneName;
        this.nameServers = args.nameServers;
        this.project = args.project;
    }
}

export interface ManagedZoneArgs {
    readonly description?: string;
    readonly dnsName: string;
    readonly managedZoneName?: string;
    readonly nameServers?: string[];
    readonly project?: string;
}

