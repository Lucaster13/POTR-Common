import { format } from "date-fns";
import { SECS_PER_DAY, SECS_PER_HOUR, SECS_PER_MIN } from "../constants";
const minsToSecs = (m) => m * SECS_PER_MIN;
const hoursToSecs = (h) => h * SECS_PER_HOUR;
const daysToSecs = (d) => d * SECS_PER_DAY;
function formatTimestamp(timestamp) {
    return format(timestamp, "MMMM dd, yyyy hh:mm a 'UTC'xxx");
}
export { minsToSecs, hoursToSecs, daysToSecs, formatTimestamp };
