const { MongoClient } = require('mongodb');

// Replace <db_password> with your actual password
const uri = "mongodb+srv://vakarXmusic:<db_password>@vakarxmusic.mwspvcb.mongodb.net/?retryWrites=true&w=majority&appName=vakarXmusic";

async function run() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("Connected successfully to MongoDB Atlas!");

    // Example: List all databases
    const databasesList = await client.db().admin().listDatabases();
    console.log("Databases:", databasesList.databases.map(db => db.name));

  } catch (err) {
    console.error("Connection error:", err);
  } finally {
    await client.close();
  }
}

run();

require("./bot.js");

