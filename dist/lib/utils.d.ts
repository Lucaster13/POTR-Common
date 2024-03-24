import { AxiosRequestConfig } from "axios";
import Bottleneck from "bottleneck";
export declare const makeRateLimiter: (rps?: number, threads?: number | null) => Bottleneck;
export declare const rateLimitedAxiosGET: <T>() => ((arg1: string, arg2: AxiosRequestConfig<any> | undefined) => Promise<import("axios").AxiosResponse<T, any>>) & {
    withOptions: (options: Bottleneck.JobOptions, arg1: string, arg2: AxiosRequestConfig<any> | undefined) => Promise<import("axios").AxiosResponse<T, any>>;
};
export declare const shortenAddress: (addr?: string) => string;
export declare function formatTimestamp(timestamp: Date): string;
export declare const sleep: (ms: number) => Promise<void>;
