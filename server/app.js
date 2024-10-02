// Load environment variables
// import './loadEnvironment.mjs';
import db from './database/db.js';
import { clientId, clientSecret } from './credentials.js';
import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;
app.use(cors());

async function generateSpotifyToken() {
  const params = new URLSearchParams();
  params.append('client_id', clientId);
  params.append('client_secret', clientSecret);
  const res = await fetch(
    `https://accounts.spotify.com/api/token?grant_type=client_credentials&${params}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  );
  const jsonRes = await res.json();
  console.log(jsonRes);
  // currToken = jsonRes['access_token'];
}

app.get('/token', async (req, res) => {
  try {
    await generateSpotifyToken();
    res.send({ message: 'got the token successfully.' }).status(200);
  } catch (error) {
    res.send({ message: 'error getting the token!' }).status(404);
  }
});

app.get('/authorize', async (req, res) => {});

app.get('/callback', (req, res) => {
  res.send('Failed to authenticate').status(404);
});

app.get('/summary', async (req, res) => {
  // const params = new URLSearchParams();
  // params.append();
  // const resp = await fetch('', {
  //   headers,
  // });
});

app.get('/', async (req, res) => {
  let collection = await db.collection('streaming');
  let results = await collection.find({}).limit(5).toArray();
  res.send({ results: results }).status(200);
});

app.get('/songsByArtist', async (req, res) => {
  let collection = await history.collection('history');
  let results = await collection
    .find({ artistName: req.artist })
    .limit(5)
    .toArray();

  res.send({ results: results }).status(200);
});

app.get('/songsbyDate', async (req, res) => {
  //take in date, get list of songs by date.
});

app.get('/songInfo', async (req, res) => {
  //take in song id, return song info.
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
