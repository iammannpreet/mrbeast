"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Offer() {
  // Ref for the sidebar animation
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Sidebar animation: slide in from the right
    gsap.fromTo(
      sidebarRef.current,
      { x: 300, opacity: 0 }, // Start off-screen
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div className="md:flex max-w-5xl mx-auto md:gap-8 px-8">
      {/* Features Section */}
      <div className="md:max-w-[70%] bg-white rounded-lg bg-opacity-80 shadow-lg p-8 text-center mt-8">
        <h2 className="text-black text-2xl font-semibold mb-8">
          What You Can Explore
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Fun Facts Carousel */}
          <div className="p-6 bg-gray-100 rounded-lg hover:shadow-xl transition duration-300">
            <div className="flex justify-center mb-4">
              <span className="text-4xl text-blue-500">📚</span>
            </div>
            <h3 className="text-xl font-bold text-blue-500 mb-2">
              Fun Facts Carousel
            </h3>
            <p className="text-gray-700">
              Dive into fun and surprising facts about MrBeast and his
              incredible team. Discover something new every visit!
            </p>
          </div>

          {/* Exclusive Merchandise */}
          <div className="p-6 bg-gray-100 rounded-lg hover:shadow-xl transition duration-300">
            <div className="flex justify-center mb-4">
              <span className="text-4xl text-yellow-500">🛍️</span>
            </div>
            <h3 className="text-xl font-bold text-yellow-500 mb-2">
              Exclusive Merchandise
            </h3>
            <p className="text-gray-700">
              Browse and shop from MrBeast’s latest and exclusive merch
              collection. Level up your style!
            </p>
          </div>

          {/* Bingo Card Generator */}
          <div className="p-6 bg-gray-100 rounded-lg hover:shadow-xl transition duration-300">
            <div className="flex justify-center mb-4">
              <span className="text-4xl text-green-500">🎯</span>
            </div>
            <h3 className="text-xl font-bold text-green-500 mb-2">
              Bingo Card Generator
            </h3>
            <p className="text-gray-700">
              Create and print custom MrBeast-themed Bingo cards for the
              ultimate watch party fun.
            </p>
          </div>

          {/* Share Your Ideas */}
          <div className="p-6 bg-gray-100 rounded-lg hover:shadow-xl transition duration-300">
            <div className="flex justify-center mb-4">
              <span className="text-4xl text-red-500">💡</span>
            </div>
            <h3 className="text-xl font-bold text-red-500 mb-2">
              Share Your Ideas
            </h3>
            <p className="text-gray-700">
              Got a wild challenge idea? Submit it and get a chance to be
              featured on our leaderboard!
            </p>
          </div>
        </div>
      </div>

      {/* Sidebar Section with GSAP Animation */}
      <div
        ref={sidebarRef}
        className="hidden md:max-w-[30%] md:block mt-8 items-center bg-white rounded-lg shadow-lg p-6"
      >
        <h1 className="text-3xl font-semibold text-black">
          Be Part of the MrBeast Movement
        </h1>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Want to get involved in the next big thing? Join our community and
          help shape the future of MrBeast challenges and content!
        </p>

        <div className="mt-4">
          <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300">
            <a href="https://discord.gg/kh47QcXN" target="_blank">
              Join Us on Discord 💬
            </a>
          </button>
        </div>

        <p className="mt-4 text-sm text-gray-500 italic">
          Got ideas or just want to hang out with fellow fans? Join our Discord
          and start contributing today!
        </p>
      </div>
    </div>
  );
}

export default Offer;
