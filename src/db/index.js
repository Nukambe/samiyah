require("dotenv").config();
import { MongoClient } from "mongodb";
import { cache } from "react";

export const revalidate = 60;

export const getDocuments = cache(async (collection) => {
  const client = await MongoClient.connect(process.env.DB_URI);
  const documents = {};

  try {
    const db = client.db("samiya_hubbard");
    const dbCollection = db.collection(collection);
    documents.docs = await dbCollection.find({}).sort({ id: 1 }).toArray();
  } catch {
    await client.close();
  } finally {
    await client.close();
  }

  return documents.docs;
});

export const getAllDocuments = async () => {
  const client = await MongoClient.connect(process.env.DB_URI);
  const documents = {};

  try {
    const db = client.db("samiya_hubbard");

    const attributes = db.collection('attributes');
    documents.attributes = await attributes.find({}).toArray();

    const clubs = db.collection('clubs');
    documents.clubs = await clubs.find({}).toArray();

    const tournaments = db.collection('tournaments');
    documents.tournaments = await tournaments.find({}).toArray();
  } catch {
    await client.close();
  } finally {
    await client.close();
  }

  return documents;
}

export const insertDocuments = async (collection, documents) => {
  const client = await MongoClient.connect(process.env.DB_URI);
  const res = {};

  try {
    const db = client.db("samiya_hubbard");
    const dbCollection = db.collection(collection);
    await dbCollection.deleteMany({});
    res.res = await dbCollection.insertMany(documents);
  } catch {
    await client.close();
  } finally {
    await client.close();
  }

  return res.res;
};
