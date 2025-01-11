import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("🔍 Incoming request to /api/stories/getStories");
  try {
    const client = await clientPromise;
    console.log("✅ Connected to MongoDB");

    const db = client.db("MrBeast");
    const stories = await db.collection("Stories").find({}).toArray();

    console.log(`📦 Fetched ${stories.length} stories`);
    res.status(200).json(stories);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch stories", details: error });
  }
}
