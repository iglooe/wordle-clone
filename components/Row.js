import React from "react";

export default function Row({ guess, currentGuess }) {
  if (guess) {
    return (
      <div className="flex justify-center text-center">
        <div className="flex flex-row row">
          {guess.map((letter, index) => {
            return (
              <div
                className={`${letter.color} dark:text-white block items-center pt-3 w-[60px] h-[60px] md:w-[72px] md:h-[72px] border border-zinc-500 m-2 text-center uppercase font-semibold text-4xl md:text-5xl text-zinc-950/75`}
                key={index}
              >
                {letter.key}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  if (currentGuess) {
    let letters = currentGuess.split("");

    return (
      <div className="flex justify-center text-center">
        {letters.map((letter, index) => (
          <div
            key={index}
            className="bg-zinc-100/20 dark:bg-zinc-400/20 dark:text-white block items-center pt-2 md:pt-3 w-[60px] h-[60px] md:w-[72px] md:h-[72px] border border-zinc-500 m-2 text-center uppercase font-semibold text-4xl md:text-5xl text-zinc-700"
          >
            {letter}
          </div>
        ))}
        {/*
            Needed for current guess to have empty squares
            to map to
        */}
        {[...Array(5 - letters.length)].map((_, index) => (
          <div
            className="block w-[60px] h-[60px] md:w-[72px] md:h-[72px] border border-zinc-500/45 m-2 text-center uppercase bold text-4xl md:text-5xl"
            key={index}
          ></div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex justify-center text-center">
      <div className="block w-[60px] h-[60px] md:w-[72px] md:h-[72px] border border-zinc-500/45 m-2 text-center uppercase bold text-5xl"></div>
      <div className="block w-[60px] h-[60px] md:w-[72px] md:h-[72px] border border-zinc-500/45 m-2 text-center uppercase bold text-5xl"></div>
      <div className="block w-[60px] h-[60px] md:w-[72px] md:h-[72px] border border-zinc-500/45 m-2 text-center uppercase bold text-5xl"></div>
      <div className="block w-[60px] h-[60px] md:w-[72px] md:h-[72px] border border-zinc-500/45 m-2 text-center uppercase bold text-5xl"></div>
      <div className="block w-[60px] h-[60px] md:w-[72px] md:h-[72px] border border-zinc-500/45 m-2 text-center uppercase bold text-5xl"></div>
    </div>
  );
}
