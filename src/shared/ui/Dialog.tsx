"use client";

import { ReactNode } from "react";

type DialogProps = {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
};
export default function Dialog({ isOpen, onClose }: DialogProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 shadow-lg max-w-md text-center">
        <h2 className="text-2xl font-bold text-gray-800">Who Are We?</h2>
        <p className="text-gray-700 mt-4">
          We are a team of two developers who love watching MrBeast, dedicated
          to providing you with the latest updates on the show.
        </p>
        <p className="text-gray-700 mt-4">
          For those willing to contribute to this fan site, hit us up on
          Discord:
        </p>
        <p className="text-blue-500 font-bold mt-2">lithia777</p>
        <p className="text-blue-500 font-bold">iammannpreet</p>
        <button
          className="mt-6 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
