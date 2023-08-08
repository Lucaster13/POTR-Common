import { SECS_PER_DAY, SECS_PER_HOUR, SECS_PER_MIN } from "../constants";

const minsToSecs = (m: number) => m * SECS_PER_MIN;
const hoursToSecs = (h: number) => h * SECS_PER_HOUR;
const daysToSecs = (d: number) => d * SECS_PER_DAY;

export { minsToSecs, hoursToSecs, daysToSecs };
