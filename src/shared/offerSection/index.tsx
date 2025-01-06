import React from 'react'

function Offer() {
  return (
    <div>
   {/* Features Section */}
   <div className=" bg-white bg-opacity-80 shadow-lg p-8 text-center mt-8">
   <h2 className="text-black text-2xl font-semibold mb-4">What We Offer</h2>
   <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
     <div>
       <h3 className="text-xl font-bold text-blue-500">Epic Quizzes</h3>
       <p className="text-gray-700">
         Test your knowledge about MrBeast and his legendary games.
       </p>
     </div>
     <div>
       <h3 className="text-xl font-bold text-yellow-500">
         Prediction Games
       </h3>
       <p className="text-gray-700">
         Guess what happens next and earn points to climb the leaderboard.
       </p>
     </div>
     <div>
       <h3 className="text-xl font-bold text-red-500">Exclusive Rewards</h3>
       <p className="text-gray-700">
         Unlock badges and share your achievements with the community.
       </p>
     </div>
   </div>
 </div>
 </div>
  )
}

export default Offer;