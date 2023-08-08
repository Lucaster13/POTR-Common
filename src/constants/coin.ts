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

const COIN_SUPPLY = [1200, 600, 200];
const COIN_PRICES = [10, 20, 30];

export { Coin, COIN_RARITY_WEIGHTS, COIN_TYPES, COIN_PRICES, COIN_SUPPLY };
