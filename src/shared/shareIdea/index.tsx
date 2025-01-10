"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import react-quill for client-side rendering
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import "react-quill-new/dist/quill.snow.css";

interface MyComponentProps {
  onSubmit: (idea: string) => void;
}

const MyComponent: React.FC<MyComponentProps> = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const plainText = value.replace(/<[^>]*>?/gm, ""); // Strip out HTML tags

    if (plainText.trim() === "") return;

    onSubmit(plainText); // Pass plain text instead of HTML
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        style={{
          height: "110px",
          marginBottom: "1rem",
          backgroundColor: "white",
        }}
      />
      <div className="flex justify-center mt-16 sm:mt-0">
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transform hover:scale-105 transition-transform duration-200 mt-16"
        >
          Submit Idea
        </button>
      </div>
    </form>
  );
};

export default MyComponent;
