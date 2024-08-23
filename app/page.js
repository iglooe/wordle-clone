"use client";

import { useEffect, useState } from "react";
import { Toaster } from "sonner";

import Wordle from "@/components/Wordle";
import MainNav from "@/components/MainNav";

export default function Home() {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    fetch("https://iglooe.github.io/wordle-json/db.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // Access the solutions array
        const solutions = data.solutions;
        // Get a random solution from the array
        const randomSolution =
          solutions[Math.floor(Math.random() * solutions.length)];
        setSolution(randomSolution.word);
      });
  }, []);

  return (
    <>
      <MainNav />
      <Toaster position="top-center" richColors />
      <div className="p-4">{solution && <Wordle solution={solution} />}</div>
    </>
  );
}
