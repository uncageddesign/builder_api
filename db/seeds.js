use character_builder;
db.dropDatabase();

db.builder.insertMany([
  {
    name: "Barbarian"
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
