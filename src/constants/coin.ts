const enum Coin {
  BRONZE = "bronze",
  SILVER = "silver",
  GOLD = "gold",
}

// Weights for determining rarity of potr to summon
const COIN_RARITY_WEIGHTS = {
  [Coin.BRONZE]: 0.1,
  [Coin.SILVER]: 0.3,
  [Coin.GOLD]: 1.0,
};

const COIN_TYPES: Coin[] = [Coin.BRONZE, Coin.SILVER, Coin.GOLD];

export { COIN_RARITY_WEIGHTS, COIN_TYPES };
