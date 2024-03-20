const mongoose = require("mongoose");

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const dbUrl = process.env.DB || "mongodb://localhost:27017/smartparking/";

const connectToCollection = (collectionName) => {
	console.log(`${dbUrl} collection address`)
  mongoose.connect(`${dbUrl}`, connectionParams);

  mongoose.connection.on('connected', () => {
    console.log(`Connected to MongoDB collection: ${collectionName}`);
  });

  mongoose.connection.on('error', (err) => {
    console.error(`Error connecting to MongoDB collection ${collectionName}:`, err);
  });

  mongoose.connection.on('disconnected', () => {
    console.log(`Disconnected from MongoDB collection: ${collectionName}`);
  });
};

const disconnectFromCollection = async () => {
	await mongoose.disconnect();
	console.log("Disconnected from database");
  };
  
module.exports = {
  connectToCollection,
  disconnectFromCollection
};