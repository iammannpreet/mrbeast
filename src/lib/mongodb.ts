import { MongoClient } from "mongodb";

// 🔥 Updated URI with database specified
const uri =
  "mongodb+srv://mrbeast:HEs6cX315COAOhLo@mrbeast.o2gsl.mongodb.net/mrbeast?retryWrites=true&w=majority&appName=mrbeast";
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!uri) {
  throw new Error("MongoDB URI is missing!");
}

// ✅ Persistent connection in development
if (process.env.NODE_ENV === "development") {
  if (!(global as any)._mongoClientPromise) {
    client = new MongoClient(uri, options);
    (global as any)._mongoClientPromise = client.connect();
  }
  clientPromise = (global as any)._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
