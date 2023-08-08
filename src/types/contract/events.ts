import { Event, Time } from "@reach-sh/stdlib/dist/types/shared_impl";

type EventStream<T> = {
	lastTime: () => Promise<Time>;
	next: () => Promise<Event<T>>;
	nextUpToTime: (t: Time) => Promise<Event<T>>;
	seek: (t: Time) => void;
	seekNow: () => Promise<void>;
	monitor: (onEvent: (x: Event<T>) => void) => void;
};

type ContractEvent<ET, T> = {
	type: ET;
	time: number;
	data: T;
};

type EventFormatter<ET, T> = (e: Event<T>) => Promise<ContractEvent<ET, T>> | ContractEvent<ET, T>;

export { ContractEvent, EventStream, EventFormatter };
