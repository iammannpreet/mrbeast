import Navbar from '../shared/navbar';
import Image from 'next/image';

export default function Home() {

  return (
    <main className="bg-gradient-to-r from-yellow-400 to-orange-500 min-h-screen">
     <Navbar />
      {/* Logo Section */}
           <Image
          src="/mrbeast.webp"
          alt="MrBeast Logo"
          width={200}
          height={200}
          className="rounded-full"
        />
        <h1 className="text-4xl font-bold text-white mt-6">
          Welcome to MrBeast Fan Games
        </h1>
        <p className="text-lg text-white mt-4">
          Think you’ve got what it takes? Dive into epic challenges, make
          predictions, and prove you're the ultimate MrBeast fan.
        </p>
       {/* Call-to-Action Section */}
    
      {/* Features Section */}
      <section className="mt-16 bg-white bg-opacity-80 rounded-lg shadow-lg p-8 max-w-3xl text-center">
        <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
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
      </section>

      {/* Footer Section */}
      <footer className="mt-auto text-white">
        <p>
          © {new Date().getFullYear()} MrBeast Games. All rights reserved.
          <br />
          This is a Beast Games fan site and is not affiliated with MrBeast or Beast Games.
        </p>
      </footer>
    </main>
  );
}
