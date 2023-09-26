import React from "react";

import Row from "@/app/components/Row";

export default function Grid({ currentGuess, turn, guesses }) {
  return (
    <div>
      {guesses.map((guess, index) => {
        if (turn === index) {
          return <Row key={index} currentGuess={currentGuess} />;
        }
        return <Row key={index} guess={guess} />;
      })}
    </div>
  );
}
