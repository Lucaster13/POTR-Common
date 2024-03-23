import { BaseHandleT, DeployerT, LoggerT } from "./base.js";
import { Participant } from "../../constants/index.js";
type SummonAdminT = {
    get_potr: (coin: number) => Promise<number> | number;
    coin: number;
} & LoggerT;
type SummonSummonerT = {
    opt_in: (potrId: number) => Promise<boolean>;
};
type SummonHandleT = {
    e: {
        status: any;
        result: any;
    };
    p: {
        [Participant.ADMIN]: (int: SummonAdminT) => Promise<void>;
        [Participant.DEPLOYER]: (int: DeployerT) => Promise<void>;
        [Participant.SUMMONER]: (int: SummonSummonerT) => Promise<void>;
    };
} & BaseHandleT;
export { SummonAdminT, SummonSummonerT, SummonHandleT };
