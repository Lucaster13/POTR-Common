type EventStreamT = {
    lastTime: () => Promise<number>;
    next: () => Promise<any>;
    nextUpToTime: (t: number) => Promise<any>;
    seek: (t: number) => void;
    seekNow: () => Promise<void>;
    monitor: (onEvent: (x: any) => void) => void;
};
type ContractEventT<ET, T> = {
    type: ET;
    time: number;
    timestamp: string;
    data: T;
    block: number;
};
type EventFormatterT<ET, T> = (e: any) => Promise<ContractEventT<ET, T>> | ContractEventT<ET, T>;
export { ContractEventT, EventStreamT, EventFormatterT };
