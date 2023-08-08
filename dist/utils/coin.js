import { ASA_IDS, COIN_TYPES, REACH_NETWORK } from "../constants";
function coinToAsaId(coin) {
    return ASA_IDS[REACH_NETWORK].coin[COIN_TYPES.indexOf(coin)];
}
function asaIdToCoin(coinAsaId) {
    return COIN_TYPES[ASA_IDS[REACH_NETWORK].coin.indexOf(coinAsaId)];
}
export { coinToAsaId, asaIdToCoin };
