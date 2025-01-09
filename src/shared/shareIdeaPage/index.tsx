"use client";

import React, { useState } from "react";
import MyComponent from "../shareIdea/index";
import Navbar from "../navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./ShareIdeasPage.module.css";

const ShareIdeasPage: React.FC = () => {
  const [stories] = useState([
    {
      id: 1,
      user: "John Doe",
      content: "What if MrBeast did a $1M underwater survival challenge?",
      likes: 45,
      comments: 12,
    },
    {
      id: 1,
      user: "John Doe",
      content: "What if MrBeast did a $1M underwater survival challenge?",
      likes: 45,
      comments: 12,
    },
    {
      id: 1,
      user: "John Doe",
      content: "What if MrBeast did a $1M underwater survival challenge?",
      likes: 45,
      comments: 12,
    },
    {
      id: 1,
      user: "John Doe",
      content: "What if MrBeast did a $1M underwater survival challenge?",
      likes: 45,
      comments: 12,
    },
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
    {
      id: 3,
      user: "Alice Johnson",
      content: "MrBeast should host a 'Last to Leave the Desert' challenge!",
      likes: 55,
      comments: 18,
    },
    {
      id: 3,
      user: "Alice Johnson",
      content: "MrBeast should host a 'Last to Leave the Desert' challenge!",
      likes: 55,
      comments: 18,
    },
    {
      id: 3,
      user: "Alice Johnson",
      content: "MrBeast should host a 'Last to Leave the Desert' challenge!",
      likes: 55,
      comments: 18,
    },
  ]);

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
            480: {
              slidesPerView: 1.5, // For screens >= xs (480px)
            },
            640: {
              slidesPerView: 1.8, // For screens >= sm (640px)
            },
            768: {
              slidesPerView: 2.5, // For screens >= md (768px)
            },
            1024: {
              slidesPerView: 3.1, // For screens >= lg (1024px)
            },
            1280: {
              slidesPerView: 3.6, // For screens >= xl (1280px)
            },
            1536: {
              slidesPerView: 3.4, // For screens >= 2xl (1536px)
            },
          }}
        >
          {stories.map(({ id, user, content, likes, comments }) => (
            <SwiperSlide key={id} className="flex justify-center">
              <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col space-y-2 max-w-[18rem] 2xl:max-w-[20rem] h-[20rem]">
                <div className="text-gray-700 font-semibold text-lg">
                  {user}
                </div>
                <div className="text-gray-600">{content}</div>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <button
                    className="flex items-center space-x-1 hover:text-blue-500"
                    onClick={() => alert(`Liked by ${user}`)}
                  >
                    <span>👍</span>
                    <span>{likes}</span>
                  </button>
                  <button
                    className="flex items-center space-x-1 hover:text-blue-500"
                    onClick={() => alert(`Comment on ${user}'s idea`)}
                  >
                    <span>💬</span>
                    <span>{comments}</span>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <div className="items-center flex justify-center">
        {/* Idea Submission Section */}
        <div className="w-[80%] md:w-1/2 flex flex-col p-6 bg-white shadow-md mt-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Share Your Idea
          </h2>

          <MyComponent />
          <div className="flex justify-center mt-8 sm:mt-0">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transform hover:scale-105 transition-transform duration-200 mt-16">
              Submit Idea
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareIdeasPage;
