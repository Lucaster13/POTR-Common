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
const COIN_SUPPLY = [1200, 600, 200];
const COIN_PRICES = [10, 20, 30];
export { COIN_RARITY_WEIGHTS, COIN_TYPES, COIN_PRICES, COIN_SUPPLY };
