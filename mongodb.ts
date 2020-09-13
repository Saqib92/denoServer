import { MongoClient } from "https://deno.land/x/mongo@v0.11.1/mod.ts";

const mongoUrl:string ="mongodb://localhost:27017"; 
const client = new MongoClient();
client.connectWithUri(mongoUrl);
console.log('Mongo DB Connected');

const db = client.database('learn');

export default db;