use character_builder;
db.dropDatabase();

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
      "Spell Known: 4",
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
      "Martial Arts: Your practice of martial arts gives you mastery of Combat styles that use unarmed strikes and monk Weapons, which are shortswords and any simple Melee Weapons that don't have the Two-Handed or heavy property. You gain the following benefits while you are unarmed or wielding only monk Weapons and you aren't wearing armor or wielding a Shield. You can use Dexterity instead of Strength for the Attack and Damage Rolls of your unarmed strikes and monk Weapons.You can roll a d4 in place of the normal damage of your Unarmed Strike or monk weapon. When you use the Attack action with an Unarmed Strike or a monk weapon on Your Turn, you can make one Unarmed Strike as a Bonus Action. For example, if you take the Attack action and Attack with a Quarterstaff, you can also make an Unarmed Strike as a Bonus Action, assuming you haven't already taken a Bonus Action this turn."
    ]
  },
]);


db.races.insertMany([
  {
    name: "Human"
  },
  {
    name: "Orc"
  },
  {
    name: "Elf"
  },
  {
    name: "Dwarf"
  }
]);
