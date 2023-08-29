declare const enum SummonStatus {
    PREPARING = "PREPARING",
    PAYING = "PAYING",
    SUMMONING = "SUMMONING",
    CLAIMING = "CLAIMING"
}
declare const enum SummonEvent {
    STATUS = "status",
    RESULT = "result"
}
export { SummonStatus, SummonEvent };
