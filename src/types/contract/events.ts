import { CoinShopEvent } from "./coin-shop";

type ContractEventType = CoinShopEvent;
interface ContractEvent<T> {
  type: ContractEventType;
  time: number;
  data: T;
}

export { ContractEventType, ContractEvent };
