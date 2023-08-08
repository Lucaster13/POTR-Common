const RARE_BACKGROUND = ["Gold", "POTR"];
const RARE_CLASS = ["Phantom", "Archangel", "Golem", "Dragon"];
const RARE_BODY = ["Flame", "Frost", "God Armor", "Angel Light", "Radioactive"];
const RARE_HEAD = ["Master Hood", "Gandalf", "Robinhood", "Santa", "Crown"];
const RARE_EYES = ["VR", "Closed", "3D", "Thug Life"];
const RARE_TRAITS = {
  Background: RARE_BACKGROUND,
  Class: RARE_CLASS,
  Body: RARE_BODY,
  Head: RARE_HEAD,
  Eyes: RARE_EYES,
};

const enum Background {
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
  POTR = "POTR",
}

const enum Class {
  BERSERKER = "Berserker",
  RANGER = "Ranger",
  WIZARD = "Wizard",
  CRUSADER = "Crusader",
  NECROMANCER = "Necromancer",
  ASSASSIN = "Assassin",
  PHANTOM = "Phantom",
  ARCHANGEL = "Archangel",
  GOLEM = "Golem",
  DRAGON = "Dragon",
}

const enum HumanoidBody {
  NONE = "None",
  BEAST_HIDE = "Beast Hide",
  LIGHT_ARMOR = "Light Armor",
  WIZARD_ROBE = "Wizard Robe",
  SHADOW_ARMOR = "Shadow Armor",
  SKULL_SHIRT = "Skull Shirt",
  PLATE_ARMOR = "Plate Armor",
  DRAGONHIDE = "Dragonhide",
  FLAME = "Flame",
  FROST = "Frost",
  GOD_ARMOR = "God Armor",
  ANGEL_LIGHT = "Angel Light",
  RADIOACTIVE = "Radioactive",
}

const enum PhantomBody {
  CALM = "Calm",
  AGGRESSIVE = "Aggressive",
  GRACIOUS = "Gracious",
  DISTURBED = "Disturbed",
}

const enum DragonBody {
  FLAME = "Flame",
  FROST = "Frost",
  SAND = "Sand",
  STEEL = "Steel",
  GOLD = "Gold",
  RADIOACTIVE = "Radioactive",
  ANDIENT = "Ancient",
}

const enum GolemBody {
  FLAME = "Flame",
  FROST = "Frost",
  SAND = "Sand",
  OBSIDIAN = "Obsidian",
  GOLD = "Gold",
  GEMSTONE = "Gemstone",
  CRYSTAL = "Crystal",
}

const enum HumanoidHead {
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
  CROWN = "Crown",
}

const enum DragonHead {
  NONE = "None",
  HORNS = "Horns",
  DARK_HORNS = "Dark Horns",
  BLOODY_HORNS = "Bloody Horns",
  THOUGHTS = "Thoughts",
  HALO = "Halo",
  HORN = "Horn",
  CROWN = "Crown",
  ANCIENT_HORN = "Ancient Horns",
}

const enum GolemHead {
  NONE = "None",
  THOUGHTS = "Thoughts",
  HALO = "Halo",
  HORN = "Horn",
  CROWN = "Crown",
  CRYSTAL_HORN = "Crystal Horn",
}

const enum HumanoidEyes {
  "Black",
  "Blue",
  "Stone",
  "Light",
  "Laser",
  "Glasses",
  "VR",
  "X",
  "Closed",
  "One Eye",
  "3D",
  "Wink",
  "Crystal",
  "Ancient",
  "Thug Life",
}

const enum DragonEyes {
  "Black",
  "Closed",
  "X",
  "Thug Life",
}

const enum GolemEyes {
  "Black",
  "Closed",
  "X",
  "Thug Life",
}

const enum HumanoidMouth {
  "Normal",
  "Tongue",
  "Frown",
  "Open",
  "Smile",
  "Joint",
  "Tooth",
}

const enum DragonMouth {
  "Normal",
  "Fangs",
  "Dark Fangs",
  "Bloody Fangs",
  "Gold Fangs",
  "Tongue",
  "Joint",
  "Ancient Fangs",
}

const enum GolemMouth {
  "Normal",
  "Smile",
  "Tongue",
  "Frown",
  "Joint",
  "Tooth",
}
const enum HumanoidBack {
  "None",
  "Sword",
  "Common Companion",
  "Rare Companion",
  "Angel Wings",
  "Shadow",
  "Ultra Rare Companion",
  "Legendary Companion",
}

const enum DragonBack {
  "Dragon Wings",
  "Common Companion",
  "None",
  "Rare Companion",
  "Ultra Rare Companion",
  "Legendary Companion",
}

const enum GolemBack {
  "None",
  "Spikes",
  "Common Companion",
  "Rare Companion",
  "Ultra Rare Companion",
  "Legendary Companion",
}

export {
  RARE_TRAITS,
  Background,
  Class,
  HumanoidBack,
  HumanoidMouth,
  HumanoidHead,
  HumanoidEyes,
  HumanoidBody,
  DragonBack,
  DragonMouth,
  DragonHead,
  DragonEyes,
  DragonBody,
  GolemBack,
  GolemMouth,
  GolemHead,
  GolemEyes,
  GolemBody,
  PhantomBody,
};
