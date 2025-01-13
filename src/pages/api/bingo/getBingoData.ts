import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const client = await clientPromise;
    const db = client.db("MrBeast");

    // Fetch all Bingo data
    const data = await db.collection("BingoData").find({}).toArray();

    if (!Array.isArray(data)) {
      console.warn("⚠️ No bingo data found.", data);
      return res.status(200).json([]);
    }

    res.status(200).json(data);
  } catch (error) {
    console.error("❌ Error fetching bingo data:", error);
    res.status(500).json({ error: "Failed to fetch bingo data." });
  }
}
