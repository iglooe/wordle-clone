import React from "react";

export default function WordleGrid({ currentGuess, turn, guesses }) {
  const emptyCell = (
    <div className="block w-[60px] h-[60px] md:w-[72px] md:h-[72px] border border-zinc-500/60 dark:border-muted m-2 text-center uppercase bold text-5xl"></div>
  );

  const renderCell = (content, color, colIndex) => (
    <div
      className={`${color} dark:text-white block items-center pt-3 w-[60px] h-[60px] md:w-[72px] md:h-[72px] border border-zinc-950 m-2 text-center uppercase font-semibold text-4xl md:text-5xl ${
        color ? "text-zinc-950/75" : "text-zinc-700"
      } animate-wiggle`}
      style={{ animationDelay: `${colIndex * 0.1}s` }}
    >
      {content}
    </div>
  );

  return (
    <div>
      {guesses.map((guess, rowIndex) => (
        <div key={rowIndex} className="flex justify-center text-center">
          {turn === rowIndex ? (
            // Current guess row
            <>
              {currentGuess
                .split("")
                .map((letter, index) =>
                  renderCell(
                    letter,
                    "bg-zinc-100/20 dark:bg-zinc-400/20",
                    rowIndex,
                    index
                  )
                )}
              {[...Array(5 - currentGuess.length)].map((_, index) => emptyCell)}
            </>
          ) : guess ? (
            // Completed guess row
            guess.map((letter, index) =>
              renderCell(letter.key, letter.color, rowIndex, index)
            )
          ) : (
            // Empty row
            [...Array(5)].map((_, index) => emptyCell)
          )}
        </div>
      ))}
    </div>
  );
}

export function EmptyGrid() {
  const emptyCell = (
    <div className="max-w-2xl block w-[60px] h-[60px] md:w-[72px] md:h-[72px] border border-zinc-500/60 m-2 text-center uppercase bold text-5xl"></div>
  );

  return (
    <div className="pt-4">
      {[...Array(6)].map((_, rowIndex) => (
        <div key={rowIndex} className="flex justify-center text-center">
          {[...Array(5)].map((_, colIndex) => (
            <React.Fragment key={colIndex}>{emptyCell}</React.Fragment>
          ))}
        </div>
      ))}
    </div>
  );
}
