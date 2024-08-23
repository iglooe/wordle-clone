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
        const solutions = data.solutions;
        const randomSolution =
          solutions[Math.floor(Math.random() * solutions.length)];
        setSolution(randomSolution.word);
      });
  }, []);

  return (
    <>
      <MainNav />
      <Toaster position="top-center" richColors />
      <ShowSolution solution={solution} />
      {solution && <Wordle solution={solution} />}
    </>
  );
}

function ShowSolution({ solution }) {
  if (process.env.NODE_ENV === "production") return null;

  return (
    <div className="w-full flex justify-center pt-4">
      <div className="">
        solution: <span className="font-bold uppercase">{solution}</span>
      </div>
    </div>
  );
}
