var VisualTraitType;
(function (VisualTraitType) {
    VisualTraitType["BACKGROUND"] = "PotrBackground";
    VisualTraitType["CLASS"] = "PotrClass";
    VisualTraitType["BODY"] = "Body";
    VisualTraitType["HEAD"] = "Head";
    VisualTraitType["EYES"] = "Eyes";
    VisualTraitType["BACK"] = "Back";
    VisualTraitType["MOUTH"] = "Mouth";
})(VisualTraitType || (VisualTraitType = {}));
var MetaTraitType;
(function (MetaTraitType) {
    MetaTraitType["LEVEL"] = "Level";
})(MetaTraitType || (MetaTraitType = {}));
const VISUAL_TRAITS = [
    VisualTraitType.BACKGROUND,
    VisualTraitType.CLASS,
    VisualTraitType.BODY,
    VisualTraitType.HEAD,
    VisualTraitType.BACK,
    VisualTraitType.MOUTH,
];
const META_TRAITS = [MetaTraitType.LEVEL];
const TRAIT_TYPES = [...VISUAL_TRAITS, ...META_TRAITS];
var PotrBaseClass;
(function (PotrBaseClass) {
    PotrBaseClass["HUMANOID"] = "Humanoid";
    PotrBaseClass["PHANTOM"] = "Phantom";
    PotrBaseClass["DRAGON"] = "Dragon";
    PotrBaseClass["GOLEM"] = "Golem";
})(PotrBaseClass || (PotrBaseClass = {}));
const BASE_CLASSES = [PotrBaseClass.HUMANOID, PotrBaseClass.PHANTOM, PotrBaseClass.DRAGON, PotrBaseClass.GOLEM];
var PotrBackground;
(function (PotrBackground) {
    PotrBackground["GRAY"] = "Gray";
    PotrBackground["LIGHT_BLUE"] = "Light Blue";
    PotrBackground["ORANGE"] = "Orange";
    PotrBackground["RED"] = "Red";
    PotrBackground["GREEN"] = "Green";
    PotrBackground["LIGHT_RED"] = "Light Red";
    PotrBackground["PURPLE"] = "Purple";
    PotrBackground["BLUE"] = "Blue";
    PotrBackground["LIGHT_PURPLE"] = "Light Purple";
    PotrBackground["TEAL"] = "Teal";
    PotrBackground["DARK"] = "Dark";
    PotrBackground["GOLD"] = "Gold";
    PotrBackground["POTR"] = "POTR";
})(PotrBackground || (PotrBackground = {}));
var PotrClass;
(function (PotrClass) {
    PotrClass["BERSERKER"] = "Berserker";
    PotrClass["RANGER"] = "Ranger";
    PotrClass["WIZARD"] = "Wizard";
    PotrClass["CRUSADER"] = "Crusader";
    PotrClass["NECROMANCER"] = "Necromancer";
    PotrClass["ASSASSIN"] = "Assassin";
    PotrClass["PHANTOM"] = "Phantom";
    PotrClass["ARCHANGEL"] = "Archangel";
    PotrClass["GOLEM"] = "Golem";
    PotrClass["DRAGON"] = "Dragon";
    PotrClass["HUMAN"] = "Human";
})(PotrClass || (PotrClass = {}));
var HumanoidBody;
(function (HumanoidBody) {
    HumanoidBody["NONE"] = "None";
    HumanoidBody["BEAST_HIDE"] = "Beast Hide";
    HumanoidBody["LIGHT_ARMOR"] = "Light Armor";
    HumanoidBody["WIZARD_ROBE"] = "Wizard Robe";
    HumanoidBody["SHADOW_ARMOR"] = "Shadow Armor";
    HumanoidBody["SKULLHIRT"] = "Skull Shirt";
    HumanoidBody["PLATE_ARMOR"] = "Plate Armor";
    HumanoidBody["DRAGONHIDE"] = "Dragonhide";
    HumanoidBody["FLAME"] = "Flame";
    HumanoidBody["FROST"] = "Frost";
    HumanoidBody["GOD_ARMOR"] = "God Armor";
    HumanoidBody["ANGEL_LIGHT"] = "Angel Light";
    HumanoidBody["RADIOACTIVE"] = "Radioactive";
})(HumanoidBody || (HumanoidBody = {}));
var PhantomBody;
(function (PhantomBody) {
    PhantomBody["CALM"] = "Calm";
    PhantomBody["AGGRESSIVE"] = "Aggressive";
    PhantomBody["GRACIOUS"] = "Gracious";
    PhantomBody["DISTURBED"] = "Disturbed";
})(PhantomBody || (PhantomBody = {}));
var DragonBody;
(function (DragonBody) {
    DragonBody["FLAME"] = "Flame";
    DragonBody["FROST"] = "Frost";
    DragonBody["SAND"] = "Sand";
    DragonBody["STEEL"] = "Steel";
    DragonBody["GOLD"] = "Gold";
    DragonBody["RADIOACTIVE"] = "Radioactive";
    DragonBody["ANDIENT"] = "Ancient";
})(DragonBody || (DragonBody = {}));
var GolemBody;
(function (GolemBody) {
    GolemBody["FLAME"] = "Flame";
    GolemBody["FROST"] = "Frost";
    GolemBody["SAND"] = "Sand";
    GolemBody["OBSIDIAN"] = "Obsidian";
    GolemBody["GOLD"] = "Gold";
    GolemBody["GEMSTONE"] = "Gemstone";
    GolemBody["CRYSTAL"] = "Crystal";
})(GolemBody || (GolemBody = {}));
var HumanoidHead;
(function (HumanoidHead) {
    HumanoidHead["BLOND_HAIR"] = "Blond Hair";
    HumanoidHead["BROWN_HAIR"] = "Brown Hair";
    HumanoidHead["NONE"] = "None";
    HumanoidHead["VIKING"] = "Viking";
    HumanoidHead["HEADBAND"] = "Headband";
    HumanoidHead["BANDANA"] = "Bandana";
    HumanoidHead["BUZZCUT"] = "Buzzcut";
    HumanoidHead["WIZARD_HAT"] = "Wizard Hat";
    HumanoidHead["MANGO"] = "Manga";
    HumanoidHead["FLAMING"] = "Flaming";
    HumanoidHead["HALO"] = "Halo";
    HumanoidHead["DEMON"] = "Demon";
    HumanoidHead["WINGED_HELM"] = "Winged Helm";
    HumanoidHead["THOUGHTS"] = "Thoughts";
    HumanoidHead["JESTER"] = "Jester";
    HumanoidHead["PARTY_HAT"] = "Party Hat";
    HumanoidHead["GANDALF"] = "Gandalf";
    HumanoidHead["ROBINHOOD"] = "Robinhood";
    HumanoidHead["SANTA"] = "Santa";
    HumanoidHead["CROWN"] = "Crown";
})(HumanoidHead || (HumanoidHead = {}));
var DragonHead;
(function (DragonHead) {
    DragonHead["NONE"] = "None";
    DragonHead["HORNS"] = "Horns";
    DragonHead["DARK_HORNS"] = "Dark Horns";
    DragonHead["BLOODY_HORNS"] = "Bloody Horns";
    DragonHead["THOUGHTS"] = "Thoughts";
    DragonHead["HALO"] = "Halo";
    DragonHead["HORN"] = "Horn";
    DragonHead["CROWN"] = "Crown";
    DragonHead["ANCIENT_HORN"] = "Ancient Horns";
})(DragonHead || (DragonHead = {}));
var GolemHead;
(function (GolemHead) {
    GolemHead["NONE"] = "None";
    GolemHead["THOUGHTS"] = "Thoughts";
    GolemHead["HALO"] = "Halo";
    GolemHead["HORN"] = "Horn";
    GolemHead["CROWN"] = "Crown";
    GolemHead["CRYSTAL_HORN"] = "Crystal Horn";
})(GolemHead || (GolemHead = {}));
var HumanoidEyes;
(function (HumanoidEyes) {
    HumanoidEyes[HumanoidEyes["Black"] = 0] = "Black";
    HumanoidEyes[HumanoidEyes["Blue"] = 1] = "Blue";
    HumanoidEyes[HumanoidEyes["Stone"] = 2] = "Stone";
    HumanoidEyes[HumanoidEyes["Light"] = 3] = "Light";
    HumanoidEyes[HumanoidEyes["Laser"] = 4] = "Laser";
    HumanoidEyes[HumanoidEyes["Glasses"] = 5] = "Glasses";
    HumanoidEyes[HumanoidEyes["VR"] = 6] = "VR";
    HumanoidEyes[HumanoidEyes["X"] = 7] = "X";
    HumanoidEyes[HumanoidEyes["Closed"] = 8] = "Closed";
    HumanoidEyes[HumanoidEyes["One Eye"] = 9] = "One Eye";
    HumanoidEyes[HumanoidEyes["3D"] = 10] = "3D";
    HumanoidEyes[HumanoidEyes["Wink"] = 11] = "Wink";
    HumanoidEyes[HumanoidEyes["Crystal"] = 12] = "Crystal";
    HumanoidEyes[HumanoidEyes["Ancient"] = 13] = "Ancient";
    HumanoidEyes[HumanoidEyes["Thug Life"] = 14] = "Thug Life";
})(HumanoidEyes || (HumanoidEyes = {}));
var DragonEyes;
(function (DragonEyes) {
    DragonEyes[DragonEyes["Black"] = 0] = "Black";
    DragonEyes[DragonEyes["Closed"] = 1] = "Closed";
    DragonEyes[DragonEyes["X"] = 2] = "X";
    DragonEyes[DragonEyes["Thug Life"] = 3] = "Thug Life";
})(DragonEyes || (DragonEyes = {}));
var GolemEyes;
(function (GolemEyes) {
    GolemEyes[GolemEyes["Black"] = 0] = "Black";
    GolemEyes[GolemEyes["Closed"] = 1] = "Closed";
    GolemEyes[GolemEyes["X"] = 2] = "X";
    GolemEyes[GolemEyes["Thug Life"] = 3] = "Thug Life";
})(GolemEyes || (GolemEyes = {}));
var HumanoidMouth;
(function (HumanoidMouth) {
    HumanoidMouth[HumanoidMouth["Normal"] = 0] = "Normal";
    HumanoidMouth[HumanoidMouth["Tongue"] = 1] = "Tongue";
    HumanoidMouth[HumanoidMouth["Frown"] = 2] = "Frown";
    HumanoidMouth[HumanoidMouth["Open"] = 3] = "Open";
    HumanoidMouth[HumanoidMouth["Smile"] = 4] = "Smile";
    HumanoidMouth[HumanoidMouth["Joint"] = 5] = "Joint";
    HumanoidMouth[HumanoidMouth["Tooth"] = 6] = "Tooth";
})(HumanoidMouth || (HumanoidMouth = {}));
var DragonMouth;
(function (DragonMouth) {
    DragonMouth[DragonMouth["Normal"] = 0] = "Normal";
    DragonMouth[DragonMouth["Fangs"] = 1] = "Fangs";
    DragonMouth[DragonMouth["Dark Fangs"] = 2] = "Dark Fangs";
    DragonMouth[DragonMouth["Bloody Fangs"] = 3] = "Bloody Fangs";
    DragonMouth[DragonMouth["Gold Fangs"] = 4] = "Gold Fangs";
    DragonMouth[DragonMouth["Tongue"] = 5] = "Tongue";
    DragonMouth[DragonMouth["Joint"] = 6] = "Joint";
    DragonMouth[DragonMouth["Ancient Fangs"] = 7] = "Ancient Fangs";
})(DragonMouth || (DragonMouth = {}));
var GolemMouth;
(function (GolemMouth) {
    GolemMouth[GolemMouth["Normal"] = 0] = "Normal";
    GolemMouth[GolemMouth["Smile"] = 1] = "Smile";
    GolemMouth[GolemMouth["Tongue"] = 2] = "Tongue";
    GolemMouth[GolemMouth["Frown"] = 3] = "Frown";
    GolemMouth[GolemMouth["Joint"] = 4] = "Joint";
    GolemMouth[GolemMouth["Tooth"] = 5] = "Tooth";
})(GolemMouth || (GolemMouth = {}));
var HumanoidBack;
(function (HumanoidBack) {
    HumanoidBack[HumanoidBack["None"] = 0] = "None";
    HumanoidBack[HumanoidBack["Sword"] = 1] = "Sword";
    HumanoidBack[HumanoidBack["Common Companion"] = 2] = "Common Companion";
    HumanoidBack[HumanoidBack["Rare Companion"] = 3] = "Rare Companion";
    HumanoidBack[HumanoidBack["Angel Wings"] = 4] = "Angel Wings";
    HumanoidBack[HumanoidBack["Shadow"] = 5] = "Shadow";
    HumanoidBack[HumanoidBack["Ultra Rare Companion"] = 6] = "Ultra Rare Companion";
    HumanoidBack[HumanoidBack["Legendary Companion"] = 7] = "Legendary Companion";
})(HumanoidBack || (HumanoidBack = {}));
var DragonBack;
(function (DragonBack) {
    DragonBack[DragonBack["Dragon Wings"] = 0] = "Dragon Wings";
    DragonBack[DragonBack["Common Companion"] = 1] = "Common Companion";
    DragonBack[DragonBack["None"] = 2] = "None";
    DragonBack[DragonBack["Rare Companion"] = 3] = "Rare Companion";
    DragonBack[DragonBack["Ultra Rare Companion"] = 4] = "Ultra Rare Companion";
    DragonBack[DragonBack["Legendary Companion"] = 5] = "Legendary Companion";
})(DragonBack || (DragonBack = {}));
var GolemBack;
(function (GolemBack) {
    GolemBack[GolemBack["None"] = 0] = "None";
    GolemBack[GolemBack["Spikes"] = 1] = "Spikes";
    GolemBack[GolemBack["Common Companion"] = 2] = "Common Companion";
    GolemBack[GolemBack["Rare Companion"] = 3] = "Rare Companion";
    GolemBack[GolemBack["Ultra Rare Companion"] = 4] = "Ultra Rare Companion";
    GolemBack[GolemBack["Legendary Companion"] = 5] = "Legendary Companion";
})(GolemBack || (GolemBack = {}));
export { TRAIT_TYPES, BASE_CLASSES, VISUAL_TRAITS, META_TRAITS, PotrBaseClass, VisualTraitType, MetaTraitType, PotrBackground, PotrClass, HumanoidBack, HumanoidMouth, HumanoidHead, HumanoidEyes, HumanoidBody, DragonBack, DragonMouth, DragonHead, DragonEyes, DragonBody, GolemBack, GolemMouth, GolemHead, GolemEyes, GolemBody, PhantomBody, };
