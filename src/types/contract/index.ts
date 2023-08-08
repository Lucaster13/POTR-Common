import { DeployerT } from "./base";
import { CoinShopDeployerT, CoinShopHandleT } from "./coin-shop";
import { SummonAdminT, SummonHandleT, SummonSummonerT } from "./summon";

export * from "./base";
export * from "./coin-shop";
export * from "./summon";
export * from "./events";

type ContractHandleT = CoinShopHandleT | SummonHandleT;

type ParticipantT = DeployerT | CoinShopDeployerT | SummonAdminT | SummonSummonerT;

export { ContractHandleT, ParticipantT };
