import { MongoClient, Db } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.DB_URI;
if (!uri) {
  throw new Error('DB_URI ist nicht gesetzt!');
}

const client = new MongoClient(uri);
let dbInstance: Db | null = null;

export async function connectDB(): Promise<Db> {
  if (!dbInstance) {
    await client.connect();
    dbInstance = client.db('musikapp');
  }
  return dbInstance;
}
