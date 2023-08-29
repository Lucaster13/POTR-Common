import { Participant } from "../../constants/index.js";
import { BigNumberT, NetworkAddressT } from "../network.js";
type LoggerT = {
    log?: any;
};
type DeployerT = {
    deployed: (ctcId: BigNumberT, ctcAddr: NetworkAddressT) => void;
} & LoggerT;
type Maybe<T> = ["Some" | "None", T];
type BaseHandleT = {
    p: Partial<Record<Participant, () => Promise<void>>>;
    getInfo: () => Promise<BigNumberT>;
};
export { DeployerT, LoggerT, Maybe, BaseHandleT };
