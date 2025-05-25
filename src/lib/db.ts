import { MongoClient, Db } from 'mongodb';

const uri = 'mongodb+srv://garamer1:Eamc579802@cluster0.jjno5.mongodb.net/musikapp?retryWrites=true&w=majority&appName=AtlasApp';
const client = new MongoClient(uri);

let dbInstance: Db | null = null;

export async function connectDB(): Promise<Db> {
  if (!dbInstance) {
    await client.connect();
    dbInstance = client.db('musikapp');
  }
  return dbInstance;
}