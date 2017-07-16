// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class RequestValidator extends lumi.NamedResource implements RequestValidatorArgs {
    public readonly requestValidatorName?: string;
    public readonly restApiId: string;
    public readonly validateRequestBody?: boolean;
    public readonly validateRequestParameters?: boolean;

    constructor(name: string, args: RequestValidatorArgs) {
        super(name);
        this.requestValidatorName = args.requestValidatorName;
        if (args.restApiId === undefined) {
            throw new Error("Property argument 'restApiId' is required, but was missing");
        }
        this.restApiId = args.restApiId;
        this.validateRequestBody = args.validateRequestBody;
        this.validateRequestParameters = args.validateRequestParameters;
    }
}

export interface RequestValidatorArgs {
    readonly requestValidatorName?: string;
    readonly restApiId: string;
    readonly validateRequestBody?: boolean;
    readonly validateRequestParameters?: boolean;
}

