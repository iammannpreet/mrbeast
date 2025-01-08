"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import MyComponent from "../shareIdea/index";
import Navbar from "../navbar";
const ShareIdeasPage: React.FC = () => {
  const [stories, setStories] = useState([
    {
      id: 1,
      user: "John Doe",
      content: "What if MrBeast did a $1M underwater survival challenge?",
      likes: 45,
      comments: 12,
    },
    {
      id: 2,
      user: "Jane Smith",
      content: "How about a hide-and-seek game in a theme park?",
      likes: 32,
      comments: 8,
    },
  ]);

  const storyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure the reference is valid before running GSAP animation
    if (storyRef.current?.children) {
      gsap.fromTo(
        Array.from(storyRef.current.children), // Convert HTMLCollection to an array
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
        }
      );
    }
  }, [stories]);

  const handleLike = (id: number) => {
    setStories((prevStories) =>
      prevStories.map((story) =>
        story.id === id ? { ...story, likes: story.likes + 1 } : story
      )
    );
  };

  const handleReply = (id: number) => {
    alert(`Reply to story ${id}`);
  };

  const handleShare = (id: number) => {
    alert(`Share story ${id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-400 to-orange-500">
      <Navbar />
      {/* Stories Section */}
      <div className="w-full p-6">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Top Stories
        </h2>
        <div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          ref={storyRef}
        >
          {stories.map((story) => (
            <div
              key={story.id}
              className="p-4 bg-white shadow-lg rounded-lg flex flex-col space-y-3 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-gray-700 font-semibold">{story.user}</div>
              <div className="text-gray-600">{story.content}</div>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <button
                  className="flex items-center space-x-1 hover:text-blue-500"
                  onClick={() => handleLike(story.id)}
                >
                  <span>👍</span>
                  <span>{story.likes}</span>
                </button>
                <button
                  className="hover:text-blue-500"
                  onClick={() => handleReply(story.id)}
                >
                  Reply
                </button>
                <button
                  className="hover:text-blue-500"
                  onClick={() => handleShare(story.id)}
                >
                  Share
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Idea Submission Section */}
      <div className="w-full p-6 bg-white shadow-md mt-8 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Share Your Idea
        </h2>
        <div className="mb-4">
          <MyComponent />
        </div>
        <div className="flex justify-center">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transform hover:scale-105 transition-transform duration-200">
            Submit Idea
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareIdeasPage;
