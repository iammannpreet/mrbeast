import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

// Path to the stories JSON file
const filePath = path.join(process.cwd(), "public/data/stories.json");

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const updatedStory = req.body;

    try {
      const fileData = fs.readFileSync(filePath, "utf-8");
      let stories = JSON.parse(fileData);

      // Check if the story already exists (update) or if it's a new one
      const storyIndex = stories.findIndex(
        (story: any) => story.id === updatedStory.id
      );

      if (storyIndex !== -1) {
        // ✅ Update existing story
        stories[storyIndex] = updatedStory;
      } else {
        // ✅ Add new story
        stories.push(updatedStory);
      }

      // Save the updated stories to the file
      fs.writeFileSync(filePath, JSON.stringify(stories, null, 2));

      return res.status(200).json({ message: "Story saved successfully." });
    } catch (error) {
      console.error("Error saving story:", error);
      return res.status(500).json({ error: "Failed to save story." });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed." });
  }
}
