"use client";

import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { gsap } from "gsap";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const merchItems = [
  {
    id: 1,
    name: "MrBeast Hoodie",
    image: "/images/chandler.webp",
    price: "$49.99",
    link: "https://shopmrbeast.com",
  },
  {
    id: 2,
    name: "Feastables Chocolate",
    image: "/images/jimm.webp",
    price: "$19.99",
    link: "https://feastables.com",
  },
  {
    id: 3,
    name: "Beast T-Shirt",
    image: "/merch/tshirt.jpg",
    price: "$29.99",
    link: "https://shopmrbeast.com",
  },
  {
    id: 4,
    name: "Beast Hat",
    image: "/merch/hat.jpg",
    price: "$24.99",
    link: "https://shopmrbeast.com",
  },
  {
    id: 5,
    name: "Limited Edition Poster",
    image: "/merch/poster.jpg",
    price: "$14.99",
    link: "https://shopmrbeast.com",
  },
];

const Merch: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // GSAP Animation on Mount
  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <div
      ref={sectionRef}
      className="py-10 mt-8 bg-white rounded-lg bg-opacity-80 "
    >
      <h2 className="text-4xl font-bold text-center mb-6 text-blue-600">
        Get Your MrBeast Merch!
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-11/12 mx-auto"
      >
        {merchItems.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative group overflow-hidden rounded-xl shadow-lg bg-white p-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
              />
              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                {item.name}
              </h3>
              <p className="text-gray-600">{item.price}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
              >
                Shop Now
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Merch;
