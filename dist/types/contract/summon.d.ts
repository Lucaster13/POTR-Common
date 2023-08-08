import { AsaId } from "../network";
import { DeployerInterfaceT, ContractHandleT, ParticipantInterfaceT } from "./base";
type SummonAdminInterfaceT = {
    get_potr: (coin: AsaId) => Promise<AsaId> | AsaId;
    coin: AsaId;
} & ParticipantInterfaceT;
type SummonSummonerInterfaceT = {
    opt_in: (potrId: AsaId) => Promise<boolean>;
} & DeployerInterfaceT;
type SummonHandleT = ContractHandleT<ParticipantInterfaceT> & {
    p: {
        Admin: (int: SummonAdminInterfaceT) => Promise<void>;
        Summoner: (int: SummonSummonerInterfaceT) => Promise<void>;
    };
};
export { SummonAdminInterfaceT, SummonSummonerInterfaceT, SummonHandleT };
