import React from "react";

import Row from "@/app/components/Row";

export default function Grid({ currentGuess, turn, guesses }) {
  return (
    <div>
      {guesses.map((guess, i) => {
        return <Row key={i} />;
      })}
    </div>
  );
}
