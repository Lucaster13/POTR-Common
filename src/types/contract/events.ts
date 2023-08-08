interface ContractEvent<ET, T> {
  type: ET;
  time: number;
  data: T;
}

export { ContractEvent };
