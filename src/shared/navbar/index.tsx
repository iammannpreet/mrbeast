"use client";

import { useState } from "react";
import Dialog from "../ui/Dialog";
import { Button } from "../ui/Button";
import QuizGame from "../quizgame";

export default function Navbar() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  const openQuiz = () => setIsQuizOpen(true);
  const closeQuiz = () => setIsQuizOpen(false);

  return (
    <div className="flex flex-col items-center py-4 shadow-md w-full">
      <div className="flex flex-col sm:flex-row max-w-5xl w-full justify-around items-center gap-4 sm:gap-8">
        {/* "Who Are We?" Button */}
        <Button variant="blue" size="md" shape="rounded" onClick={openDialog}>
          Who Are We?
        </Button>

        {/* "Join Now" Button */}
        <Button
          variant="red"
          size="md"
          shape="pill"
          onClick={() => alert("Join Now Clicked")}
        >
          Join Now
        </Button>

        {/* "Learn More" Button */}
        <Button
          variant="outline"
          size="md"
          shape="rounded"
          onClick={openQuiz} // Open Quiz Dialog
        >
          Learn More
        </Button>
      </div>

      <Dialog isOpen={isDialogOpen} onClose={closeDialog}>
        <div className="p-6 bg-white rounded-lg  max-w-md mx-auto text-center space-y-6">
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
    </div>
  );
}
