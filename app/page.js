"use client";

import { useEffect, useState } from "react";

import { Toaster } from "sonner";
import Wordle from "@/app/components/Wordle";

export default function Home() {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/solutions")
      .then((res) => res.json())
      .then((data) => {
        // random int between 0 and data.length
        const randomIndex = data[Math.floor(Math.random() * data.length)];
        setSolution(randomIndex.word);
      });
  }, [setSolution]);

  return (
    <>
      <div className="flex items-center justify-center p-4">
        <h1 className="text-2xl font-extrabold">Wordle</h1>
      </div>
      <Toaster position="top-center" richColors />
      <div className="p-4 border-t border-slate-950/20">
        {solution && <Wordle solution={solution} />}
      </div>
    </>
  );
}
