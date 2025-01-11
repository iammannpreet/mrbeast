import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// ✅ Add console logging for debugging
const globalForMongo = globalThis as typeof globalThis & {
  _mongoClientPromise?: Promise<MongoClient>;
};

if (!uri) {
  throw new Error("MongoDB URI is missing! Please define MONGODB_URI in .env");
}

try {
  if (process.env.NODE_ENV === "development") {
    if (!globalForMongo._mongoClientPromise) {
      console.log("🔄 Connecting to MongoDB in Development...");
      client = new MongoClient(uri, options);
      globalForMongo._mongoClientPromise = client.connect();
    } else {
      console.log("✅ Reusing MongoDB connection in Development");
    }
    clientPromise = globalForMongo._mongoClientPromise!;
  } else {
    console.log("🔄 Connecting to MongoDB in Production...");
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
  }
} catch (error) {
  console.error("❌ MongoDB connection error:", error);
  throw new Error("Failed to connect to MongoDB.");
}

export default clientPromise;
