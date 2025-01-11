// src/types/global.d.ts (example)
export {}; // Makes sure this file is treated as a module by TS

declare global {
  interface GlobalThis {
    _mongoClientPromise?: Promise<import("mongodb").MongoClient>;
  }
}
