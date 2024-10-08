// Load environment variables
// import './loadEnvironment.mjs';
import db from './database/db.js';
import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;
app.use(cors());

app.get('/', async (req, res) => {
  let collection = await db.collection('history2023');
  let results = await collection
    .find({ master_metadata_album_artist_name: 'USHER' })
    .limit(5)
    .toArray();
  res.send({ results: results }).status(200);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
