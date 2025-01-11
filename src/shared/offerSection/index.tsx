"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import KnowThem from "../knowThem"; //
import Merch from "../merch";
import BingoCard1 from "../bingo";
import ShareIdeasPage from "../shareIdeaPage";
function Offer() {
  const offerRef = useRef<HTMLDivElement>(null);

  // GSAP Animations
  useEffect(() => {
    gsap.fromTo(
      offerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <div ref={offerRef} className="max-w-7xl mx-auto px-8 py-12">
      {/* Header */}
      <h2 className="text-4xl font-bold text-center text-black mb-8">
        Discover Everything We Offer
      </h2>

      {/* Random Facts Carousel */}
      <section className="mb-16">
        <h3 className="text-2xl font-semibold text-blue-600 mb-4 text-center">
          Meet the MrBeast Team - Fun Facts!
        </h3>
        <KnowThem />
      </section>

      {/* Merch Carousel */}
      <section className="mb-16">
        <h3 className="text-2xl font-semibold text-blue-500 mb-4 text-center">
          Explore Our Latest Merchandise!
        </h3>
        <Merch />
      </section>
    </div>
  );
}

export default Offer;
