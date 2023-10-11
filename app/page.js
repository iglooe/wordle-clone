"use client";

import { useEffect, useState } from "react";
import { Toaster } from "sonner";

import Wordle from "@/components/Wordle";
import MainNav from "@/components/MainNav";

export default function Home() {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    fetch("https://busy-gold-antelope-wear.cyclic.app/solutions")
      .then((res) => res.json())
      .then((data) => {
        // random int between 0 and data.length
        const randomIndex = data[Math.floor(Math.random() * data.length)];
        setSolution(randomIndex.word);
      });
  }, [setSolution]);

  return (
    <>
      <MainNav />
      <Toaster position="top-center" richColors />
      <div className="p-4">{solution && <Wordle solution={solution} />}</div>
    </>
  );
}
