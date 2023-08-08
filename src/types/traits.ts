import {
	Background,
	BaseClass,
	Class,
	DragonBack,
	DragonBody,
	DragonEyes,
	DragonHead,
	DragonMouth,
	GolemBack,
	GolemBody,
	GolemEyes,
	GolemHead,
	GolemMouth,
	HumanoidBack,
	HumanoidBody,
	HumanoidEyes,
	HumanoidHead,
	HumanoidMouth,
	PhantomBody,
	Rarity,
} from "../constants";
import { AsaIdT } from "./network";

type HumanoidTraitsT = {
	Body: HumanoidBody;
	Head: HumanoidHead;
	Eyes: HumanoidEyes;
	Mouth: HumanoidMouth;
	Back: HumanoidBack;
};

type PhantomTraitsT = {
	Body: PhantomBody;
} & HumanoidTraitsT;

type DragonTraitsT = {
	Body: DragonBody;
	Head: DragonHead;
	Eyes: DragonEyes;
	Mouth: DragonMouth;
	Back: DragonBack;
};

type GolemTraitsT = {
	Body: GolemBody;
	Head: GolemHead;
	Eyes: GolemEyes;
	Mouth: GolemMouth;
	Back: GolemBack;
};

type TraitsT = {
	Background: Background;
	Class: Class;
	Power: number;
	Level: number;
} & (HumanoidTraitsT | PhantomTraitsT | DragonTraitsT | GolemTraitsT);

type Arc69MetadataT = {
	standard: "arc69";
	description: string;
	external_url: string;
	mime_type: "image/png";
	properties: TraitsT;
};

type PotrAssetMetadataT = {
	id: AsaIdT;
	name: string;
	url: string;
	unitName: string;
};

type PotrMetadataT = {
	balance: number;
	description: string;
	traits: TraitsT;
	baseClass: BaseClass;
	rarity: Rarity;
} & PotrAssetMetadataT;

export { Arc69MetadataT, PotrAssetMetadataT, TraitsT, PotrMetadataT };
