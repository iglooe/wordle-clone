"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import Wordle from "@/components/Wordle";
import { getRandomSolution, ShowSolution } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { EmptyGrid } from "./Grid";

export default function Game() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["wordle"],
    queryFn: () =>
      axios
        .get("https://iglooe.github.io/wordle-json/db.json")
        .then((res) => res.data),
    enabled: false,
  });

  const solution = data ? getRandomSolution(data.solutions) : null;

  const handleStartGame = () => {
    setIsGameStarted(true);
    refetch();
  };

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      {!isGameStarted ? (
        <div className="flex justify-center flex-col">
          <EmptyGrid />
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              size="lg"
              className="text-xl uppercase"
              onClick={handleStartGame}
            >
              Start
            </Button>
          </div>
        </div>
      ) : (
        <>
          <ShowSolution solution={solution} />
          {solution && <Wordle solution={solution} />}
        </>
      )}
    </>
  );
}
