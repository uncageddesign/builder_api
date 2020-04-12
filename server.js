const express = require('express');
const app = express();
const path = require('path');
const parser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router');
const cors = require('cors');

app.use(cors());
app.use(parser.json());

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if(err){
    console.log(err);
  }

  const db = client.db('character_builder');
  const classesCollection = db.collection('classes');
  const classesRouter = createRouter(classesCollection)
  app.use('/api/classes', classesRouter);

  const racesCollection = db.collection('races');
  const racesRouter = createRouter(racesCollection)
  app.use('/api/races', racesRouter);

  app.listen(3000, function(){
    console.log(`app listening on port ${this.address().port}`);
  })
})
