import { Background, Class, DragonBack, DragonBody, DragonEyes, DragonHead, DragonMouth, GolemBack, GolemBody, GolemEyes, GolemHead, GolemMouth, HumanoidBack, HumanoidBody, HumanoidEyes, HumanoidHead, HumanoidMouth, PhantomBody } from "../constants";
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
type PotrTraits = {
    Background: Background;
    Class: Class;
    Level: number;
} & (HumanoidTraits | PhantomTraits | DragonTraits | GolemTraits);
export { PotrTraits };
