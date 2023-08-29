import { DeployerT } from "./base.js";
import { CoinShopDeployerT, CoinShopHandleT } from "./coin-shop.js";
import { SummonAdminT, SummonHandleT, SummonSummonerT } from "./summon.js";

export * from "./base.js";
export * from "./coin-shop.js";
export * from "./summon.js";
export * from "./events.js";

type ContractHandleT = CoinShopHandleT | SummonHandleT;
type ParticipantT = DeployerT | CoinShopDeployerT | SummonAdminT | SummonSummonerT;

export { ContractHandleT, ParticipantT };
