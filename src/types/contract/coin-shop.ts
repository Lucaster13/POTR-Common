import { EventStream } from "@reach-sh/stdlib/dist/types/shared_impl";
import { AsaId, BigNumber, NetworkAddress } from "../network";
import { DeployerInterface, ApiFn, ContractHandle, Maybe } from "./base";

/*

    COIN SHOP TYPES

*/

// Interface for running contract as admin
interface CoinShopAdminInterface extends DeployerInterface {
  // pass in coin asa ids
  coin_asa_ids: [AsaId, AsaId, AsaId];
}

// names for all events, views and apis
type CoinShopEvent = "restock" | "purchase" | "price_change";
type CoinShopView = "is_paused" | "coin_prices" | "coin_supply";
type CoinShopBuyerApiFunction = "bronze" | "silver" | "gold";
type CoinShopControllerApiFunction =
  | "restock"
  | "set_prices"
  | "toggle_pause"
  | "terminate";

type Coins = [BigNumber, BigNumber, BigNumber];

// types for all view values
type CoinShopPrices = Coins;
type CoinShopSupply = Coins;
type CoinShopIsPaused = boolean;

// interfaces for APIS
interface CoinShopControllerApi
  extends Record<CoinShopControllerApiFunction, ApiFn<boolean>> {
  restock: (sup: CoinShopSupply) => Promise<Maybe<boolean>>;
  set_prices: (pr: CoinShopPrices) => Promise<Maybe<boolean>>;
  toggle_pause: () => Promise<Maybe<boolean>>;
  terminate: () => Promise<Maybe<boolean>>;
}
interface CoinShopBuyerApi
  extends Record<CoinShopBuyerApiFunction, ApiFn<boolean>> {
  bronze: () => Promise<Maybe<boolean>>;
  silver: () => Promise<Maybe<boolean>>;
  gold: () => Promise<Maybe<boolean>>;
}

// interfaces for View
interface CoinShopViews extends Record<CoinShopView, ApiFn<any>> {
  coin_supply: () => Promise<Maybe<CoinShopSupply>>;
  coin_prices: () => Promise<Maybe<CoinShopPrices>>;
  is_paused: () => Promise<Maybe<boolean>>;
}

// interfaces for Events
interface CoinShopEvents extends Record<CoinShopEvent, EventStream<any>> {
  restock: EventStream<Coins>;
  purchase: EventStream<[AsaId, NetworkAddress]>;
  price_change: EventStream<Coins>;
}

interface CoinShopApi {
  controller_api: CoinShopControllerApi;
  buyer_api: CoinShopBuyerApi;
}

interface CoinShopHandle extends ContractHandle {
  a: CoinShopApi;
  v: CoinShopViews;
  e: CoinShopEvents;
}

export {
  CoinShopAdminInterface,
  CoinShopEvent,
  CoinShopView,
  CoinShopPrices,
  CoinShopSupply,
  CoinShopIsPaused,
  CoinShopControllerApi,
  CoinShopBuyerApi,
  CoinShopApi,
  CoinShopHandle,
  CoinShopEvents,
};
