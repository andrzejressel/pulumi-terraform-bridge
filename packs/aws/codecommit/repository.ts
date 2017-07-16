// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class Repository extends lumi.NamedResource implements RepositoryArgs {
    public readonly arn?: string;
    public readonly cloneUrlHttp?: string;
    public readonly cloneUrlSsh?: string;
    public readonly defaultBranch?: string;
    public readonly description?: string;
    public readonly repositoryId?: string;
    public readonly repositoryName: string;

    constructor(name: string, args: RepositoryArgs) {
        super(name);
        this.arn = args.arn;
        this.cloneUrlHttp = args.cloneUrlHttp;
        this.cloneUrlSsh = args.cloneUrlSsh;
        this.defaultBranch = args.defaultBranch;
        this.description = args.description;
        this.repositoryId = args.repositoryId;
        if (args.repositoryName === undefined) {
            throw new Error("Property argument 'repositoryName' is required, but was missing");
        }
        this.repositoryName = args.repositoryName;
    }
}

export interface RepositoryArgs {
    readonly arn?: string;
    readonly cloneUrlHttp?: string;
    readonly cloneUrlSsh?: string;
    readonly defaultBranch?: string;
    readonly description?: string;
    readonly repositoryId?: string;
    readonly repositoryName: string;
}

