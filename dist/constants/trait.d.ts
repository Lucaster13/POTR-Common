declare const enum VisualTrait {
    BACKGROUND = "Background",
    CLASS = "Class",
    BODY = "Body",
    HEAD = "Head",
    EYES = "Eyes",
    BACK = "Back",
    MOUTH = "Mouth"
}
declare const enum MetaTrait {
    POWER = "Power",
    LEVEL = "Level"
}
declare const VISUAL_TRAITS: VisualTrait[];
declare const META_TRAITS: MetaTrait[];
declare const TRAITS: Array<MetaTrait | VisualTrait>;
declare const enum BaseClass {
    HUMANOID = "Humanoid",
    PHANTOM = "Phantom",
    DRAGON = "Dragon",
    GOLEM = "Golem"
}
declare const BASE_CLASSES: BaseClass[];
declare const enum Background {
    GRAY = "Gray",
    LIGHT_BLUE = "Light Blue",
    ORANGE = "Orange",
    RED = "Red",
    GREEN = "Green",
    LIGHT_RED = "Light Red",
    PURPLE = "Purple",
    BLUE = "Blue",
    LIGHT_PURPLE = "Light Purple",
    TEAL = "Teal",
    DARK = "Dark",
    GOLD = "Gold",
    POTR = "POTR"
}
declare const enum Class {
    BERSERKER = "Berserker",
    RANGER = "Ranger",
    WIZARD = "Wizard",
    CRUSADER = "Crusader",
    NECROMANCER = "Necromancer",
    ASSASSIN = "Assassin",
    PHANTOM = "Phantom",
    ARCHANGEL = "Archangel",
    GOLEM = "Golem",
    DRAGON = "Dragon"
}
declare const enum HumanoidBody {
    NONE = "None",
    BEAST_HIDE = "Beast Hide",
    LIGHT_ARMOR = "Light Armor",
    WIZARD_ROBE = "Wizard Robe",
    SHADOW_ARMOR = "Shadow Armor",
    SKULLHIRT = "Skull Shirt",
    PLATE_ARMOR = "Plate Armor",
    DRAGONHIDE = "Dragonhide",
    FLAME = "Flame",
    FROST = "Frost",
    GOD_ARMOR = "God Armor",
    ANGEL_LIGHT = "Angel Light",
    RADIOACTIVE = "Radioactive"
}
declare const enum PhantomBody {
    CALM = "Calm",
    AGGRESSIVE = "Aggressive",
    GRACIOUS = "Gracious",
    DISTURBED = "Disturbed"
}
declare const enum DragonBody {
    FLAME = "Flame",
    FROST = "Frost",
    SAND = "Sand",
    STEEL = "Steel",
    GOLD = "Gold",
    RADIOACTIVE = "Radioactive",
    ANDIENT = "Ancient"
}
declare const enum GolemBody {
    FLAME = "Flame",
    FROST = "Frost",
    SAND = "Sand",
    OBSIDIAN = "Obsidian",
    GOLD = "Gold",
    GEMSTONE = "Gemstone",
    CRYSTAL = "Crystal"
}
declare const enum HumanoidHead {
    BLOND_HAIR = "Blond Hair",
    BROWN_HAIR = "Brown Hair",
    NONE = "None",
    VIKING = "Viking",
    HEADBAND = "Headband",
    BANDANA = "Bandana",
    BUZZCUT = "Buzzcut",
    WIZARD_HAT = "Wizard Hat",
    MANGO = "Manga",
    FLAMING = "Flaming",
    HALO = "Halo",
    DEMON = "Demon",
    WINGED_HELM = "Winged Helm",
    THOUGHTS = "Thoughts",
    JESTER = "Jester",
    PARTY_HAT = "Party Hat",
    GANDALF = "Gandalf",
    ROBINHOOD = "Robinhood",
    SANTA = "Santa",
    CROWN = "Crown"
}
declare const enum DragonHead {
    NONE = "None",
    HORNS = "Horns",
    DARK_HORNS = "Dark Horns",
    BLOODY_HORNS = "Bloody Horns",
    THOUGHTS = "Thoughts",
    HALO = "Halo",
    HORN = "Horn",
    CROWN = "Crown",
    ANCIENT_HORN = "Ancient Horns"
}
declare const enum GolemHead {
    NONE = "None",
    THOUGHTS = "Thoughts",
    HALO = "Halo",
    HORN = "Horn",
    CROWN = "Crown",
    CRYSTAL_HORN = "Crystal Horn"
}
declare const enum HumanoidEyes {
    "Black" = 0,
    "Blue" = 1,
    "Stone" = 2,
    "Light" = 3,
    "Laser" = 4,
    "Glasses" = 5,
    "VR" = 6,
    "X" = 7,
    "Closed" = 8,
    "One Eye" = 9,
    "3D" = 10,
    "Wink" = 11,
    "Crystal" = 12,
    "Ancient" = 13,
    "Thug Life" = 14
}
declare const enum DragonEyes {
    "Black" = 0,
    "Closed" = 1,
    "X" = 2,
    "Thug Life" = 3
}
declare const enum GolemEyes {
    "Black" = 0,
    "Closed" = 1,
    "X" = 2,
    "Thug Life" = 3
}
declare const enum HumanoidMouth {
    "Normal" = 0,
    "Tongue" = 1,
    "Frown" = 2,
    "Open" = 3,
    "Smile" = 4,
    "Joint" = 5,
    "Tooth" = 6
}
declare const enum DragonMouth {
    "Normal" = 0,
    "Fangs" = 1,
    "Dark Fangs" = 2,
    "Bloody Fangs" = 3,
    "Gold Fangs" = 4,
    "Tongue" = 5,
    "Joint" = 6,
    "Ancient Fangs" = 7
}
declare const enum GolemMouth {
    "Normal" = 0,
    "Smile" = 1,
    "Tongue" = 2,
    "Frown" = 3,
    "Joint" = 4,
    "Tooth" = 5
}
declare const enum HumanoidBack {
    "None" = 0,
    "Sword" = 1,
    "Common Companion" = 2,
    "Rare Companion" = 3,
    "Angel Wings" = 4,
    "Shadow" = 5,
    "Ultra Rare Companion" = 6,
    "Legendary Companion" = 7
}
declare const enum DragonBack {
    "Dragon Wings" = 0,
    "Common Companion" = 1,
    "None" = 2,
    "Rare Companion" = 3,
    "Ultra Rare Companion" = 4,
    "Legendary Companion" = 5
}
declare const enum GolemBack {
    "None" = 0,
    "Spikes" = 1,
    "Common Companion" = 2,
    "Rare Companion" = 3,
    "Ultra Rare Companion" = 4,
    "Legendary Companion" = 5
}
declare const RARE_TRAITS: {
    Background: string[];
    Class: string[];
    Body: string[];
    Head: string[];
    Eyes: string[];
};
declare const enum Rarity {
    COMMON = "common",
    RARE = "rare",
    LEGENDARY = "legendary"
}
declare const RARITIES: Rarity[];
declare const RARITY_POWER_CUTOFFS: {
    common: number;
    rare: number;
    legendary: number;
};
export { RARITIES, RARE_TRAITS, TRAITS, RARITY_POWER_CUTOFFS, BASE_CLASSES, VISUAL_TRAITS, META_TRAITS, Rarity, BaseClass, VisualTrait, MetaTrait, Background, Class, HumanoidBack, HumanoidMouth, HumanoidHead, HumanoidEyes, HumanoidBody, DragonBack, DragonMouth, DragonHead, DragonEyes, DragonBody, GolemBack, GolemMouth, GolemHead, GolemEyes, GolemBody, PhantomBody, };
