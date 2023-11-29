require("dotenv").config();
import { MongoClient } from "mongodb";
import { cache } from "react";

export const revalidate = 60;

export const getDocuments = cache(async (collection) => {
  const client = await MongoClient.connect(process.env.DB_URI);
  const db = client.db("samiya_hubbard");
  const dbCollection = db.collection(collection);
  const documents = await dbCollection.find({}).sort({ id: 1 }).toArray();
  await client.close();
  return documents;
});
