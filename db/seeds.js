// use character_builder;
// db.dropDatabase();

db.classes.insertMany([
  {
    name: "Barbarian",
    equipment: {
      weaponOne: [
        "Greataxe 1D12 Slashing",
        "Battleaxe 1D8 Slashing",
        "Glaive 1D10 Slashing",
        "Warhammer 1D8 Bludgeoning",
        "Flail 1D8 Bludgeoning",
        "Greatsword 2D6 Slashing",
        "Halberd 1D10 Slashing",
        "Lance 1D12 Piercing",
        "Longsword 1D8 Slashing",
        "Maul 2D6 Bludgeoning",
        "Morningstar 1D8 Piercing",
        "Pike 1D10 Piercing",
        "Rapier 1D8 Piercing",
        "Scimitar 1D6 Piercing",
        "Shortsword 1D6 Piercing",
        "Trident 1D6 Piercing",
        "War Pick 1D8 Piercing",
        "Warhammer 1D8 Bludgeoning",
        "Whip 1D4 Slashing"
      ],
      weaponTwo: [
        "Handaxe(2) 1D6 Slashing",
        "Dagger 1D4 Piercing",
        "Club 1D4 Bludgeoning",
        "Greatclub 1D8 Bludgeoning",
        "Light Hammer 1D4 Bludgeoning",
        "Mace 1D6 Bludgeoning",
        "Quarterstaff 1D6 Bludgeoning",
        "Sickle 1D4 Slashing",
        "Spear 1D6 Piercing"
      ],
      pack: [
        "Explorer's Pack"
      ],
      extraItems: [
        "Javelins(4) 1D6 Slashing"
      ]
    },
    armour: [
      "Light Armour",
      "Medium Armour",
      "Shield"
    ],
    savingThrows: [
      "Strength",
      "Constitution"
    ],
    skillCount: 2,
    skills: [
      "Animal Handling",
      "Athletics",
      "Intimidation",
      "Nature",
      "Perception",
      "Survival"
    ],
    hitDie: "D12",
    proficiency: "+2",
    features: [
      "Rages: 2",
      "Rage Damage: +2"
    ]
  },
  {
    name: "Bard",
    equipment: {
      weaponOne: [
        "Rapier 1D8 Piercing",
        "Longsword 1D8 Slashing",
        "Handaxe(2) 1D6 Slashing",
        "Dagger 1D4 Piercing",
        "Club 1D4 Bludgeoning",
        "Greatclub 1D8 Bludgeoning",
        "Light Hammer 1D4 Bludgeoning",
        "Mace 1D6 Bludgeoning",
        "Quarterstaff 1D6 Bludgeoning",
        "Sickle 1D4 Slashing",
        "Spear 1D6 Piercing"
      ],
      pack: [
        "Diplomat's Pack",
        "Entertainer's Pack"
      ],
      toolsNum: 3,
      tools: [
        "Lute",
        "Bagpipes",
        "Drum",
        "Dulcimer",
        "Flute",
        "Lute",
        "Lyre",
        "Horn",
        "Pan Flute",
        "Shawm",
        "Viol"
      ],
      extraItems: [
        "Dagger 1D4 Piercing"
      ]
    },
    armour: [
      "Light Armour"
    ],
    savingThrows: [
      "Dexterity",
      "Charisma"
    ],
    skillCount: 3,
    skills: [
      "Acrobatics",
      "Animal Handling",
      "Arcana",
      "Athletics",
      "Deception",
      "History",
      "Insight",
      "Intimidation",
      "Investigation",
      "Medicine",
      "Nature",
      "Perception",
      "Performance",
      "Persuasion",
      "Religion",
      "Sleight of Hand",
      "Stealth",
      "Survival"
    ],
    hitDie: "D8",
    proficiency: "+2",
    features: [
      "Cantrips Known: 2",
      "Total Spell Known: 6",
      "Spell Slots: 2",
      "Spell Attack Bonus: 8 + Proficiency + Charisma Modifier",
      "Spell Save: Proficiency + Charisma Modifier"
    ]
  },
  {
    name: "Cleric",
    equipment: {
      weaponOne: [
        "Light Crossbow & 20 Bolts 1D8 Piercing",
        "Handaxe(2) 1D6 Slashing",
        "Dagger 1D4 Piercing",
        "Club 1D4 Bludgeoning",
        "Greatclub 1D8 Bludgeoning",
        "Light Hammer 1D4 Bludgeoning",
        "Mace 1D6 Bludgeoning",
        "Quarterstaff 1D6 Bludgeoning",
        "Sickle 1D4 Slashing",
        "Spear 1D6 Piercing"
      ],
      weaponTwo: [
        "Mace 1D6 Bludgeoning",
        "Warhammer 1D8 Bludgeoning"
      ],
      pack: [
        "Priest's Pack",
        "Explorer's Pack"
      ],
      extraItems: [
        "Holy Symbol",
        "Shield"
      ]
    },
    armour: [
      "Scale Mail",
      "Leather Armour",
      "Chain Mail"
    ],
    savingThrows: [
      "Wisdom",
      "Charisma"
    ],
    skillCount: 2,
    skills: [
      "History",
      "Insight",
      "Medicine",
      "Persuasion",
      "Religion"
    ],
    hitDie: "D8",
    proficiency: "+2",
    features: [
      "Cantrips Known: 3",
      "Total Spells Known: 5",
      "Spell Slots: 2",
      "Spell Attack Bonus: 8 + Proficiency + Wisdom Modifier",
      "Spell Save: Proficiency + Wisdom Modifier",
      "Divine Domain: Choose one domain related to your deity. Your choice grants you Domain Spells and other features when you choose it at 1st Level."
    ]
  },
  {
    name: "Druid",
    equipment: {
      weaponOne: [
        "Wooden Shield",
        "Dagger 1D4 Piercing",
        "Club 1D4 Bludgeoning",
        "Mace 1D6 Bludgeoning",
        "Quarterstaff 1D6 Bludgeoning",
        "Sickle 1D4 Slashing",
        "Spear 1D6 Piercing",
        "Darts 1D4 Piercing",
        "Sling 1D4 Bludgeoning"
      ],
      weaponTwo: [
        "Scimitar 1D6 Piercing",
        "Dagger 1D4 Piercing",
        "Club 1D4 Bludgeoning",
        "Mace 1D6 Bludgeoning",
        "Quarterstaff 1D6 Bludgeoning",
        "Sickle 1D4 Slashing",
        "Spear 1D6 Piercing"
      ],
      pack: [
        "Explorer's Pack"
      ],
      toolsNum: 1,
      tools: [
        "Herbalism Kit"
      ],
      extraItem: [
        "Druidic Focus"
      ]
    },
    armour: [
      "Leather Armour"
    ],
    savingThrows: [
      "Wisdom",
      "Intelligence"
    ],
    skillCount: 2,
    skills: [
      "Animal Handling",
      "Arcana",
      "Insight",
      "Medicine",
      "Nature",
      "Perception",
      "Religion",
      "Survival"
    ],
    hitDie: "D8",
    proficiency: "+2",
    features: [
      "Cantrips Known: 2",
      "Total Spells Known: 4",
      "Spell Slots: 2",
      "Spell Attack Bonus: 8 + Proficiency + Wisdom Modifier",
      "Spell Save: Proficiency + Wisdom Modifier",
      "Druidic: You know Druidic, the Secret language of druids. You can speak the language and use it to leave hidden messages. You and others who know this language automatically spot such a Message. Others spot the message's presence with a successful DC 15 Wisdom (Perception) check but can't decipher it without magic."
    ]
  },
  {
    name: "Fighter",
    equipment: {
      weaponOne: [
        "Shield",
        "Greataxe 1D12 Slashing",
        "Battleaxe 1D8 Slashing",
        "Glaive 1D10 Slashing",
        "Warhammer 1D8 Bludgeoning",
        "Flail 1D8 Bludgeoning",
        "Greatsword 2D6 Slashing",
        "Halberd 1D10 Slashing",
        "Lance 1D12 Piercing",
        "Longsword 1D8 Slashing",
        "Maul 2D6 Bludgeoning",
        "Morningstar 1D8 Piercing",
        "Pike 1D10 Piercing",
        "Rapier 1D8 Piercing",
        "Scimitar 1D6 Piercing",
        "Shortsword 1D6 Piercing",
        "Trident 1D6 Piercing",
        "War Pick 1D8 Piercing",
        "Warhammer 1D8 Bludgeoning",
        "Whip 1D4 Slashing"
      ],
      weaponTwo: [
        "Greataxe 1D12 Slashing",
        "Battleaxe 1D8 Slashing",
        "Glaive 1D10 Slashing",
        "Warhammer 1D8 Bludgeoning",
        "Flail 1D8 Bludgeoning",
        "Greatsword 2D6 Slashing",
        "Halberd 1D10 Slashing",
        "Lance 1D12 Piercing",
        "Longsword 1D8 Slashing",
        "Maul 2D6 Bludgeoning",
        "Morningstar 1D8 Piercing",
        "Pike 1D10 Piercing",
        "Rapier 1D8 Piercing",
        "Scimitar 1D6 Piercing",
        "Shortsword 1D6 Piercing",
        "Trident 1D6 Piercing",
        "War Pick 1D8 Piercing",
        "Warhammer 1D8 Bludgeoning",
        "Whip 1D4 Slashing"
      ],
      pack: [
        "Explorer's Pack",
        "Dungeoneer's Pack"
      ],
      extraItem: [
        "Light Crossbow & 20 Bolts 1D8 Piercing",
        "Handaxe(2) 1D6 Slashing"
      ]
    },
    armour: [
      "Leather Armour & Longbow (20 Arrows)",
      "Chain Mail"
    ],
    savingThrows: [
      "Strength",
      "Constitution"
    ],
    skillCount: 2,
    skills: [
      "Acrobatics",
      "Animal Handling",
      "Athletics",
      "History",
      "Insight",
      "Intimidation",
      "Perception",
      "Survival"
    ],
    hitDie: "D10",
    proficiency: "+2",
    features: [
      "Fighting Style: You adopt a particular style of fighting as your specialty. Choose a Fighting Style from the list of optional features. You can't take the same Fighting Style option more than once, even if you get to choose again.",
      "Second Wind: You have a limited well of stamina that you can draw on to protect yourself from harm. On Your Turn, you can use a Bonus Action to regain Hit Points equal to 1d10 + your Fighter level. Once you use this feature, you must finish a short or Long Rest before you can use it again."
    ]
  },
  {
    name: "Monk",
    equipment: {
      weaponOne: [
        "Shortsword 1D6 Piercing",
        "Handaxe(2) 1D6 Slashing",
        "Dagger 1D4 Piercing",
        "Club 1D4 Bludgeoning",
        "Greatclub 1D8 Bludgeoning",
        "Light Hammer 1D4 Bludgeoning",
        "Mace 1D6 Bludgeoning",
        "Quarterstaff 1D6 Bludgeoning",
        "Sickle 1D4 Slashing",
        "Spear 1D6 Piercing",
	      "Javelins(4) 1D6 Slashing"
      ],
      weaponTwo: [
        "Darts(10) 1D4 Piercing",
      ],
      pack: [
        "Explorer's Pack",
        "Dungeoneer's Pack"
      ],
      toolsNum: 1,
      tools: [
        "Artisan's Tools",
        "Lute",
        "Bagpipes",
        "Drum",
        "Dulcimer",
        "Flute",
        "Lute",
        "Lyre",
        "Horn",
        "Pan Flute",
        "Shawm",
        "Viol"
      ],
    },
    savingThrows: [
      "Strength",
      "Dexterity"
    ],
    skillCount: 2,
    skills: [
      "Acrobatics",
      "Athletics",
      "History",
      "Insight",
      "Religion",
      "Stealth"
    ],
    hitDie: "D8",
    proficiency: "+2",
    features: [
      "Unarmoured Defense: Beginning at 1st Level, while you are wearing no armor and not wielding a Shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier.",
      "Martial Arts: Your practice of martial arts gives you mastery of Combat styles that use unarmed strikes and monk Weapons, which are shortswords and any simple Melee Weapons that don't have the Two-Handed or heavy property. </br>You gain the following benefits while you are unarmed or wielding only monk Weapons and you aren't wearing armor or wielding a Shield. </br>You can use Dexterity instead of Strength for the Attack and Damage Rolls of your unarmed strikes and monk Weapons. </br>You can roll a d4 in place of the normal damage of your Unarmed Strike or monk weapon. </br>When you use the Attack action with an Unarmed Strike or a monk weapon on Your Turn, you can make one Unarmed Strike as a Bonus Action. For example, if you take the Attack action and Attack with a Quarterstaff, you can also make an Unarmed Strike as a Bonus Action, assuming you haven't already taken a Bonus Action this turn."
    ]
  },
  {
    name: "Paladin",
    equipment: {
      weaponOne: [
        "Shield",
        "Greataxe 1D12 Slashing",
        "Battleaxe 1D8 Slashing",
        "Glaive 1D10 Slashing",
        "Warhammer 1D8 Bludgeoning",
        "Flail 1D8 Bludgeoning",
        "Greatsword 2D6 Slashing",
        "Halberd 1D10 Slashing",
        "Lance 1D12 Piercing",
        "Longsword 1D8 Slashing",
        "Maul 2D6 Bludgeoning",
        "Morningstar 1D8 Piercing",
        "Pike 1D10 Piercing",
        "Rapier 1D8 Piercing",
        "Scimitar 1D6 Piercing",
        "Shortsword 1D6 Piercing",
        "Trident 1D6 Piercing",
        "War Pick 1D8 Piercing",
        "Warhammer 1D8 Bludgeoning",
        "Whip 1D4 Slashing",
        "Hand Crossbow 1D6 Piercing",
	      "Heavy Crossbow 1D10 Piercing",
	      "Longbow 1D8 Piercing",
      ],
      weaponTwo: [
        "Greataxe 1D12 Slashing",
        "Battleaxe 1D8 Slashing",
        "Glaive 1D10 Slashing",
        "Warhammer 1D8 Bludgeoning",
        "Flail 1D8 Bludgeoning",
        "Greatsword 2D6 Slashing",
        "Halberd 1D10 Slashing",
        "Lance 1D12 Piercing",
        "Longsword 1D8 Slashing",
        "Maul 2D6 Bludgeoning",
        "Morningstar 1D8 Piercing",
        "Pike 1D10 Piercing",
        "Rapier 1D8 Piercing",
        "Scimitar 1D6 Piercing",
        "Shortsword 1D6 Piercing",
        "Trident 1D6 Piercing",
        "War Pick 1D8 Piercing",
        "Warhammer 1D8 Bludgeoning",
        "Whip 1D4 Slashing",
        "Hand Crossbow 1D6 Piercing",
	      "Heavy Crossbow 1D10 Piercing",
	      "Longbow 1D8 Piercing",
      ],
      pack: [
        "Explorer's Pack",
        "Priest's Pack"
      ],
      extraItems: [
        "Javelins(5) 1D6 Slashing"
      ]
    },
    armour: [
      "Chain Mail"
    ],
    savingThrows: [
      "Wisdom",
      "Charisma"
    ],
    skillCount: 2,
    skills: [
      "Athletics",
      "Insight",
      "Intimidation",
      "Medicine",
      "Persuasion",
      "Religion"
    ],
    hitDie: "D10",
    proficiency: "+2",
    features: [
      "Divine Sense: The presence of strong evil registers on your Senses like a noxious odor, and powerful good rings like heavenly music in your ears. As an action, you can open your awareness to detect such forces. Until the end of your next turn, you know the location of any Celestial, fiend, or Undead within 60 feet of you that is not behind total cover. You know the type (celestial, fiend, or undead) of any being whose presence you sense, but not its identity (the Vampire Count Strahd von Zarovich, for instance). Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated, as with the Hallow spell. </br>You can use this feature a number of times equal to 1 + your Charisma modifier. When you finish a Long Rest, you regain all expended uses.",
      "Lay On Hands: Your blessed touch can heal wounds. You have a pool of Healing power that replenishes when you take a Long Rest. With that pool, you can restore a total number of Hit Points equal to your Paladin level x 5. </br>As an action, you can touch a creature and draw power from the pool to restore a number of Hit Points to that creature, up to the maximum amount remaining in your pool. </br>Alternatively, you can expend 5 Hit Points from your pool of Healing to cure the target of one disease or neutralize one poison affecting it. You can cure multiple Diseases and neutralize multiple Poisons with a single use of Lay on Hands, expending Hit Points separately for each one. </br>This feature has no effect on Undead and Constructs."
    ]
  },
  {
    name: "Ranger",
    equipment: {
      weaponOne: [
        "Shortsword 1D6 Piercing",
        "Handaxe 1D6 Slashing",
        "Dagger 1D4 Piercing",
        "Club 1D4 Bludgeoning",
        "Greatclub 1D8 Bludgeoning",
        "Light Hammer 1D4 Bludgeoning",
        "Mace 1D6 Bludgeoning",
        "Quarterstaff 1D6 Bludgeoning",
        "Sickle 1D4 Slashing",
        "Spear 1D6 Piercing",
	      "Javelins(4) 1D6 Slashing"
      ],
      weaponTwo: [
        "Shortsword 1D6 Piercing",
        "Handaxe 1D6 Slashing",
        "Dagger 1D4 Piercing",
        "Club 1D4 Bludgeoning",
        "Greatclub 1D8 Bludgeoning",
        "Light Hammer 1D4 Bludgeoning",
        "Mace 1D6 Bludgeoning",
        "Quarterstaff 1D6 Bludgeoning",
        "Sickle 1D4 Slashing",
        "Spear 1D6 Piercing",
	      "Javelins(4) 1D6 Slashing"
      ],
      pack: [
        "Explorer's Pack",
        "Dungeoneer's Pack",
      ],
      extraItems: [
        "Longbow 1D8 Piercing & 20 Arrows",
      ]
    },
    armour: [
      "Scale Mail",
      "Leather Armour"
    ],
    savingThrows: [
      "Strength",
      "Dexterity"
    ],
    skillCount: 3,
    skills: [
      "Animal Handling",
      "Athletics",
      "Insight",
      "Investigation",
      "Nature",
      "Perception",
      "Stealth",
      "Survival"
    ],
    hitDie: "D10",
    proficiency: "+2",
    features: [
      "Favoured Enemy: Beginning at 1st Level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy. </br>Choose a type of favored enemy: Aberrations, Beasts, Celestials, Constructs, Dragons, Elementals, fey, Fiends, Giants, Monstrosities, oozes, Plants, or Undead. Alternatively, you can select two races of Humanoid (such as Gnolls and orcs) as favored enemies.</br>You have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence Checks to recall information about them. </br>When you gain this feature, you also learn one language of your choice that is spoken by your favored enemies, if they speak one at all.",
      "Natural Explorer: You are particularly familiar with one type of natural Environment and are adept at traveling and surviving in such regions. Choose one type of favored terrain: Arctic, coast, Desert, Forest, Grassland, Mountain, swamp, or The Underdark. When you make an Intelligence or Wisdom check related to your favored terrain, your Proficiency Bonus is doubled if you are using a skill that you're proficient in. </br>While traveling for an hour or more in your favored terrain, you gain the following benefits: </br>Difficult Terrain doesn't slow your group's Travel. </br>Your group can't become lost except by magical means. </br>Even when you are engaged in another Activity While Traveling (such as foraging, navigating, or tracking), you remain alert to danger. </br>If you are traveling alone, you can move stealthily at a normal pace. </br>When you Forage, you find twice as much food as you normally would. </br>While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area."
    ]
  },
  {
    name: "Rogue",
    equipment: {
      weaponOne: [
        "Shortsword 1D6 Piercing",
        "Rapier 1D8 Piercing",
      ],
      weaponTwo: [
        "Shortsword 1D6 Piercing",
        "Shortbow 1D6 Piercing & 20 Arrows",
      ],
      pack: [
        "Explorer's Pack",
        "Dungeoneer's Pack",
        "Burglar's Pack"
      ],
      extraItems: [
        "Dagger(2) 1D4 Piercing",
        "Thieves' Tools"
      ]
    },
    armour: [
      "Leather Armour"
    ],
    savingThrows: [
      "Intelligence",
      "Dexterity"
    ],
    skillCount: 4,
    skills: [
      "Acrobatics",
      "Athletics",
      "Deception",
      "Insight",
      "Intimidation",
      "Investigation",
      "Perception",
      "Performance",
      "Persuasion",
      "Sleight of Hand",
      "Stealth",
    ],
    hitDie: "D8",
    proficiency: "+2",
    features: [
      "Expertise: At 1st Level, choose two of your skill Proficiencies, or one of your skill Proficiencies and your proficiency with Thieves' Tools. Your Proficiency Bonus is doubled for any ability check you make that uses either of the chosen Proficiencies.",
      "Sneak Attack: Beginning at 1st Level, you know how to strike subtly and exploit a foe's distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an Attack if you have advantage on the Attack roll. The Attack must use a Finesse or a ranged weapon. </br>You don't need advantage on the Attack roll if another enemy of the target is within 5 feet of it, that enemy isn't Incapacitated, and you don't have disadvantage on the Attack roll.",
      "Thieves' Cant: During your rogue Training you learned thieves' cant, a Secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation. Only another creature that knows thieves' cant understands such messages. It takes four times longer to convey such a Message than it does to speak the same idea plainly. </br>In addition, you understand a set of Secret signs and symbols used to convey short, simple messages, such as whether an area is dangerous or the territory of a thieves' guild, whether loot is nearby, or whether the people in an area are easy marks or will provide a Safe House for thieves on the run."
    ]
  },
  {
    name: "Sorcerer",
    equipment: {
      weaponOne: [
        "Light Crossbow 1D8 Piercing & 20 Bolts",
        "Handaxe(2) 1D6 Slashing",
        "Dagger 1D4 Piercing",
        "Club 1D4 Bludgeoning",
        "Greatclub 1D8 Bludgeoning",
        "Light Hammer 1D4 Bludgeoning",
        "Mace 1D6 Bludgeoning",
        "Quarterstaff 1D6 Bludgeoning",
        "Sickle 1D4 Slashing",
        "Spear 1D6 Piercing",
	      "Javelin 1D6 Slashing"
      ],
      toolsNum: 1,
      tools: [
        "Component Pouch",
        "Arcane Focus"
      ],
      pack: [
        "Explorer's Pack",
        "Dungeoneer's Pack",
      ],
      extraItems: [
        "Dagger(2) 1D4 Piercing",
      ]
    },
    savingThrows: [
      "Constitution",
      "Charisma"
    ],
    skillCount: 2,
    skills: [
      "Arcana",
      "Deception",
      "Insight",
      "Intimidation",
      "Perception",
      "Religion",
    ],
    hitDie: "D6",
    proficiency: "+2",
    features: [
      "Cantrips Known: 4",
      "Total Spell Known: 6",
      "Spell Slots: 2",
      "Spell Attack Bonus: 8 + Proficiency + Charisma Modifier",
      "Spell Save: Proficiency + Charisma Modifier",
      "Sorcerous Origins: Choose a sorcerous Origin, which describes the source of your innate magical power, such as Draconic Bloodline."
    ]
  },
  {
    name: "Warlock",
    equipment: {
      weaponOne: [
        "Light Crossbow 1D8 Piercing & 20 Bolts",
        "Handaxe(2) 1D6 Slashing",
        "Dagger 1D4 Piercing",
        "Club 1D4 Bludgeoning",
        "Greatclub 1D8 Bludgeoning",
        "Light Hammer 1D4 Bludgeoning",
        "Mace 1D6 Bludgeoning",
        "Quarterstaff 1D6 Bludgeoning",
        "Sickle 1D4 Slashing",
        "Spear 1D6 Piercing",
        "Javelin 1D6 Slashing"
      ],
      weaponTwo: [
        "Handaxe(2) 1D6 Slashing",
        "Dagger 1D4 Piercing",
        "Club 1D4 Bludgeoning",
        "Greatclub 1D8 Bludgeoning",
        "Light Hammer 1D4 Bludgeoning",
        "Mace 1D6 Bludgeoning",
        "Quarterstaff 1D6 Bludgeoning",
        "Sickle 1D4 Slashing",
        "Spear 1D6 Piercing",
        "Javelin 1D6 Slashing"
      ],
      toolsNum: 1,
      tools: [
        "Component Pouch",
        "Arcane Focus"
      ],
      pack: [
        "Scholar's Pack",
        "Dungeoneer's Pack",
      ],
      extraItems: [
        "Dagger(2) 1D4 Piercing",
      ]
    },
    armour: [
      "Leather Armour"
    ],
    savingThrows: [
      "Wisdom",
      "Charisma"
    ],
    skillCount: 2,
    skills: [
      "Arcana",
      "Deception",
      "History",
      "Intimidation",
      "Investigation",
      "Nature",
      "Religion",
    ],
    hitDie: "D8",
    proficiency: "+2",
    features: [
      "Otherworldy Patron: At 1st Level, you have struck a bargain with an otherworldly being of your choice, such as The Fiend.",
      "Pact Magic: Your arcane Research and the magic bestowed on you by your patron have given you facility with Spells.",
      "Cantrips Known: 2",
      "Total Spell Known: 2",
      "Spell Slots: 0",
      "Spell Attack Bonus: 8 + Proficiency + Charisma Modifier",
      "Spell Save: Proficiency + Charisma Modifier",
      "Sorcerous Origins: Choose a sorcerous Origin, which describes the source of your innate magical power, such as Draconic Bloodline."
    ]
  },
  {
    name: "Wizard",
    equipment: {
      weaponOne: [
        "Dagger 1D4 Piercing",
        "Quarterstaff 1D6 Bludgeoning",
      ],
      toolsNum: 1,
      tools: [
        "Component Pouch",
        "Arcane Focus"
      ],
      pack: [
        "Scholar's Pack",
        "Explorer's Pack",
      ],
      extraItems: [
        "A Spellbook",
      ]
    },
    savingThrows: [
      "Wisdom",
      "Intelligence"
    ],
    skillCount: 2,
    skills: [
      "Arcana",
      "History",
      "Insight",
      "Investigation",
      "Medicine",
      "Religion",
    ],
    hitDie: "D6",
    proficiency: "+2",
    features: [
      "Arcane Recovery: You have learned to regain some of your magical energy by studying your Spellbook. Once per day when you finish a Short Rest, you can choose expended Spell Slots to recover. The Spell Slots can have a combined level that is equal to or less than half your Wizard level (rounded up), and none of the slots can be 6th level or higher.",
      "Cantrips Known: 3",
      "Total Spell Known: 9",
      "Spell Slots: 2",
      "Spell Attack Bonus: 8 + Proficiency + Intelligence Modifier",
      "Spell Save: Proficiency + Intelligence Modifier"
    ]
  },
]);


db.races.insertMany([
  {
    name: "Dragonborn",
    abilityScoreIncrease: {
      strength: 2,
      charisma: 1
    },
    speed: 30,
    size: "Medium",
    languages: [
      "Common",
      "Draconic"
    ],
    resistances: ["Based on ancestry"],
    traits: {
      ancestry:[
        ["Black", "Breath Weapon: Acid", "5x30ft. line (Dex Save)", "DC: 8 + Con + Prof", "Damage: 2D6 failed, half on save"],
        ["Blue", "Breath Weapon: Lightning", "5x30ft. line (Dex Save)", "DC: 8 + Con + Prof", "Damage: 2D6 failed, half on save"],
        ["Brass", "Breath Weapon: Fire", "5x30ft. line (Dex Save)", "DC: 8 + Con + Prof", "Damage: 2D6 failed, half on save"],
        ["Bronze", "Breath Weapon: Lightning", "5x30ft. line (Dex Save)", "DC: 8 + Con + Prof", "Damage: 2D6 failed, half on save"],
        ["Copper", "Breath Weapon: Acid", "5x30ft. line (Dex Save)", "DC: 8 + Con + Prof", "Damage: 2D6 failed, half on save"],
        ["Gold", "Breath Weapon: Fire", "15ft. cone (Dex Save)", "DC: 8 + Con + Prof", "Damage: 2D6 failed, half on save"],
        ["Green", "Breath Weapon: Poison", "15ft. cone (Con Save)", "DC: 8 + Con + Prof", "Damage: 2D6 failed, half on save"],
        ["Red", "Breath Weapon: Fire", "15ft. cone (Dex Save)", "DC: 8 + Con + Prof", "Damage: 2D6 failed, half on save"],
        ["Silver", "Breath Weapon: Cold", "15ft. cone Con Save)", "DC: 8 + Con + Prof", "Damage: 2D6 failed, half on save"],
        ["White", "Breath Weapon: Cold", "15ft. cone Con Save)", "DC: 8 + Con + Prof", "Damage: 2D6 failed, half on save"],
      ]
    }
  },
  {
    name: "Dwarf",
    abilityScoreIncrease: {
      constitution: 2
    },
    speed: 25,
    size: "Medium",
    languages: [
      "Common",
      "Dwarvish"
    ],
    resistances: ["Poison"],
    traits: [
      "Darkvision: 60ft",
      "Dwarven Resilience: You have advantage on Saving Throws against poison, and you have Resistance against poison damage.",
      "Dwarven Combat Training: You have proficiency with the Battleaxe, Handaxe, Light Hammer, and Warhammer.",
      "Tool Proficiency: You gain proficiency with the artisan’s tools of your choice: smith’s tools, brewer’s supplies, or mason’s tools.",
      "Stonecunning: Whenever you make an Intelligence (History) check related to the Origin of stonework, you are considered proficient in the History skill and add double your Proficiency Bonus to the check, instead of your normal Proficiency Bonus."
    ]
  },
  {
    name: "Elf",
    abilityScoreIncrease: {
      dexterity: 2
    },
    speed: 30,
    size: "Medium",
    languages: [
      "Common",
      "Elvish"
    ],
    resistances: ["Sleep Charm"],
    traits: [
      "Darkvision: 60ft",
      "Keen Senses: You have proficiency in the Perception skill.",
      "Fey Ancestry: You have advantage on Saving Throws against being Charmed, and magic can’t put you to sleep.",
      "Trance: Elves don’t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is “trance.”) While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After Resting in this way, you gain the same benefit that a human does from 8 hours of sleep."
    ]
  },
  {
    name: "Gnome",
    abilityScoreIncrease: {
      Intelligence: 2
    },
    speed: 25,
    size: "Small",
    languages: [
      "Common",
      "Gnomish"
    ],
    traits: [
      "Darkvision: 60ft",
      "Gnome Cunning: You have advantage on all Intelligence, Wisdom, and Charisma Saving Throws against magic."
    ],
  },
  {
    name: "Half-Elf",
    abilityScoreIncrease: {
      strength: 1,
      dexterity: 1,
      constitution: 1,
      intelligence: 1,
      wisdom: 1,
      charisma: 2
    },
    speed: 30,
    size: "Medium",
    languages: [
      "Common",
      "Elvish"
    ],
    resistances: ["Sleep Charm"],
    traits: [
      "Darkvision: 60ft",
      "Fey Ancestry: You have advantage on Saving Throws against being Charmed, and magic can’t put you to sleep.",
      "Skill Versatility: You gain proficiency in two Skills of your choice.",
      "Languages: You can speak, read, and write Common, Elvish, and one extra language of your choice."
    ]
  },
  {
    name: "Half-Orc",
    abilityScoreIncrease: {
      strength: 2,
      constitution: 1
    },
    speed: 30,
    size: "Medium",
    languages: [
      "Common",
      "Orc"
    ],
    traits: [
      "Darkvision: 60ft",
      "Menacing: You gain proficiency in the Intimidation skill.",
      "Relentless Endurance: When you are reduced to 0 Hit Points but not killed outright, you can drop to 1 hit point instead. You can’t use this feature again until you finish a Long Rest.",
      "Savage Attacks: When you score a critical hit with a melee weapon Attack, you can roll one of the weapon’s damage dice one additional time and add it to the extra damage of the critical hit."
    ]
  },
  {
    name: "Halfling",
    abilityScoreIncrease: {
      dexterity: 2
    },
    speed: 25,
    size: "Small",
    languages: [
      "Common",
      "Halfling"
    ],
    traits: [
      "Lucky: When you roll a 1 on The D20 for an Attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.",
      "Brave: You have advantage on Saving Throws against being Frightened.",
      "Halfling Nimbleness: You can move through the space of any creature that is of a size larger than yours."
    ]
  },
  {
    name: "Human",
    abilityScoreIncrease: {
      strength: 1,
      dexterity: 1,
      constitution: 1,
      intelligence: 1,
      wisdom: 1,
      charisma: 1
    },
    speed: 30,
    size: "Medium",
    languages: [
      "Common",
    ],
    traits: [
      "Languages: You can speak, read, and write Common and one extra language of your choice. Humans typically learn the Languages of other peoples they deal with, including obscure dialects."
    ]
  },
  {
    name: "Tiefling",
    abilityScoreIncrease: {
      intelligence: 1,
      charisma: 2
    },
    speed: 30,
    size: "Medium",
    languages: [
      "Common",
      "Infernal"
    ],
    resistances: "Fire Damage",
    traits: [
      "Darkvision: 60ft",
      "Hellish Resistance: You have Resistance to fire damage.",
      "Infernal Legacy. You know the Thaumaturgy cantrip. When you reach 3rd Level, you can cast the Hellish Rebuke spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a Long Rest. When you reach 5th Level, you can cast the Darkness spell once with this trait and regain the ability to do so when you finish a Long Rest. Charisma is your Spellcasting Ability for these Spells."
    ]
  },
]);
