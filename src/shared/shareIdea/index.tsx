"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import react-quill for client-side rendering
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import "react-quill-new/dist/quill.snow.css";

interface MyComponentProps {
  onSubmit: (name: string, idea: string) => void;
}

const MyComponent: React.FC<MyComponentProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const plainText = value.replace(/<[^>]*>?/gm, ""); // Remove HTML tags

    if (name.trim() === "" || plainText.trim() === "") return;

    onSubmit(name, plainText); // Submit both name and idea
    setName("");
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      {/* Input for User's Name */}
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Rich Text Editor for Idea */}
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        style={{
          height: "110px",
          marginBottom: "1rem",
          backgroundColor: "white",
        }}
        placeholder="Share your idea here..."
      />

      {/* Submit Button */}
      <div className="flex justify-center mt-4">
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transform hover:scale-105 transition-transform duration-200"
        >
          Submit Idea
        </button>
      </div>
    </form>
  );
};

export default MyComponent;
