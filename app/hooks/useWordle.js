"use client";

import { useState } from "react";
import { toast } from "sonner";

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([...Array(6)]); // each guess is an array
  const [history, setHistory] = useState(["ninja"]); // each guess is a string
  const [isCorrect, setIsCorrect] = useState(false);

  //format guess into an array of letter objects
  //e.g. [{key: 'a', color: 'yellow'}]
  const formatGuess = () => {
    let solutionArray = [...solution];
    let formattedGuess = [...currentGuess].map((letter) => {
      return { key: letter, color: "gray" };
    });

    // find green letters
    formattedGuess.forEach((letter, index) => {
      if (letter.key === solutionArray[index]) {
        formattedGuess[index].color = "green";
        solutionArray[index] = null;
      }
    });

    // find yellow letters
    formattedGuess.forEach((letter, index) => {
      if (solutionArray.includes(letter.key) && letter.color !== "green") {
        formattedGuess[index].color = "yellow";
        solutionArray[solutionArray.indexOf(letter.key)] = null;
      }
    });

    return formattedGuess;
  };

  // add new guess to the guesses state
  // update the icCorrect state if the guess is correct
  // add one to the turn state
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
  };

  //handle keyup even & track current guess
  // if user presses enter, add the new guess
  const handleKeyUp = ({ key }) => {
    const isLetter = /^[A-Za-z]$/;

    if (isLetter.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => prev + key);
      }
    }

    if (key === "Backspace") {
      setCurrentGuess((prev) => prev.slice(0, -1));
    }

    if (key === "Enter") {
      // no turns past 5
      if (turn > 5) {
        toast("Refresh to play again!");
        return;
      }

      // do not allow duplicate guesses
      if (history.includes(currentGuess)) {
        toast.error("You already guessed that!");
        return;
      }

      // do not allow guesses that are not 5 letters
      if (currentGuess.length !== 5) {
        toast.error("Guess must be 5 letters!");
        return;
      }

      const formatted = formatGuess();
      addNewGuess(formatted);
    }
  };

  return { turn, currentGuess, guesses, isCorrect, handleKeyUp };
};

export default useWordle;
