export default function WordleGrid({ currentGuess, turn, guesses }) {
  const emptyCell = (
    <div className="block w-[60px] h-[60px] md:w-[72px] md:h-[72px] border border-zinc-500/45 m-2 text-center uppercase bold text-5xl"></div>
  );

  const renderCell = (content, color, colIndex) => (
    <div
      className={`${color} dark:text-white block items-center pt-3 w-[60px] h-[60px] md:w-[72px] md:h-[72px] border border-zinc-500 m-2 text-center uppercase font-semibold text-4xl md:text-5xl ${
        color ? "text-zinc-950/75" : "text-zinc-700"
      } animate-wiggle`}
      style={{ animationDelay: `${colIndex * 0.1}s` }}
    >
      {content}
    </div>
  );

  return (
    <div className="pt-4">
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
