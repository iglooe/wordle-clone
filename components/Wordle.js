import React, { useEffect } from "react";
import { RefreshCcw } from "lucide-react";

import WordleGrid from "@/components/Grid";
import useWordle from "@/app/hooks/useWordle";
import Keypad from "@/components/Keypad";
import { Button } from "@/components/ui/button";

export default function Wordle({ solution }) {
  const { currentGuess, handleKeyUp, guesses, turn, usedKeys, isCorrect } =
    useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp]);

  return (
    <>
      <WordleGrid currentGuess={currentGuess} turn={turn} guesses={guesses} />
      <Keypad usedKeys={usedKeys} handleKeyUp={handleKeyUp} />
      {(turn > 5 || isCorrect) && (
        <GameOver solution={solution} isWinner={isCorrect} />
      )}
    </>
  );
}

function GameOver({ solution, isWinner }) {
  return (
    <div className="grid min-h-full place-items-center">
      <div className="text-center">
        {isWinner ? (
          <p className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Congratulations! You guessed the word:
          </p>
        ) : (
          <p className="scroll-m-20 text-2xl font-semibold tracking-tight">
            The word was:
          </p>
        )}
        <h1 className="mt-4 text-3xl font-medium tracking-wide text-primary sm:text-5xl">
          <span className="uppercase text-bold">{solution}</span>
        </h1>
        <p className="mt-6 text-base leading-7 text-muted-foreground">
          Click button or hit <kbd>Cmd/Ctrl + R</kbd> to play again.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button
            onClick={() => {
              window.location.reload();
            }}
          >
            <RefreshCcw className="mr-2 h-4 w-4" />
            Refresh here
          </Button>
        </div>
      </div>
    </div>
  );
}
