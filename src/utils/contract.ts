const padString = (str: string, maxLen: number) => str.padEnd(maxLen, "\u0000");
const unPadString = (str: string) => str.replace(/\0/g, ""); // replace all null characters with ""

export { padString, unPadString };
