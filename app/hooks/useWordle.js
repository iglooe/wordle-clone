"use client";

import { useState } from "react";
import { toast } from "sonner";

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState(Array(6).fill(null)); // each guess is an array
  const [history, setHistory] = useState([]); // each guess is a string
  const [isCorrect, setIsCorrect] = useState(false);
  const [usedKeys, setUsedKeys] = useState({});

  // Format guess into an array of letter objects with color
  // e.g. [{key: 'a', color: 'yellow'}]
  const formatGuess = () => {
    const solutionArray = [...solution];
    return [...currentGuess]
      .map((letter, index) => {
        if (letter === solutionArray[index]) {
          solutionArray[index] = null;
          return { key: letter, color: "green" };
        }
        return { key: letter, color: "gray" };
      })
      .map((letter) => {
        if (letter.color === "gray" && solutionArray.includes(letter.key)) {
          solutionArray[solutionArray.indexOf(letter.key)] = null;
          return { ...letter, color: "yellow" };
        }
        return letter;
      });
  };

  // add new guess and update game state
  const addNewGuess = (formattedGuess) => {
    if (currentGuess === solution) {
      setIsCorrect(true);
      toast.success("You won!");
    }

    setGuesses((prev) => {
      const newGuesses = [...prev];
      newGuesses[turn] = formattedGuess;
      return newGuesses;
    });
    setHistory((prev) => [...prev, currentGuess]);
    setTurn((n) => n + 1);
    setCurrentGuess("");

    // update used keys
    setUsedKeys((prev) => {
      const newKeys = { ...prev };
      formattedGuess.forEach(({ key, color }) => {
        const currentColor = newKeys[key];
        if (
          color === "green" ||
          (color === "yellow" && currentColor !== "green") ||
          (!currentColor && color === "gray")
        ) {
          newKeys[key] = color;
        }
      });
      return newKeys;
    });
  };

  // handle keyup event for game input
  const handleKeyUp = ({ key }) => {
    if (/^[A-Za-z]$/.test(key) && currentGuess.length < 5) {
      setCurrentGuess((prev) => prev + key);
    } else if (key === "Backspace") {
      setCurrentGuess((prev) => prev.slice(0, -1));
    } else if (key === "Enter") {
      if (history.includes(currentGuess)) {
        toast.error("You already guessed that!");
      } else if (currentGuess.length !== 5) {
        toast.error("Guess must be 5 letters!");
      } else {
        addNewGuess(formatGuess());
      }
    }
  };

  return { turn, currentGuess, guesses, isCorrect, handleKeyUp, usedKeys };
};

export default useWordle;
