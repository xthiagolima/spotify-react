import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
  throw new Error("Please define the MONGO_URI environment variable");
}

console.log("Connecting to MongoDB...");
// console.log(MONGO_URI);

const cliente = new MongoClient(MONGO_URI);

export const db = cliente.db("spotify");
