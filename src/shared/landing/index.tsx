"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

function Landing() {
  // Create refs for elements you want to animate
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline();

    // Logo animation
    timeline.from(logoRef.current, {
      duration: 1,
      opacity: 0,
      x: -50,
      ease: "power2.out",
    });

    // Text animation
    timeline.from(
      textRef.current,
      {
        duration: 1,
        opacity: 0,
        y: 20,
        ease: "power2.out",
        stagger: 0.4,
      },
      "-=0.5"
    );

    // Button animation
    timeline.from(buttonRef.current, {
      duration: 1,
      opacity: 0,
      scale: 0.8,
      ease: "elastic.out(1, 0.5)",
    });
  }, []);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center text-center mt-8 lg:gap-[16rem]">
      {/* Logo Section */}
      <Image
        ref={logoRef}
        src="/mrbeast.webp"
        alt="MrBeast Logo"
        width={200}
        height={200}
        className="rounded-full"
      />
      <div className="flex flex-col items-center">
        <h1
          ref={textRef}
          className="text-4xl font-bold text-white mt-6"
        >
          Welcome to MrBeast Fan Games
        </h1>
        <div className="max-w-[400px]">
          <p
            ref={textRef}
            className="text-lg text-white mt-4"
          >
            Think you’ve got what it takes? Dive into epic challenges, make
            predictions, and prove you're the ultimate MrBeast fan.
          </p>
        </div>
        <button
          ref={buttonRef}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full shadow-lg mt-4"
        >
          <a href="https://discord.gg/C5dTyfnt8R" target="__blank">
            Join our Discord Server!
          </a>
        </button>
      </div>
    </div>
  );
}

export default Landing;
