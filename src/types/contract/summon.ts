import { AsaId } from "../network";
import {
  DeployerInterfaceT,
  ContractHandleT,
  ParticipantInterfaceT,
} from "./base";

/*

    SUMMON CONTRACT TYPES

*/

// Interface for running contract as admin
type SummonAdminInterfaceT = {
  // determines which potr to send based on coin type
  get_potr: (coin: AsaId) => Promise<AsaId> | AsaId;
  // the asa id of the payment coin
  coin: AsaId;
} & ParticipantInterfaceT;

// interface for connecting as a summoner
type SummonSummonerInterfaceT = {
  // does opt in and returns status of opt-in
  opt_in: (potrId: AsaId) => Promise<boolean>;
} & DeployerInterfaceT;

type SummonHandleT = {
  p: {
    Admin: (int: SummonAdminInterfaceT) => Promise<void>;
    Summoner: (int: SummonSummonerInterfaceT) => Promise<void>;
  };
} & ContractHandleT;

export { SummonAdminInterfaceT, SummonSummonerInterfaceT, SummonHandleT };
