import { Background, BaseClass, Class, DragonBack, DragonBody, DragonEyes, DragonHead, DragonMouth, GolemBack, GolemBody, GolemEyes, GolemHead, GolemMouth, HumanoidBack, HumanoidBody, HumanoidEyes, HumanoidHead, HumanoidMouth, PhantomBody } from "../constants";
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
    Level: number;
} & (HumanoidTraits | PhantomTraits | DragonTraits | GolemTraits);
type Arc69Metadata = {
    standard: "arc69";
    description: string;
    external_url: string;
    mime_type: "image/png";
    properties: Traits;
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
    traits: Traits;
    baseClass: BaseClass;
} & PotrAssetMetadata;
export { Arc69Metadata, PotrAssetMetadata, Traits, PotrMetadata };
