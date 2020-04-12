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
        "Warhammer 1D8 Bludgeoning"
      ],
      weaponTwo: [
        "Handaxes(2) 1D6 Slashing",
        "Dagger 1D4 Piercing"
      ],
      pack: ["Explorer's Pack"],
      extraItem: "Javelins(4) 1D6 Slashing"
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
    features: {
      rages: 2,
      rageDamage: 2
    }
  },
  {
    name: "Cleric"
  },
  {
    name: "Ranger"
  },
  {
    name: "Fighter"
  }
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
