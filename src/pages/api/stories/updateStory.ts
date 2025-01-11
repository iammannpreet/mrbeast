import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../lib/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "PUT") {
    const { id, likes, comments, commentList } = req.body;

    if (!id) {
      return res.status(400).json({ error: "Story ID is required." });
    }

    try {
      const client = await clientPromise;
      const db = client.db("MrBeast");
      const storiesCollection = db.collection("Stories");

      interface UpdatedFields {
        likes?: number;
        comments?: number;
        commentList?: string[];
      }
      const updatedFields: UpdatedFields = {};
      if (likes !== undefined) updatedFields.likes = likes;
      if (comments !== undefined) updatedFields.comments = comments;
      if (commentList !== undefined) updatedFields.commentList = commentList;

      const result = await storiesCollection.updateOne(
        { _id: new ObjectId(id) },
        { $set: updatedFields }
      );

      if (result.modifiedCount === 0) {
        return res.status(404).json({ error: "Story not found or unchanged." });
      }

      res.status(200).json({ message: "Story updated successfully." });
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error updating story:", error.message); // Logs the error message
      } else {
        console.error("Unknown error occurred while updating story.");
      }
      res.status(500).json({ error: "Failed to update story." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed." });
  }
}
