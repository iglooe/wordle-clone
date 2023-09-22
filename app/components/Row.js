import React from "react";

export default function Row({ guess }) {
  if (guess) {
    return (
      <div className="flex justify-center text-center">
        <div className="flex flex-row">
          {guess.map((letter, i) => {
            return (
              <div
                className={`${letter.color} block items-center pt-1 w-[60px] h-[60px] border border-slate-500 m-2 text-center uppercase font-semibold text-5xl text-black`}
                key={i}
              >
                {letter.key}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center text-center">
      <div className="block w-[60px] h-[60px] border border-slate-500 m-2 text-center uppercase bold text-5xl"></div>
      <div className="block w-[60px] h-[60px] border border-slate-500 m-2 text-center uppercase bold text-5xl"></div>
      <div className="block w-[60px] h-[60px] border border-slate-500 m-2 text-center uppercase bold text-5xl"></div>
      <div className="block w-[60px] h-[60px] border border-slate-500 m-2 text-center uppercase bold text-5xl"></div>
      <div className="block w-[60px] h-[60px] border border-slate-500 m-2 text-center uppercase bold text-5xl"></div>
    </div>
  );
}
