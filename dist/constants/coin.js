var Coin;
(function (Coin) {
    Coin["BRONZE"] = "bronze";
    Coin["SILVER"] = "silver";
    Coin["GOLD"] = "gold";
})(Coin || (Coin = {}));
const COIN_RARITY_WEIGHTS = {
    ["bronze"]: 0.1,
    ["silver"]: 0.3,
    ["gold"]: 1.0,
};
const COIN_TYPES = ["bronze", "silver", "gold"];
export { COIN_RARITY_WEIGHTS, COIN_TYPES };
//# sourceMappingURL=coin.js.map