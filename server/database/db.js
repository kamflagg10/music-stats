import { MongoClient } from 'mongodb';
import { connectionString } from '../credentials.js';

const client = new MongoClient(connectionString);
let conn;
try {
  conn = await client.connect();
} catch (e) {
  console.error(e);
}
// let db = conn.db('spotify2022');
let db = conn.db('spotify2024');
// let history = conn.db('historySample');

export default db;
