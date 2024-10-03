import express from 'express';
import db from './database/db.js';

let collection = await history.collection('history');

app.get('/songsByArtist', async (req, res) => {
  let results = await collection.find({ artistName: req.artist }).toArray();
  res.send({ results: results }).status(200);
});

app.get('/songsbyDate', async (req, res) => {
  //take in date, get list of songs by date.
  // let collection = await history.collection('history');
  let results = await collection.find({ date: req.date }).toArray();
  res.send({ results: results }).status(200);
});
