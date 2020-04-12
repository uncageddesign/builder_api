const express = require('express');
const app = express();
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router');
const cors = require('cors');

app.use(cors())
app.use(parser.json());

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if(err){
    console.log(err);
  }

  const db = client.db('character_builder');
  const builderCollection = db.collection('builder');
  const builderRouter = createRouter(builderCollection)
  app.use('/api/builder', builderRouter);

  app.listen(3000, function(){
    console.log(`app listening on port ${this.address().port}`);
  })
})
