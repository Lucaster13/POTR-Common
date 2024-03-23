type AssetInformation = {
    "asset-id": number;
    amount: number;
};
type AssetMetadata = {
    index: number;
    params: {
        name: string;
        url: string;
        "unit-name": string;
    };
};
type AssetConfigTransaction = {
    "asset-config-transaction": AssetInformation;
    "created-asset-index": number;
    note: string;
};
type PaginatedResponse = {
    "next-token": string | undefined;
};
type AccountInformationResponse = {
    assets: AssetInformation[];
};
type AssetMetadataResponse = {
    assets: AssetMetadata[];
} & PaginatedResponse;
type AssetConfigTransactionsResponse = {
    transactions: AssetConfigTransaction[];
} & PaginatedResponse;
export { AccountInformationResponse, AssetMetadataResponse, AssetConfigTransactionsResponse };
