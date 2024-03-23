import { BaseHandleT, LoggerT, Maybe } from "./base.js";
import { Participant } from "../../constants/index.js";
type CoinShopDeployerT = {
    coin_asa_ids: number[];
};
type CoinAmountsT = number[];
type CoinAmountsEventT = [CoinAmountsT];
type CoinShopHandleT = {
    a: {
        controller_api: {
            restock: (sup: CoinAmountsT) => Promise<Maybe<boolean>>;
            set_prices: (pr: CoinAmountsT) => Promise<Maybe<boolean>>;
            toggle_pause: () => Promise<Maybe<boolean>>;
            terminate: () => Promise<Maybe<boolean>>;
            withdraw: () => Promise<boolean>;
        };
        buyer_api: {
            bronze: () => Promise<Maybe<boolean>>;
            silver: () => Promise<Maybe<boolean>>;
            gold: () => Promise<Maybe<boolean>>;
        };
    };
    v: {
        coin_supply: () => Promise<Maybe<CoinAmountsT>>;
        coin_prices: () => Promise<Maybe<CoinAmountsT>>;
        is_paused: () => Promise<Maybe<boolean>>;
    };
    e: {
        restock: any;
        purchase: any;
        price_change: any;
        withdraw: any;
        terminate: any;
    };
    p: {
        [Participant.ADMIN]: (i: LoggerT) => Promise<void>;
        [Participant.DEPLOYER]: (i: CoinShopDeployerT) => Promise<void>;
    };
} & BaseHandleT;
export { CoinShopDeployerT, CoinAmountsT, CoinShopHandleT, CoinAmountsEventT };
