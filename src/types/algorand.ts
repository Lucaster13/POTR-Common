import { PotrBaseClass } from "../constants";
import { PotrTraits } from "./traits";

// ALGORAND NETWORK RESPONSES
type AssetHolding = {
	"asset-id": number;
	amount: number;
};

type AssetMetadata = {
	index: number;
	params: {
		clawback: string;
		creator: string;
		decimals: number;
		"default-frozen": boolean;
		freeze: string;
		manager: string;
		name: string;
		"name-b64": string;
		reserve: string;
		total: number;
		"unit-name": string;
		"unit-name-b64": string;
		url: string;
		"url-b64": string;
	};
};

type AssetConfigTransaction = {
	"asset-config-transaction": AssetHolding;
	"created-asset-index": number;
	note: string;
};

type PaginatedResponse = {
	"next-token": string | undefined;
};

type PaginatedRequest = {
	nextToken?: string;
};

type GetAsaIdsInWalletRequest = {
	addr: string;
	minBal?: number;
	limit?: number;
} & PaginatedRequest;

type GetAllAsaMetadataRequest = {
	addr: string;
} & PaginatedRequest;

type AccountAssetHoldingResponse = { assets: AssetHolding[] } & PaginatedResponse;
type AssetMetadataResponse = { asset: AssetMetadata } & PaginatedResponse;
type CreatedAssetsResponse = { assets: AssetMetadata[] } & PaginatedResponse;
type AssetConfigTransactionsResponse = { transactions: AssetConfigTransaction[] } & PaginatedResponse;

// ASSET METADATA
type Arc69Metadata = {
	standard: "arc69";
	description: string;
	external_url: string;
	mime_type: "image/png";
	properties: PotrTraits;
};

type PotrAssetMetadata = {
	id: number;
	name: string;
	url: string;
	unitName: string;
	balance: number;
};

type PotrMetadata = {
	traits: PotrTraits;
	baseClass: PotrBaseClass;
	description: string;
} & PotrAssetMetadata;

export type {
	AccountAssetHoldingResponse,
	PotrMetadata,
	Arc69Metadata,
	AssetMetadata,
	AssetConfigTransaction,
	AssetHolding,
	PotrAssetMetadata,
	AssetMetadataResponse,
	AssetConfigTransactionsResponse,
	CreatedAssetsResponse,
	GetAsaIdsInWalletRequest,
	GetAllAsaMetadataRequest,
};
