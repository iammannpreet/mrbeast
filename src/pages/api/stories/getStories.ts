import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const client = await clientPromise;

    // ✅ Ensure database and collection names are correct (case-sensitive)
    const db = client.db("MrBeast");
    const stories = await db.collection("Stories").find({}).toArray();

    res.status(200).json(stories);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch stories", details: error });
  }
}
