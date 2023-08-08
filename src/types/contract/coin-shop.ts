import { EventStream } from "@reach-sh/stdlib/dist/types/shared_impl";
import { AsaId, BigNumber, NetworkAddress } from "../network";
import {
  DeployerInterfaceT,
  ContractHandleT,
  Maybe,
  ParticipantInterfaceT,
} from "./base";

/*

    COIN SHOP TYPES

*/

// Interface for running contract as admin
type CoinShopAdminT = {
  // pass in coin asa ids
  coin_asa_ids: [AsaId, AsaId, AsaId];
} & DeployerInterfaceT;

// names for all events, views and apis
type CoinAmountsT = [BigNumber, BigNumber, BigNumber];

// interfaces for APIS
type CoinShopControllerApiT = {
  restock: (sup: CoinAmountsT) => Promise<Maybe<boolean>>;
  set_prices: (pr: CoinAmountsT) => Promise<Maybe<boolean>>;
  toggle_pause: () => Promise<Maybe<boolean>>;
  terminate: () => Promise<Maybe<boolean>>;
};
type CoinShopBuyerApiT = {
  bronze: () => Promise<Maybe<boolean>>;
  silver: () => Promise<Maybe<boolean>>;
  gold: () => Promise<Maybe<boolean>>;
};

// interfaces for View
type CoinShopViewT = {
  coin_supply: () => Promise<Maybe<CoinAmountsT>>;
  coin_prices: () => Promise<Maybe<CoinAmountsT>>;
  is_paused: () => Promise<Maybe<boolean>>;
};

// interfaces for Events
type CoinShopEventT = {
  restock: EventStream<CoinAmountsT>;
  purchase: EventStream<[AsaId, NetworkAddress]>;
  price_change: EventStream<CoinAmountsT>;
};

type CoinShopApiT = {
  controller_api: CoinShopControllerApiT;
  buyer_api: CoinShopBuyerApiT;
};

type CoinShopHandleT = ContractHandleT<ParticipantInterfaceT> & {
  a: CoinShopApiT;
  v: CoinShopViewT;
  e: CoinShopEventT;
};

export {
  CoinShopAdminT,
  CoinShopViewT,
  CoinAmountsT,
  CoinShopControllerApiT,
  CoinShopBuyerApiT,
  CoinShopApiT,
  CoinShopHandleT,
  CoinShopEventT,
};
