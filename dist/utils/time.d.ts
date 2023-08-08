declare const minsToSecs: (m: number) => number;
declare const hoursToSecs: (h: number) => number;
declare const daysToSecs: (d: number) => number;
declare function formatTimestamp(timestamp: Date): string;
export { minsToSecs, hoursToSecs, daysToSecs, formatTimestamp };
