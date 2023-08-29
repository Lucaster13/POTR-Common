import { Event, Time } from "@reach-sh/stdlib/dist/types/shared_impl";

type EventStreamT<T> = {
	lastTime: () => Promise<Time>;
	next: () => Promise<Event<T>>;
	nextUpToTime: (t: Time) => Promise<Event<T>>;
	seek: (t: Time) => void;
	seekNow: () => Promise<void>;
	monitor: (onEvent: (x: Event<T>) => void) => void;
};

type ContractEventT<ET, T> = {
	type: ET;
	time: number;
	timestamp: string;
	data: T;
	block: number;
};

type EventFormatterT<ET, T> = (e: Event<T>) => Promise<ContractEventT<ET, T>> | ContractEventT<ET, T>;

export { ContractEventT, EventStreamT, EventFormatterT };
