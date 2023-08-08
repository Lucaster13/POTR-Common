import { AsaIdT } from "./network";

type AssetInformationT = {
	"asset-id": AsaIdT;
	amount: number;
};

type AssetMetadataT = {
	index: AsaIdT;
	params: {
		name: string;
		url: string;
		"unit-name": string;
	};
};

type AssetConfigTransactionT = {
	"asset-config-transaction": AssetInformationT;
	"created-asset-index": AsaIdT;
	note: string;
};

type AccountInformationResponseT = { assets: AssetInformationT[] };

type PaginatedResponseT = {
	"next-token": string | undefined;
};

type AssetMetadataResponseT = { assets: AssetMetadataT[] } & PaginatedResponseT;
type AssetConfigTransactionsResponseT = { transactions: AssetConfigTransactionT[] } & PaginatedResponseT;

export {
	AssetMetadataT,
	AssetInformationT,
	AccountInformationResponseT,
	AssetMetadataResponseT,
	AssetConfigTransactionsResponseT,
	AssetConfigTransactionT,
};
