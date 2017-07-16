// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class UrlMap extends lumi.NamedResource implements UrlMapArgs {
    public readonly defaultService: string;
    public readonly description?: string;
    public readonly fingerprint?: string;
    public readonly hostRule?: { description?: string, hosts: string[], pathMatcher: string }[];
    public readonly mapId?: string;
    public readonly urlMapName?: string;
    public readonly pathMatcher?: { defaultService: string, description?: string, name: string, pathRule?: { paths: string[], service: string }[] }[];
    public readonly project?: string;
    public readonly selfLink?: string;
    public readonly test?: { description?: string, host: string, path: string, service: string }[];

    constructor(name: string, args: UrlMapArgs) {
        super(name);
        if (args.defaultService === undefined) {
            throw new Error("Property argument 'defaultService' is required, but was missing");
        }
        this.defaultService = args.defaultService;
        this.description = args.description;
        this.fingerprint = args.fingerprint;
        this.hostRule = args.hostRule;
        this.mapId = args.mapId;
        this.urlMapName = args.urlMapName;
        this.pathMatcher = args.pathMatcher;
        this.project = args.project;
        this.selfLink = args.selfLink;
        this.test = args.test;
    }
}

export interface UrlMapArgs {
    readonly defaultService: string;
    readonly description?: string;
    readonly fingerprint?: string;
    readonly hostRule?: { description?: string, hosts: string[], pathMatcher: string }[];
    readonly mapId?: string;
    readonly urlMapName?: string;
    readonly pathMatcher?: { defaultService: string, description?: string, name: string, pathRule?: { paths: string[], service: string }[] }[];
    readonly project?: string;
    readonly selfLink?: string;
    readonly test?: { description?: string, host: string, path: string, service: string }[];
}

