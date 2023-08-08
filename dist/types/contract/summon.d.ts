import { EventStream } from "./events";
import { AsaIdT, BigNumberT } from "../network";
import { BaseHandleT, DeployerT, LoggerT } from "./base";
import { Participant, Result, SummonStatus } from "../../constants";
type SummonAdminT = {
    get_potr: (coin: BigNumberT) => Promise<AsaIdT> | AsaIdT;
    coin: AsaIdT;
} & LoggerT;
type SummonSummonerT = {
    opt_in: (potrId: BigNumberT) => Promise<boolean>;
};
type SummonHandleT = {
    e: {
        status: EventStream<SummonStatus>;
        result: EventStream<Result>;
    };
    p: {
        [Participant.ADMIN]: (int: SummonAdminT) => Promise<void>;
        [Participant.DEPLOYER]: (int: DeployerT) => Promise<void>;
        [Participant.SUMMONER]: (int: SummonSummonerT) => Promise<void>;
    };
} & BaseHandleT;
export { SummonAdminT, SummonSummonerT, SummonHandleT };
