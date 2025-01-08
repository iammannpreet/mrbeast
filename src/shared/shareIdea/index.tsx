"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import react-quill-new for client-side rendering
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import "react-quill-new/dist/quill.snow.css";

function MyComponent() {
  const [value, setValue] = useState("");

  return <ReactQuill theme="snow" value={value} onChange={setValue} />;
}

export default MyComponent;
