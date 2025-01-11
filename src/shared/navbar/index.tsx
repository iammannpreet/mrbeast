"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Dialog from "../ui/Dialog";
import { Button } from "../ui/Button";
import QuizGame from "../quizgame";
import Link from "next/link";

export default function Navbar() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isJoinNowOpen, setIsJoinNowOpen] = useState(false);
  const router = useRouter();

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  const openQuiz = () => setIsQuizOpen(true);
  const closeQuiz = () => setIsQuizOpen(false);

  const openJoinNow = () => setIsJoinNowOpen(true);
  const closeJoinNow = () => setIsJoinNowOpen(false);

  return (
    <div className="flex flex-col items-center py-4 shadow-md w-full">
      <div className="flex flex-col sm:flex-row max-w-5xl w-full justify-around items-center gap-4 sm:gap-8">
        <Link href="/" passHref>
          <Image src="/logo.png" alt="logo" width={60} height={100} />
        </Link>
        {/* "Who Are We?" Button */}
        <Button variant="blue" size="md" shape="rounded" onClick={openDialog}>
          Who Are We?
        </Button>

        {/* "Join Now" Button */}
        <Button variant="red" size="md" shape="pill" onClick={openJoinNow}>
          Join Now
        </Button>

        {/* "Your Ideas" Button */}
        <Button
          variant="green"
          size="md"
          shape="pill"
          onClick={() => router.push("/share-ideas")}
        >
          Your Ideas
        </Button>

        {/* "Learn More" Button */}
        <Button
          variant="outline"
          size="md"
          shape="rounded"
          onClick={openQuiz} // Open Quiz Dialog
        >
          Take the Quiz
        </Button>
      </div>

      {/* About Us Dialog */}
      <Dialog isOpen={isDialogOpen} onClose={closeDialog}>
        <div className="p-6 bg-white rounded-lg max-w-md mx-auto text-center space-y-6">
          <h2 className="text-2xl text-black font-bold quicksand-bold">
            About Us
          </h2>
          <p className="text-gray-700 text-base quicksand-regular leading-relaxed">
            Welcome to our website! Here, you can find all the latest updates,
            behind-the-scenes content, and exciting news about MrBeast and his
            amazing team.
          </p>
          <div className="text-gray-800 quicksand-medium">
            <p>Wanna contribute here? Hit us up on Discord:</p>
            <p className="text-blue-600 font-bold text-lg mt-2">
              lithia777 <br /> iammannpreet
            </p>
          </div>
        </div>
      </Dialog>

      {/* Quiz Dialog */}
      <Dialog isOpen={isQuizOpen} onClose={closeQuiz}>
        <div className="p-4">
          <QuizGame /> {/* Render the QuizGame component here */}
        </div>
      </Dialog>

      {/* Join Now Dialog */}
      <Dialog isOpen={isJoinNowOpen} onClose={closeJoinNow}>
        <div className="p-6 bg-white rounded-lg max-w-md mx-auto text-center space-y-6">
          <h2 className="text-2xl text-black font-bold quicksand-bold">
            Join Our Community!
          </h2>
          <p className="text-gray-700 text-base quicksand-regular leading-relaxed">
            Subscribe to our newsletter for the latest updates about MrBeast and
            his team, or connect with us on Discord to be part of our amazing
            community.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Subscription submitted!");
              closeJoinNow();
            }}
            className="space-y-4"
          >
            <input
              type="email"
              placeholder="Your email"
              required
              className="w-full border border-gray-300 p-2 rounded text-black"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Subscribe
            </button>
          </form>
          <div className="mt-4">
            <p className="text-gray-800 quicksand-medium">
              Join us on Discord:
            </p>
            <p className="text-blue-600 font-bold text-lg mt-2">
              <a href="https://discord.gg/kh47QcXN">Join here</a>
            </p>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
