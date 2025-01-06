"use client";
import { useState } from "react";
import Dialog from "../ui/Dialog"; // Separate Dialog component

export default function Navbar() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col sm:flex-row max-w-48 sm:max-w-full justify-around gap-8">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg mt-4"
        >
          Join Now
        </button>
        <button
          className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full shadow-lg mt-4"
        >
          Learn More
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full shadow-lg mt-4"
          onClick={openDialog}
        >
          Who Are We?
        </button>
      </div>
      {/* Pass props to Dialog */}
      <Dialog isOpen={isDialogOpen} onClose={closeDialog} />
    </div>
  );
}
