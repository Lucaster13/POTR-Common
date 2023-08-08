import { Coin } from "../constants";
import { AsaIdT } from "../types";
declare function coinToAsaId(coin: Coin): AsaIdT;
declare function asaIdToCoin(coinAsaId: AsaIdT): Coin;
export { coinToAsaId, asaIdToCoin };
