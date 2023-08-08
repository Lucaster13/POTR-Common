import { EventStream } from "./events";
import { AsaId, BigNumber } from "../network";
import { BaseHandleT, DeployerInterfaceT, LoggerInterfaceT } from "./base";
import { Participant, Result, SummonStatus } from "../../constants";

/*

    SUMMON CONTRACT TYPES

*/

// Interface for running contract as admin
type SummonAdminInterfaceT = {
  // determines which potr to send based on coin type
  get_potr: (coin: BigNumber) => Promise<AsaId> | AsaId;
  // the asa id of the payment coin
  coin: AsaId;
} & LoggerInterfaceT;

// interface for connecting as a summoner
type SummonSummonerInterfaceT = {
  // does opt in and returns status of opt-in
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
