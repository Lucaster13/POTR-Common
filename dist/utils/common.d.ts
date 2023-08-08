import { AxiosRequestConfig } from "axios";
import Bottleneck from "bottleneck";
declare const rateLimitedAxiosGET: <T>() => ((arg1: string, arg2: AxiosRequestConfig<any> | undefined) => Promise<import("axios").AxiosResponse<T, any>>) & {
    withOptions: (options: Bottleneck.JobOptions, arg1: string, arg2: AxiosRequestConfig<any> | undefined) => Promise<import("axios").AxiosResponse<T, any>>;
};
export { rateLimitedAxiosGET };
