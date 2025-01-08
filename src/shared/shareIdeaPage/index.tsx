"use client";

import React, { useState } from "react";
import MyComponent from "../shareIdea/index";
import Navbar from "../navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectCoverflow } from "swiper/modules";
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
      <section className={styles.features}>
        <h1 className={styles.blockTitle}>Top Stories</h1>
        <div className={styles["features--wrap"]}>
          <Swiper
            modules={[Autoplay, EffectCoverflow, Navigation]}
            navigation={{
              nextEl: ".user-swiper-button-next",
              prevEl: ".user-swiper-button-prev",
            }}
            slidesPerView={3.3}
            centeredSlides
            loop
            autoplay={{ delay: 2000 }}
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
          >
            {stories.map(({ id, user, content, likes, comments }) => (
              <SwiperSlide key={id}>
                <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col space-y-3">
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
          <div
            className="swiper-button-prev user-swiper-button-prev"
            style={{ color: "#000033" }}
          ></div>
          <div
            className="swiper-button-next user-swiper-button-next"
            style={{ color: "#000033" }}
          ></div>
        </div>
      </section>

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
