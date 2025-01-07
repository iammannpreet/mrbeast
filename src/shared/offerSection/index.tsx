import React from "react";

function Offer() {
  return (
    <div className="md:flex max-w-5xl mx-auto md:gap-8 px-8">
      {/* Features Section */}
      <div className="md:max-w-[70%]  bg-white rounded-lg bg-opacity-80 shadow-lg p-8 text-center mt-8">
        <h2 className="text-black text-2xl font-semibold mb-4">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <h3 className="text-xl font-bold text-blue-500">Epic Quizzes</h3>
            <hr className="p-1" />
            <p className="text-gray-700">
              Test your knowledge about MrBeast and his legendary games.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-yellow-500">
              Prediction Games
            </h3>
            <hr className="p-1" />
            <p className="text-gray-700">
              Guess what happens next and earn points to climb the leaderboard.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-red-500">
              Exclusive Rewards
            </h3>
            <hr className="p-1" />
            <p className="text-gray-700">
              Unlock badges and share your achievements with the community.
            </p>
          </div>
        </div>
      </div>
      <div className="hidden md:max-w-[30%] md:block mt-8 items-center">
        <h1 className="text-3xl font-semibold text-black">Mr Beast Games</h1>
        <p className="mt-4 text-gray-700">
          MrBeast is a YouTuber who is known for his expensive stunts and
          philanthropy. He has gained a massive following due to his
          high-quality content and his willingness to give back to his fans.
          MrBeast is known for his generosity and his willingness to help those
          in need. He has donated millions of dollars to charity and has helped
          countless people in need. MrBeast is a true inspiration and a role
          model for many people around the world.
        </p>
      </div>
    </div>
  );
}

export default Offer;
