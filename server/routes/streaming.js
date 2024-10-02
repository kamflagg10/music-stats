// Load environment variables
// import './loadEnvironment.mjs';
import db from './database/db.js';
import express from 'express';

app.get('/', async (req, res) => {
  res.send('Hello Kamira! <3');
  let collection = await db.collection('streaming');
  let results = await collection.find({}).limit(5).toArray();
  res.send(results).status(200);
});
