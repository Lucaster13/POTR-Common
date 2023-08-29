import { EventStreamT } from "./events.js";
import { AsaIdT, BigNumberT } from "../network.js";
import { BaseHandleT, DeployerT, LoggerT } from "./base.js";
import { Participant, Result, SummonStatus } from "../../constants/index.js";
type SummonAdminT = {
    get_potr: (coin: BigNumberT) => Promise<AsaIdT> | AsaIdT;
    coin: AsaIdT;
} & LoggerT;
type SummonSummonerT = {
    opt_in: (potrId: BigNumberT) => Promise<boolean>;
};
type SummonHandleT = {
    e: {
        status: EventStreamT<SummonStatus>;
        result: EventStreamT<Result>;
    };
    p: {
        [Participant.ADMIN]: (int: SummonAdminT) => Promise<void>;
        [Participant.DEPLOYER]: (int: DeployerT) => Promise<void>;
        [Participant.SUMMONER]: (int: SummonSummonerT) => Promise<void>;
    };
} & BaseHandleT;
export { SummonAdminT, SummonSummonerT, SummonHandleT };
