declare const enum Coin {
    BRONZE = "bronze",
    SILVER = "silver",
    GOLD = "gold"
}
declare const COIN_RARITY_WEIGHTS: {
    bronze: number;
    silver: number;
    gold: number;
};
declare const COIN_TYPES: Coin[];
declare const COIN_SUPPLY: number[];
declare const COIN_PRICES: number[];
export { COIN_RARITY_WEIGHTS, COIN_TYPES, COIN_PRICES, COIN_SUPPLY };
