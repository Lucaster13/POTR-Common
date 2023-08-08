import axios, { AxiosRequestConfig } from "axios";
import Bottleneck from "bottleneck";

const makeRateLimiter = (rps = 60, threads: number | null = null) =>
	new Bottleneck({ minTime: 1000 / rps, maxConcurrent: threads });

const rateLimitedAxiosGET = <T>() =>
	makeRateLimiter(60, 3).wrap(async (url: string, config: AxiosRequestConfig<any> | undefined) =>
		axios.get<T>(url, config),
	);

export { rateLimitedAxiosGET };
