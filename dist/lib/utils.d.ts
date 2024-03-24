import { AxiosRequestConfig } from "axios";
import Bottleneck from "bottleneck";
import { PotrBaseClass, PotrClass } from "../constants";
import { Arc69Metadata, PotrAssetMetadata, PotrMetadata } from "../types";
export declare const makeRateLimiter: (rps?: number, threads?: number | null) => Bottleneck;
export declare const rateLimitedAxiosGET: <T>() => ((arg1: string, arg2: AxiosRequestConfig<any> | undefined) => Promise<import("axios").AxiosResponse<T, any>>) & {
    withOptions: (options: Bottleneck.JobOptions, arg1: string, arg2: AxiosRequestConfig<any> | undefined) => Promise<import("axios").AxiosResponse<T, any>>;
};
export declare const shortenAddress: (addr?: string) => string;
export declare function formatTimestamp(timestamp: Date): string;
export declare const sleep: (ms: number) => Promise<void>;
export declare function getCIDFromReserveAddr(reserveAddr: string): string;
export declare function getReserveAddrFromCID(cidString: string): string;
export declare const resolveIpfsGatewayUrl: (cid: string) => string;
export declare const getArc69MetadataForAsaId: (asaId: number) => Promise<Arc69Metadata>;
export declare function makePotrMetadata(potrAssetMetadata: PotrAssetMetadata, potrArc69Metadata: Arc69Metadata): PotrMetadata;
export declare function getBaseClass(potrClass: PotrClass): PotrBaseClass;
