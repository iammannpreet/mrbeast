"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "../ui/Button";

function Landing() {
  // Create refs for elements you want to animate
  const logoWrapperRef = useRef(null);
  const textRefs = useRef<(HTMLHeadingElement | HTMLParagraphElement | null)[]>(
    []
  );

  const router = useRouter();
  const buttonRef = useRef(null);
  const buttonTextRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline();

    // Logo animation
    timeline.from(logoWrapperRef.current, {
      duration: 1,
      opacity: 0,
      x: -50,
      ease: "power2.out",
    });

    // Text animation (staggered for multiple refs)
    timeline.from(
      textRefs.current,
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
    // Flashing button text
    gsap.to(buttonTextRef.current, {
      opacity: 0.2,
      repeat: -1, // Infinite loop
      yoyo: true, // Reverse animation
      duration: 0.5, // Flashing speed
      ease: "power2.inOut",
    });
  }, []);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center text-center mt-8 lg:gap-[15rem]">
      {/* Logo Section */}
      <div ref={logoWrapperRef}>
        <Image
          src="/mrbeast.png"
          alt="MrBeast Logo"
          width={200}
          height={200}
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1
          ref={(el) => {
            textRefs.current[0] = el;
          }}
          className="text-4xl font-bold text-white mt-6"
        >
          Welcome to MrBeast Fan Games
        </h1>
        <div className="max-w-[400px]">
          <p
            ref={(el) => {
              textRefs.current[1] = el;
            }}
            className="text-lg text-white mt-4"
          >
            Think you’ve got what it takes? Dive into epic challenges, make
            predictions, and prove you're the ultimate MrBeast fan.
          </p>
        </div>
        <Button
          ref={buttonRef}
          variant="red"
          size="md"
          shape="pill"
          onClick={() => window.open("https://discord.gg/C5dTyfnt8R", "_blank")}
        >
          <span ref={buttonTextRef}>
            <b>Join the Challenge</b>
          </span>
        </Button>

        <div className="pt-4">
          <Button
            variant="green"
            size="md"
            shape="pill"
            onClick={() => router.push("/bingo-card")}
          >
            <b>Create Bingo!</b>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
