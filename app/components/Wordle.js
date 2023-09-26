import React, { useEffect } from "react";

import Grid from "@/app/components/Grid";
import useWordle from "@/app/hooks/useWordle";

export default function Wordle({ solution }) {
  const { currentGuess, handleKeyUp, guesses, isCorrect, turn } =
    useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp]);

  useEffect(() => {
    console.log(guesses, turn, isCorrect);
  }, [guesses, turn, isCorrect]);

  return (
    <>
      <div>Solution: {solution}</div>
      <Grid currentGuess={currentGuess} turn={turn} guesses={guesses} />
    </>
  );
}
