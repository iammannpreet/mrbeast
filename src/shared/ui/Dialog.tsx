"use client";

import { ReactNode } from "react";

type DialogProps = {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
};

export default function Dialog({ isOpen, onClose, children }: DialogProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 shadow-lg max-w-md text-center">
        {children}
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
