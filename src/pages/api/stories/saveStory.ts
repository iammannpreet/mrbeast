import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const newStory = req.body;

    try {
      const client = await clientPromise;
      const db = client.db("MrBeast");
      const storiesCollection = db.collection("Stories");

      // Insert the new story
      const result = await storiesCollection.insertOne({
        ...newStory,
        likes: 0,
        comments: 0,
        commentList: [],
        createdAt: new Date(),
      });

      res
        .status(200)
        .json({ message: "Story saved successfully.", id: result.insertedId });
    } catch (error) {
      res.status(500).json({ error: "Failed to save story.", details: error });
    }
  } else {
    res.status(405).json({ error: "Method not allowed." });
  }
}
