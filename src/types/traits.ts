import {
	Background,
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
} from "../constants";
import { AsaId } from "./network";

type HumanoidTraits = {
	Body: HumanoidBody;
	Head: HumanoidHead;
	Eyes: HumanoidEyes;
	Mouth: HumanoidMouth;
	Back: HumanoidBack;
};

type PhantomTraits = {
	Body: PhantomBody;
} & HumanoidTraits;

type DragonTraits = {
	Body: DragonBody;
	Head: DragonHead;
	Eyes: DragonEyes;
	Mouth: DragonMouth;
	Back: DragonBack;
};

type GolemTraits = {
	Body: GolemBody;
	Head: GolemHead;
	Eyes: GolemEyes;
	Mouth: GolemMouth;
	Back: GolemBack;
};

type Traits = {
	Background: Background;
	Class: Class;
	Power: number;
	Level: number;
} & (HumanoidTraits | PhantomTraits | DragonTraits | GolemTraits);

interface PotrArc69Metadata {
	standard: "arc69";
	description: string;
	external_url: string;
	mime_type: "image/png";
	properties: Traits;
}

interface PotrMetadata {
	name: string;
	unitName: string;
	id: AsaId;
	url: string;
	balance: number;
	description: string;
	traits: Traits;
}

export { PotrArc69Metadata, Traits, PotrMetadata };
