import { EventStream } from "./events";
import { AsaId, BigNumber } from "../network";
import { BaseHandleT, DeployerInterfaceT, LoggerInterfaceT } from "./base";
import { Participant, Result, SummonStatus } from "../../constants";
type SummonAdminInterfaceT = {
    get_potr: (coin: BigNumber) => Promise<AsaId> | AsaId;
    coin: AsaId;
} & LoggerInterfaceT;
type SummonSummonerInterfaceT = {
    opt_in: (potrId: BigNumber) => Promise<boolean>;
};
type SummonHandleT = {
    e: {
        status: EventStream<SummonStatus>;
        result: EventStream<Result>;
    };
    p: {
        [Participant.ADMIN]: (int: SummonAdminInterfaceT) => Promise<void>;
        [Participant.DEPLOYER]: (int: DeployerInterfaceT) => Promise<void>;
        [Participant.SUMMONER]: (int: SummonSummonerInterfaceT) => Promise<void>;
    };
} & BaseHandleT;
export { SummonAdminInterfaceT, SummonSummonerInterfaceT, SummonHandleT };
