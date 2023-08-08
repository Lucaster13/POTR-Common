var CoinShopView;
(function (CoinShopView) {
    CoinShopView["COIN_SUPPLY"] = "coin_supply";
    CoinShopView["COIN_PRICES"] = "coin_prices";
    CoinShopView["IS_PAUSED"] = "is_paused";
})(CoinShopView || (CoinShopView = {}));
var CoinShopApi;
(function (CoinShopApi) {
    CoinShopApi["RESTOCK"] = "restock";
    CoinShopApi["SET_PRICES"] = "set_prices";
    CoinShopApi["TERMINATE"] = "terminate";
    CoinShopApi["TOGGLE_PAUSE"] = "toggle_pause";
    CoinShopApi["WITHDRAW"] = "withdraw";
})(CoinShopApi || (CoinShopApi = {}));
var CoinShopEvent;
(function (CoinShopEvent) {
    CoinShopEvent["RESTOCK"] = "restock";
    CoinShopEvent["PURCHASE"] = "purchase";
    CoinShopEvent["PRICE_CHANGE"] = "price_change";
    CoinShopEvent["WITHDRAW"] = "withdraw";
    CoinShopEvent["TERMINATE"] = "terminate";
})(CoinShopEvent || (CoinShopEvent = {}));
export { CoinShopEvent, CoinShopView, CoinShopApi };
