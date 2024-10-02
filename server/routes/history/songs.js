import express from 'express';
import db from './database/db.js';

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
