"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Autoplay, Pagination, Navigation } from "swiper/modules";


function KnowThem() {
  // Refs for animations
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  // Dummy data for carousel items
  const cards = [
    { id: 1, image: "/chandler.webp", title: "Chandler", description: "Brief description of Item 1." },
    { id: 2, image: "/jimm.webp", title: "Jimmy", description: "Brief description of Item 2." },
    { id: 3, image: "/karl.jpeg", title: "Karl", description: "Brief description of Item 3." },
    { id: 4, image: "/kris.webp", title: "Ava Kris", description: "Brief description of Item 4." },
  ];

  useEffect(() => {
    // Animate the main heading
    gsap.from(headingRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    // Animate the paragraph
    gsap.from(paragraphRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8 text-center">
      {/* Header Section */}
      <div className="mt-8 items-center flex flex-col justify-center">
        <h1 ref={headingRef} className="text-3xl font-semibold text-black">
          Mr Beast Games
        </h1>
        <p ref={paragraphRef} className="mt-4 text-gray-700">
          MrBeast is a YouTuber who is known for his expensive stunts and philanthropy.
          He has gained a massive following due to his high-quality content and his
          willingness to give back to his fans. MrBeast is known for his generosity and
          his willingness to help those in need. He has donated millions of dollars to
          charity and has helped countless people in need. MrBeast is a true inspiration
          and a role model for many people around the world.
        </p>
      </div>

      {/* Swiper Carousel Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-medium text-black mb-6">
          Random Facts About These Guys
        </h2>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30} // Space between slides
          slidesPerView={1} // Adjust based on responsiveness
          navigation={{ nextEl: '.custom-next',
            prevEl: '.custom-prev',}}
          loop={true}
          speed={800}
          autoplay={{ delay: 1500 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        > {cards.map((card) => (
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
                  <h3 className="text-lg font-bold text-gray-800">{card.title}</h3>
                  <p className="mt-2 text-gray-600">{card.description}</p>
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
