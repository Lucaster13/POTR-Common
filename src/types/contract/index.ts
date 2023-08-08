import { DeployerInterfaceT } from "./base";
import { CoinShopDeployerT, CoinShopHandleT } from "./coin-shop";
import {
  SummonAdminInterfaceT,
  SummonHandleT,
  SummonSummonerInterfaceT,
} from "./summon";

export * from "./base";
export * from "./coin-shop";
export * from "./summon";
export * from "./events";

type ContractHandleT = CoinShopHandleT | SummonHandleT;

type ParticipantInterfaceT =
  | DeployerInterfaceT
  | CoinShopDeployerT
  | SummonAdminInterfaceT
  | SummonSummonerInterfaceT;

export { ContractHandleT, ParticipantInterfaceT };
