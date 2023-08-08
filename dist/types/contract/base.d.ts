import { Participant } from "../../constants";
import { BigNumber, NetworkAddress } from "../network";
type LoggerInterfaceT = {
    log?: any;
};
type DeployerInterfaceT = {
    deployed: (ctcId: BigNumber, ctcAddr: NetworkAddress) => void;
} & LoggerInterfaceT;
type Maybe<T> = ["Some" | "None", T];
type BaseHandleT = {
    p: Partial<Record<Participant, () => Promise<void>>>;
    getInfo: () => Promise<BigNumber>;
};
export { DeployerInterfaceT, LoggerInterfaceT, Maybe, BaseHandleT };
