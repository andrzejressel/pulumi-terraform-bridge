// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class IpSet extends lumi.NamedResource implements IpSetArgs {
    public readonly ipSetDescriptor?: { type: string, value: string }[];
    public readonly ipSetName?: string;

    constructor(name: string, args: IpSetArgs) {
        super(name);
        this.ipSetDescriptor = args.ipSetDescriptor;
        this.ipSetName = args.ipSetName;
    }
}

export interface IpSetArgs {
    readonly ipSetDescriptor?: { type: string, value: string }[];
    readonly ipSetName?: string;
}

