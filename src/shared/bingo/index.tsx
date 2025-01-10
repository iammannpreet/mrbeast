"use client";

import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import Navbar from "../navbar";

const BingoCard1: React.FC = () => {
  const contentPool = [
    "Team Trees",
    "Squid Game",
    "$10,000 Giveaway",
    "Beast Burger",
    "Philanthropy",
    "24-Hour Challenge",
    "Feastables",
    "Chocolate Factory",
    "100 Million Subs",
    "Custom Tesla",
    "Hide and Seek",
    "Last to Leave",
    "Charity Donation",
    "Extreme Stunts",
    "Island Giveaway",
    "Gaming Channel",
    "Beast Reacts",
    "Limited Merch",
    "Surprise Guest",
    "1 Million Dollars",
    "Prank Video",
    "World Record",
    "MrBeast Team",
    "Beast Philanthropy",
  ];

  const generateRandomCard = () => {
    const shuffledContent = [...contentPool].sort(() => Math.random() - 0.5);
    const grid = Array(5)
      .fill(null)
      .map(() => Array(5).fill(null));

    let index = 0;
    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 5; col++) {
        if (row === 2 && col === 2) {
          grid[row][col] = "Free Space";
        } else {
          grid[row][col] = shuffledContent[index++];
        }
      }
    }
    return grid;
  };

  const [bingoGrid, setBingoGrid] = useState<string[][]>([]);

  useEffect(() => {
    setBingoGrid(generateRandomCard());
  }, []);

  const animateCard = () => {
    gsap.fromTo(
      ".bingo-cell",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.05 }
    );
  };

  const handleGenerateNewCard = () => {
    setBingoGrid(generateRandomCard());
    animateCard();
  };

  return (
    <div ref={animateCard} className="text-center font-sans">
      <Navbar />
      <h1 className="mt-4 text-3xl font-bold mb-6 text-blue-600">
        MrBeast Bingo Card
      </h1>
      <div className="cards p-8 grid grid-cols-5 gap-2 md:max-w-4xl max-w-2xl mx-auto print:max-w-full">
        {bingoGrid.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`bingo-cell flex items-center justify-center border border-gray-400 bg-white shadow-md rounded-md text-[7pt] md:text-base  md:w-32 md:h-32 w-16 h-16 p-2 text-center break-words ${
                rowIndex === 2 && colIndex === 2
                  ? "bg-yellow-300 font-bold"
                  : ""
              }`}
            >
              {cell}
            </div>
          ))
        )}
      </div>
      <div className="flex flex-col items-center mb-8">
        <button
          onClick={handleGenerateNewCard}
          className="max-w-[12rem] mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition"
        >
          Generate New Card
        </button>
        <button
          onClick={() => window.print()}
          className="max-w-[12rem] mt-4 px-6 py-2 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition"
        >
          Print Bingo Card
        </button>
      </div>
      <style jsx>{`
        @media print {
          .navbar,
          button {
            display: none;
          }
          .cards {
            margin-top: -10rem;
            margin-bottom: -10rem;
            width: 100%;
          }
          .bingo-cell {
            width: 1in;
            height: 1in;
            font-size: 10pt;
          }
          .grid {
            gap: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default BingoCard1;
