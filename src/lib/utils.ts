import axios, { AxiosRequestConfig } from "axios";
import Bottleneck from "bottleneck";
import { format } from "date-fns";

export const makeRateLimiter = (rps = 60, threads: number | null = null) =>
	new Bottleneck({ minTime: 1000 / rps, maxConcurrent: threads });

export const rateLimitedAxiosGET = <T>() =>
	makeRateLimiter(60, 3).wrap(async (url: string, config: AxiosRequestConfig<any> | undefined) =>
		axios.get<T>(url, config),
	);

export const shortenAddress = (addr?: string) => {
	if (!addr) return "????...????";
	const start = addr.substring(0, 4);
	const end = addr.substring(addr.length - 4);
	return `${start}...${end}`;
};

export function formatTimestamp(timestamp: Date) {
	return format(timestamp, "MMMM dd, yyyy hh:mm a 'UTC'xxx");
}

export const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));
