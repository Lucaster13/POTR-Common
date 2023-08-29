import { Coin } from "../constants/index.js";
import { AsaIdT } from "../types/index.js";
declare function coinToAsaId(coin: Coin): AsaIdT;
declare function asaIdToCoin(coinAsaId: AsaIdT): Coin;
export { coinToAsaId, asaIdToCoin };
