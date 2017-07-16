// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class GlobalAddress extends lumi.NamedResource implements GlobalAddressArgs {
    public readonly address?: string;
    public readonly globalAddressName?: string;
    public readonly project?: string;
    public readonly selfLink?: string;

    constructor(name: string, args: GlobalAddressArgs) {
        super(name);
        this.address = args.address;
        this.globalAddressName = args.globalAddressName;
        this.project = args.project;
        this.selfLink = args.selfLink;
    }
}

export interface GlobalAddressArgs {
    readonly address?: string;
    readonly globalAddressName?: string;
    readonly project?: string;
    readonly selfLink?: string;
}

