import { ASA_IDS, COIN_TYPES, Coin, REACH_NETWORK } from "../constants/index.js";
import { AsaIdT } from "../types/index.js";

function coinToAsaId(coin: Coin): AsaIdT {
	return ASA_IDS[REACH_NETWORK].coin[COIN_TYPES.indexOf(coin)];
}

function asaIdToCoin(coinAsaId: AsaIdT): Coin {
	return COIN_TYPES[ASA_IDS[REACH_NETWORK].coin.indexOf(coinAsaId)];
}

export { coinToAsaId, asaIdToCoin };
