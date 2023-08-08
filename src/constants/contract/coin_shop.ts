const enum CoinShopView {
	COIN_SUPPLY = "coin_supply",
	COIN_PRICES = "coin_prices",
	IS_PAUSED = "is_paused",
}
const enum CoinShopApi {
	RESTOCK = "restock",
	SET_PRICES = "set_prices",
	TERMINATE = "terminate",
	TOGGLE_PAUSE = "toggle_pause",
	WITHDRAW = "withdraw",
}

const enum CoinShopEvent {
	RESTOCK = "restock",
	PURCHASE = "purchase",
	PRICE_CHANGE = "price_change",
	WITHDRAW = "withdraw",
	TERMINATE = "terminate",
}

export { CoinShopEvent, CoinShopView, CoinShopApi };
