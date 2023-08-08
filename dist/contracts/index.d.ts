import * as summon from "./build/summon.contract.mjs";
import * as coin_shop from "./build/coin_shop.contract.mjs";
declare const CONTRACT_BACKENDS: {
    coin_shop: typeof coin_shop;
    summon: typeof summon;
};
export default CONTRACT_BACKENDS;
