const enum SummonStatus {
	PREPARING = "PREPARING",
	PAYING = "PAYING",
	SUMMONING = "SUMMONING",
	CLAIMING = "CLAIMING",
}

const enum SummonEvent {
	STATUS = "status",
	RESULT = "result",
}

export { SummonStatus, SummonEvent };
