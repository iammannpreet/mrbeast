import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("🔍 Request to /api/stories/getStories");

  try {
    const client = await clientPromise;
    const db = client.db("mrbeast");

    const stories = await db.collection("Stories").find({}).toArray();

    if (!Array.isArray(stories)) {
      console.warn("⚠️ Expected an array but got:", stories);
      return res.status(200).json([]);
    }

    console.log(`📦 Found ${stories.length} stories`);
    res.status(200).json(stories);
  } catch (error) {
    console.error("❌ Error fetching stories:", error);
    res.status(500).json({ error: "Failed to fetch stories." });
  }
}
