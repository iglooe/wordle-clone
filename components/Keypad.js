import React from "react";
import { Button } from "./ui/button";

export default function Keypad({ usedKeys, handleKeyUp }) {
  const QWERTY = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "⌫"],
  ];

  const getKeyColor = (key) => {
    if (key === "ENTER" || key === "⌫") return "";
    const color = usedKeys[key.toLowerCase()];
    switch (color) {
      case "green":
        return "bg-green-500 text-white border-green-500";
      case "yellow":
        return "bg-yellow-500 text-white border-yellow-500";
      case "gray":
        return "bg-gray-500 text-white border-gray-500";
      default:
        return "";
    }
  };

  const handleKeyboardButtonClick = (key) => {
    if (typeof handleKeyUp !== "function") {
      console.error("handleKeyUp is not a function");
      return;
    }
    let keyEvent;
    if (key === "ENTER") {
      keyEvent = { key: "Enter" };
    } else if (key === "⌫") {
      keyEvent = { key: "Backspace" };
    } else {
      keyEvent = { key: key.toLowerCase() };
    }
    handleKeyUp(keyEvent);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
        {QWERTY.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-wrap justify-center mb-2">
            {row.map((key) => (
              <Button
                key={key}
                variant="outline"
                className={`m-0.5 text-base sm:text-lg md:text-xl font-semibold
                  ${
                    key === "ENTER" || key === "⌫"
                      ? "px-2 sm:px-3 md:px-4 py-4 sm:py-5 md:py-6"
                      : "w-8 h-12 sm:w-10 sm:h-14 md:w-12 md:h-16 lg:w-14 lg:h-18"
                  }
                  
                 ${getKeyColor(key)}`}
                onClick={() => handleKeyboardButtonClick(key)}
              >
                {key}
              </Button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
