import React, { useEffect } from "react";

import Grid from "@/components/Grid";
import useWordle from "@/app/hooks/useWordle";
import Keypad from "@/components/Keypad";

export default function Wordle({ solution }) {
  const { currentGuess, handleKeyUp, guesses, turn, usedKeys } =
    useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp]);

  return (
    <>
      <Grid currentGuess={currentGuess} turn={turn} guesses={guesses} />
      <Keypad usedKeys={usedKeys} />
    </>
  );
}
