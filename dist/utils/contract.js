const padString = (str, maxLen) => str.padEnd(maxLen, "\u0000");
const unPadString = (str) => str.replace(/\0/g, "");
export { padString, unPadString };
//# sourceMappingURL=contract.js.map