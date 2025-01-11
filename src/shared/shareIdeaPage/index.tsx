"use client";

import React, { useState, useEffect } from "react";
import MyComponent from "../shareIdea/index";
import Navbar from "../navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./ShareIdeasPage.module.css";

interface Story {
  id: number;
  user: string;
  content: string;
  likes: number;
  comments: number;
  commentList?: string[]; // To store actual comments
}

const ShareIdeasPage: React.FC = () => {
  const [stories, setStories] = useState<Story[]>([]);

  useEffect(() => {
    fetch("/api/stories/getStories")
      .then((res) => res.json())
      .then((data) => setStories(data))
      .catch((err) => console.error("Error loading stories:", err));
  }, []);

  const handleNewIdea = async (userName: string, ideaContent: string) => {
    const newStory = {
      user: userName,
      content: ideaContent,
    };

    // Optimistically update the UI
    setStories((prevStories) => [
      {
        ...newStory,
        likes: 0,
        comments: 0,
        commentList: [],
        id: Date.now(),
      },
      ...prevStories,
    ]);

    // Save to MongoDB
    try {
      const response = await fetch("/api/stories/saveStory", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newStory),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.error);
    } catch (error) {
      console.error("Failed to save story:", error);
    }
  };

  // ✅ Fix Like Action
  const handleLike = (id: number) => {
    const updatedStories = stories.map((story) =>
      story.id === id ? { ...story, likes: story.likes + 1 } : story
    );

    setStories(updatedStories);

    const updatedStory = updatedStories.find((story) => story.id === id);

    // ✅ Correct API endpoint
    fetch("/api/stories/saveStory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedStory),
    }).catch((err) => console.error("Failed to save like:", err));
  };

  // ✅ Fix Comment Action
  const handleComment = (id: number) => {
    const comment = prompt("Enter your comment:");
    if (comment && comment.trim() !== "") {
      const updatedStories = stories.map((story) =>
        story.id === id
          ? {
              ...story,
              comments: story.comments + 1,
              commentList: [...(story.commentList || []), comment],
            }
          : story
      );

      setStories(updatedStories);

      const updatedStory = updatedStories.find((story) => story.id === id);

      // ✅ Correct API endpoint
      fetch("/api/stories/saveStory", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedStory),
      }).catch((err) => console.error("Failed to save comment:", err));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-400 to-orange-500">
      <Navbar />
      <section className="max-w-[100%] 2xl:max-w-[80%] mx-auto max-h-[1800px]">
        <h1 className={styles.blockTitle}>Top Stories</h1>

        <Swiper
          modules={[Autoplay, EffectCoverflow]}
          slidesPerView={1.3}
          centeredSlides
          loop
          effect={"coverflow"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          preventClicks={false}
          preventClicksPropagation={false}
          breakpoints={{
            480: { slidesPerView: 1.5 },
            640: { slidesPerView: 1.8 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3.1 },
            1280: { slidesPerView: 3.6 },
            1536: { slidesPerView: 3.4 },
          }}
        >
          {stories.map(
            ({ id, user, content, likes, comments, commentList }) => (
              <SwiperSlide key={id} className="flex justify-center">
                <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col space-y-2 max-w-[18rem] 2xl:max-w-[20rem] h-[20rem] overflow-hidden">
                  <div className="text-gray-700 font-semibold text-lg">
                    {user}
                  </div>
                  <div
                    className="text-gray-600 overflow-hidden"
                    dangerouslySetInnerHTML={{ __html: content }}
                  />
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    {/* 👍 Like Button */}
                    <button
                      className="flex items-center space-x-1 hover:text-blue-500"
                      onClick={() => handleLike(id)}
                    >
                      <span>👍</span>
                      <span>{likes}</span>
                    </button>

                    {/* 💬 Comment Button */}
                    <button
                      className="flex items-center space-x-1 hover:text-blue-500"
                      onClick={() => handleComment(id)}
                    >
                      <span>💬</span>
                      <span>{comments}</span>
                    </button>
                  </div>

                  {/* Display Recent Comments */}
                  {commentList && commentList.length > 0 && (
                    <div className="mt-2 text-xs text-gray-600 overflow-y-auto max-h-[60px]">
                      <strong>Comments:</strong>
                      {commentList.slice(-3).map((comment, idx) => (
                        <p key={idx}>- {comment}</p>
                      ))}
                    </div>
                  )}
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </section>

      <div className="items-center flex justify-center">
        <div className="w-[80%] md:w-1/2 flex flex-col p-6 bg-white shadow-md mt-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Share Your Idea
          </h2>
          {/* Pass the updated handleNewIdea to MyComponent */}
          <MyComponent onSubmit={handleNewIdea} />
        </div>
      </div>
    </div>
  );
};

export default ShareIdeasPage;
