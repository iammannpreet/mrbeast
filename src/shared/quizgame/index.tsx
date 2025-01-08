"use client";

import { useState } from "react";
import Dialog from "../ui/Dialog";

export default function QuizGameDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({});
  const [email, setEmail] = useState("");
  const [result, setResult] = useState("");

  const handleAnswer = (questionIndex: number, selectedOption: string) => {
    const selectedCharacter = questions[questionIndex].options[selectedOption];
    setAnswers((prev) => ({
      ...prev,
      [questions[questionIndex].question]: selectedCharacter,
    }));
    setStep((prev) => prev + 1);
  };

  const handleEmailSubmit = () => {
    const resultCharacter = calculateResult(answers);
    setResult(resultCharacter);

    // Save email and result to database
    fetch("/api/saveResult", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, answers, result: resultCharacter }),
    });
  };

  const calculateResult = (answers: Record<string, string>) => {
    const characterScores: Record<string, number> = {};

    Object.values(answers).forEach((character) => {
      if (character) {
        characterScores[character] = (characterScores[character] || 0) + 1;
      }
    });

    return Object.keys(characterScores).reduce((a, b) =>
      characterScores[a] > characterScores[b] ? a : b
    );
  };

  type Question = {
    question: string;
    options: Record<string, string>;
  };
  const questions: Question[] = [
    {
      question: "Which type of challenge excites you the most?",
      options: {
        "24-hour survival": "Jimmy",
        "Food eating contest": "Chandler",
        "Speed building": "Chris",
        "Hidden treasure hunt": "Karl",
      },
    },
    {
      question: "If you had unlimited resources, what would you create?",
      options: {
        "A theme park": "Jimmy",
        "A massive charity event": "Jimmy",
        "A luxury mansion": "Chandler",
        "A high-tech lab": "Chris",
      },
    },
    {
      question: "What’s your dream vacation destination?",
      options: {
        "A tropical island": "Jimmy",
        "A snowy mountain retreat": "Chris",
        "A bustling city": "Karl",
        "A remote jungle": "Chandler",
      },
    },
    {
      question: "What’s your go-to comfort food?",
      options: {
        Pizza: "Chandler",
        "Ice cream": "Jimmy",
        Burgers: "Chris",
        Tacos: "Karl",
      },
    },
    {
      question: "What kind of videos do you enjoy watching?",
      options: {
        "Epic challenges": "Jimmy",
        "Funny pranks": "Chandler",
        "Heartwarming stories": "Chris",
        "Educational content": "Karl",
      },
    },
    {
      question: "How would your friends describe you?",
      options: {
        Adventurous: "Jimmy",
        Generous: "Chris",
        Creative: "Karl",
        Funny: "Chandler",
      },
    },
    {
      question: "What’s your favorite color?",
      options: {
        Blue: "Jimmy",
        Green: "Chris",
        Orange: "Karl",
        Red: "Chandler",
      },
    },
    {
      question: "Which activity would you enjoy the most?",
      options: {
        "Hosting a big event": "Jimmy",
        "Playing video games": "Karl",
        "Building something cool": "Chris",
        "Relaxing on the couch": "Chandler",
      },
    },
    {
      question: "What’s your favorite kind of pet?",
      options: {
        Dog: "Chandler",
        Cat: "Karl",
        Bird: "Chris",
        "Exotic animal": "Jimmy",
      },
    },
    {
      question: "Which phrase describes you best?",
      options: {
        "Dream big, act bigger": "Jimmy",
        "Chill and laid-back": "Chandler",
        "Always curious": "Karl",
        "Hardworking perfectionist": "Chris",
      },
    },
    {
      question: "What do you value most in a team?",
      options: {
        Leadership: "Jimmy",
        Loyalty: "Chandler",
        Creativity: "Karl",
        Dedication: "Chris",
      },
    },
    {
      question: "What’s your favorite way to spend the weekend?",
      options: {
        "Planning something epic": "Jimmy",
        "Relaxing and watching TV": "Chandler",
        "Exploring a new hobby": "Karl",
        "Fixing or building things": "Chris",
      },
    },
  ];

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setIsOpen(true)}
      >
        Start Quiz
      </button>

      <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {step <= questions.length ? (
          <div>
            <h2 className="text-2xl text-black font-bold mb-4">
              {questions[step - 1].question}
            </h2>
            <div className="flex flex-col space-y-3">
              {Object.keys(questions[step - 1].options).map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(step - 1, option)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ) : !result ? (
          <div>
            <h2 className="text-2xl text-black font-bold mb-4">
              Enter your email to see your result!
            </h2>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="border text-black border-gray-300 p-2 rounded w-full mb-4"
            />
            <button
              onClick={handleEmailSubmit}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Reveal My Character
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl text-black font-bold mb-4">
              You are {result}!
            </h2>
            <img
              src={`/images/${result.toLowerCase()}.jpg`}
              alt={result}
              className="w-full rounded"
            />
          </div>
        )}
      </Dialog>
    </div>
  );
}
