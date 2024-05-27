const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGODB_URI;

const connection = async () => {
  try {
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      connectTimeoutMS: 10000, 
    });

    await client.connect();
    console.log("MongoDB connected successfully");
    return client; // Return the connected client
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error; // Throw the error to handle it elsewhere
  }
};

module.exports = connection;
