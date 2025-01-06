"use client";
import {Button} from "./button";

interface ScrollButtonProps {
  text: string;
  elementId: string;
}

const ScrollButton = ({ text, elementId }: ScrollButtonProps) => {
  return (
    <Button
      onClick={() => {
        const element = document.getElementById(elementId)!;
        element.scrollIntoView({ behavior: "smooth" });
      }}
    >
      {text}
    </Button>
  );
};

export default ScrollButton;
