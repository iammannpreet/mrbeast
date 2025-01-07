"use client";
import { useState } from "react";
import Dialog from "../ui/Dialog";
import { Button } from "../ui/Button";

export default function Navbar() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  return (
    <div className="flex flex-col items-center py-4 bg-gray-100 shadow-md w-full">
      <div className="flex flex-col sm:flex-row max-w-5xl w-full justify-around items-center sm:gap-8">
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
          onClick={() => alert("Learn More Clicked")}
        >
          Learn More
        </Button>
      </div>

      {/* Dialog Component */}
      <Dialog isOpen={isDialogOpen} onClose={closeDialog}>
        <div className="p-4">
          <h2 className="text-xl font-semibold text-center mb-4">About Us</h2>
          <p className="text-gray-700 text-center">
            Welcome to our website! Here, you can find all the latest updates,
            behind-the-scenes content, and exciting news about MrBeast and his
            amazing team.
          </p>
          <div className="flex justify-center mt-4">
            <Button variant="blue" size="sm" onClick={closeDialog}>
              Close
            </Button>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
