import { PotrBaseClass } from "../constants";
import { PotrTraits } from "./traits";

// ALGORAND NETWORK RESPONSES
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

type AccountInformationResponse = { assets: AssetInformation[] };
type AssetMetadataResponse = { assets: AssetMetadata[] } & PaginatedResponse;
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
};

type PotrMetadata = {
	balance: number;
	description: string;
	traits: PotrTraits;
	baseClass: PotrBaseClass;
} & PotrAssetMetadata;

export {
	AccountInformationResponse,
	PotrMetadata,
	Arc69Metadata,
	PotrAssetMetadata,
	AssetMetadataResponse,
	AssetConfigTransactionsResponse,
};
