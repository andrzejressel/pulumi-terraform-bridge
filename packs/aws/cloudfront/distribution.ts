// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class Distribution extends lumi.NamedResource implements DistributionArgs {
    public readonly activeTrustedSigners?: {[key: string]: any};
    public readonly aliases?: string[];
    public readonly arn?: string;
    public readonly cacheBehavior?: { allowedMethods: string[], cachedMethods: string[], compress?: boolean, defaultTtl: number, forwardedValues: { cookies: { forward: string, whitelistedNames?: string[] }[], headers?: string[], queryString: boolean, queryStringCacheKeys?: string[] }[], lambdaFunctionAssociation?: { eventType: string, lambdaArn: string }[], maxTtl: number, minTtl: number, pathPattern: string, smoothStreaming?: boolean, targetOriginId: string, trustedSigners?: string[], viewerProtocolPolicy: string }[];
    public readonly callerReference?: string;
    public readonly comment?: string;
    public readonly customErrorResponse?: { errorCachingMinTtl?: number, errorCode: number, responseCode?: number, responsePagePath?: string }[];
    public readonly defaultCacheBehavior: { allowedMethods: string[], cachedMethods: string[], compress?: boolean, defaultTtl: number, forwardedValues: { cookies: { forward: string, whitelistedNames?: string[] }[], headers?: string[], queryString: boolean, queryStringCacheKeys?: string[] }[], lambdaFunctionAssociation?: { eventType: string, lambdaArn: string }[], maxTtl: number, minTtl: number, smoothStreaming?: boolean, targetOriginId: string, trustedSigners?: string[], viewerProtocolPolicy: string }[];
    public readonly defaultRootObject?: string;
    public readonly domainName?: string;
    public readonly enabled: boolean;
    public readonly etag?: string;
    public readonly hostedZoneId?: string;
    public readonly httpVersion?: string;
    public readonly inProgressValidationBatches?: number;
    public readonly isIpv6Enabled?: boolean;
    public readonly lastModifiedTime?: string;
    public readonly loggingConfig?: { bucket: string, includeCookies?: boolean, prefix?: string }[];
    public readonly origin: { customHeader?: { name: string, value: string }[], customOriginConfig?: { httpPort: number, httpsPort: number, originKeepaliveTimeout?: number, originProtocolPolicy: string, originReadTimeout?: number, originSslProtocols: string[] }[], domainName: string, originId: string, originPath?: string, s3OriginConfig?: { originAccessIdentity: string }[] }[];
    public readonly priceClass?: string;
    public readonly restrictions: { geoRestriction: { locations?: string[], restrictionType: string }[] }[];
    public readonly retainOnDelete?: boolean;
    public readonly status?: string;
    public readonly tags?: {[key: string]: any};
    public readonly viewerCertificate: { acmCertificateArn?: string, cloudfrontDefaultCertificate?: boolean, iamCertificateId?: string, minimumProtocolVersion?: string, sslSupportMethod?: string }[];
    public readonly webAclId?: string;

    constructor(name: string, args: DistributionArgs) {
        super(name);
        this.activeTrustedSigners = args.activeTrustedSigners;
        this.aliases = args.aliases;
        this.arn = args.arn;
        this.cacheBehavior = args.cacheBehavior;
        this.callerReference = args.callerReference;
        this.comment = args.comment;
        this.customErrorResponse = args.customErrorResponse;
        if (args.defaultCacheBehavior === undefined) {
            throw new Error("Property argument 'defaultCacheBehavior' is required, but was missing");
        }
        this.defaultCacheBehavior = args.defaultCacheBehavior;
        this.defaultRootObject = args.defaultRootObject;
        this.domainName = args.domainName;
        if (args.enabled === undefined) {
            throw new Error("Property argument 'enabled' is required, but was missing");
        }
        this.enabled = args.enabled;
        this.etag = args.etag;
        this.hostedZoneId = args.hostedZoneId;
        this.httpVersion = args.httpVersion;
        this.inProgressValidationBatches = args.inProgressValidationBatches;
        this.isIpv6Enabled = args.isIpv6Enabled;
        this.lastModifiedTime = args.lastModifiedTime;
        this.loggingConfig = args.loggingConfig;
        if (args.origin === undefined) {
            throw new Error("Property argument 'origin' is required, but was missing");
        }
        this.origin = args.origin;
        this.priceClass = args.priceClass;
        if (args.restrictions === undefined) {
            throw new Error("Property argument 'restrictions' is required, but was missing");
        }
        this.restrictions = args.restrictions;
        this.retainOnDelete = args.retainOnDelete;
        this.status = args.status;
        this.tags = args.tags;
        if (args.viewerCertificate === undefined) {
            throw new Error("Property argument 'viewerCertificate' is required, but was missing");
        }
        this.viewerCertificate = args.viewerCertificate;
        this.webAclId = args.webAclId;
    }
}

export interface DistributionArgs {
    readonly activeTrustedSigners?: {[key: string]: any};
    readonly aliases?: string[];
    readonly arn?: string;
    readonly cacheBehavior?: { allowedMethods: string[], cachedMethods: string[], compress?: boolean, defaultTtl: number, forwardedValues: { cookies: { forward: string, whitelistedNames?: string[] }[], headers?: string[], queryString: boolean, queryStringCacheKeys?: string[] }[], lambdaFunctionAssociation?: { eventType: string, lambdaArn: string }[], maxTtl: number, minTtl: number, pathPattern: string, smoothStreaming?: boolean, targetOriginId: string, trustedSigners?: string[], viewerProtocolPolicy: string }[];
    readonly callerReference?: string;
    readonly comment?: string;
    readonly customErrorResponse?: { errorCachingMinTtl?: number, errorCode: number, responseCode?: number, responsePagePath?: string }[];
    readonly defaultCacheBehavior: { allowedMethods: string[], cachedMethods: string[], compress?: boolean, defaultTtl: number, forwardedValues: { cookies: { forward: string, whitelistedNames?: string[] }[], headers?: string[], queryString: boolean, queryStringCacheKeys?: string[] }[], lambdaFunctionAssociation?: { eventType: string, lambdaArn: string }[], maxTtl: number, minTtl: number, smoothStreaming?: boolean, targetOriginId: string, trustedSigners?: string[], viewerProtocolPolicy: string }[];
    readonly defaultRootObject?: string;
    readonly domainName?: string;
    readonly enabled: boolean;
    readonly etag?: string;
    readonly hostedZoneId?: string;
    readonly httpVersion?: string;
    readonly inProgressValidationBatches?: number;
    readonly isIpv6Enabled?: boolean;
    readonly lastModifiedTime?: string;
    readonly loggingConfig?: { bucket: string, includeCookies?: boolean, prefix?: string }[];
    readonly origin: { customHeader?: { name: string, value: string }[], customOriginConfig?: { httpPort: number, httpsPort: number, originKeepaliveTimeout?: number, originProtocolPolicy: string, originReadTimeout?: number, originSslProtocols: string[] }[], domainName: string, originId: string, originPath?: string, s3OriginConfig?: { originAccessIdentity: string }[] }[];
    readonly priceClass?: string;
    readonly restrictions: { geoRestriction: { locations?: string[], restrictionType: string }[] }[];
    readonly retainOnDelete?: boolean;
    readonly status?: string;
    readonly tags?: {[key: string]: any};
    readonly viewerCertificate: { acmCertificateArn?: string, cloudfrontDefaultCertificate?: boolean, iamCertificateId?: string, minimumProtocolVersion?: string, sslSupportMethod?: string }[];
    readonly webAclId?: string;
}

