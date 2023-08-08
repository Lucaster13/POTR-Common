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
export { COIN_RARITY_WEIGHTS, COIN_TYPES };
