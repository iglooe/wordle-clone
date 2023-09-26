import React, { useEffect, useState } from "react";

export default function Keypad({ usedKeys }) {
  const [letters, setLetters] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/letters")
      .then((res) => res.json())
      .then((json) => {
        setLetters(json);
      });
  }, []);

  const rowLengths = [10, 9, 9];
  const rows = letters ? chunkArray(letters, rowLengths) : [];

  function chunkArray(arr, chunkLengths) {
    const chunkedArray = [];
    let currentIndex = 0;

    chunkLengths.forEach((chunkLength) => {
      const row = arr.slice(currentIndex, currentIndex + chunkLength);
      chunkedArray.push(row);
      currentIndex += chunkLength;
    });

    return chunkedArray;
  }

  console.log(usedKeys);

  return (
    <div className="flex flex-col items-center mt-12 space-y-4">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex items-center gap-3 keypad">
          {row.map((letter) => {
            const color = usedKeys[letter.key];
            console.log(color);
            return (
              <div
                className={`${color} flex items-center justify-center w-8 h-10 text-lg font-semibold border rounded-md cursor-pointer hover:bg-gray-200`}
                key={letter.key}
              >
                {letter.key}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
