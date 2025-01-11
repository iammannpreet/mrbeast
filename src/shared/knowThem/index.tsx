"use client";
import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
} from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function KnowThem() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  // ✅ Memoize the cards array to prevent re-creation on each render
  const cards = useMemo(
    () => [
      {
        id: 1,
        image: "/images/chandler.webp",
        title: "Chandler",
        facts: [
          "Chandler started as a janitor for MrBeast.",
          "He is terrible at food challenges!",
          "Chandler once said he’s afraid of pickles.",
        ],
      },
      {
        id: 2,
        image: "/images/jimm.webp",
        title: "Jimmy (MrBeast)",
        facts: [
          "Jimmy started YouTube at 13 years old.",
          "He co-founded Team Trees and Team Seas.",
          "Jimmy has donated over $100 million in giveaways.",
        ],
      },
      {
        id: 3,
        image: "/images/karl.jpeg",
        title: "Karl",
        facts: [
          "Karl was originally a cameraman for MrBeast.",
          "He streams Minecraft on Twitch.",
          "Karl loves storytelling and comics.",
        ],
      },
      {
        id: 4,
        image: "/images/kris.webp",
        title: "Ava Kris",
        facts: [
          "Ava Kris was part of MrBeast's first viral videos.",
          "She recently came out as transgender.",
          "Kris loves participating in wild challenges.",
        ],
      },
    ],
    []
  ); // ✅ Empty dependency array ensures this is created only once

  const [randomFacts, setRandomFacts] = useState<string[]>([]);

  // ✅ Memoize generateRandomFacts to avoid infinite loop
  const generateRandomFacts = useCallback(() => {
    const selectedFacts = cards.map((card) => {
      const randomIndex = Math.floor(Math.random() * card.facts.length);
      return card.facts[randomIndex];
    });
    setRandomFacts(selectedFacts);
  }, [cards]);

  useEffect(() => {
    gsap.from(headingRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(paragraphRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      ease: "power3.out",
    });

    generateRandomFacts();
  }, [generateRandomFacts]);

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-8 text-center">
      {/* Header Section */}
      <div className="md:hidden mt-8 items-center flex flex-col justify-center">
        <h1 ref={headingRef} className="text-3xl font-semibold text-black">
          Mr Beast Games
        </h1>
        <p ref={paragraphRef} className="mt-4 text-gray-700">
          MrBeast is a YouTuber known for his expensive stunts and philanthropy.
          His high-quality content and generosity have made him a role model for
          millions around the world.
        </p>
      </div>

      {/* Swiper Carousel Section */}
      <div className="max-w-5xl mx-auto mt-8">
        <h2 className="text-2xl font-medium text-black mb-6">
          Random Facts About These Guys
        </h2>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
          loop={true}
          speed={800}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          onSlideChange={(swiper) => {
            if (swiper.isEnd) {
              generateRandomFacts(); // ✅ Trigger only when the loop ends
            }
          }}
        >
          {cards.map((card, index) => (
            <SwiperSlide key={card.id}>
              <div className="w-full bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={300}
                  height={200}
                  className="w-full h-80 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-gray-600">
                    {randomFacts[index] || "Loading..."}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default KnowThem;
