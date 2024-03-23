import { Participant } from "../../constants/index.js";
type LoggerT = {
    log?: any;
};
type DeployerT = {
    deployed: (ctcId: number, ctcAddr: string) => void;
} & LoggerT;
type Maybe<T> = ["Some" | "None", T];
type BaseHandleT = {
    p: Partial<Record<Participant, () => Promise<void>>>;
    getInfo: () => Promise<number>;
};
export { DeployerT, LoggerT, Maybe, BaseHandleT };
