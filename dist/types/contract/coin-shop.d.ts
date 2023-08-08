import { EventStream } from "@reach-sh/stdlib/dist/types/shared_impl";
import { AsaId, BigNumber, NetworkAddress } from "../network";
import { DeployerInterfaceT, ContractHandleT, Maybe, ParticipantInterfaceT } from "./base";
type CoinShopAdminT = {
    coin_asa_ids: [AsaId, AsaId, AsaId];
} & DeployerInterfaceT;
type CoinAmountsT = [BigNumber, BigNumber, BigNumber];
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
type CoinShopViewT = {
    coin_supply: () => Promise<Maybe<CoinAmountsT>>;
    coin_prices: () => Promise<Maybe<CoinAmountsT>>;
    is_paused: () => Promise<Maybe<boolean>>;
};
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
export { CoinShopAdminT, CoinShopViewT, CoinAmountsT, CoinShopControllerApiT, CoinShopBuyerApiT, CoinShopApiT, CoinShopHandleT, CoinShopEventT, };
