"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import Wordle from "@/components/Wordle";
import { getRandomSolution, ShowSolution } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { EmptyGrid } from "./Grid";
import { Shell } from "./ui/shell";
import Timer from "./Timer";

export default function Game() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const handleStartGame = () => {
    setIsGameStarted(true);
    refetch();
  };

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["wordle"],
    queryFn: () =>
      axios
        .get("https://iglooe.github.io/wordle-json/db.json")
        .then((res) => res.data),
    enabled: false,
  });

  const solution = data ? getRandomSolution(data.solutions) : null;

  if (isLoading) return <EmptyGrid />;
  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <Shell variant="centered">
        {!isGameStarted ? (
          <>
            <EmptyGrid />
            <Button
              size="lg"
              className="text-xl uppercase"
              onClick={handleStartGame}
            >
              Start
            </Button>
          </>
        ) : (
          <>
            <ShowSolution solution={solution} />
            {solution && (
              <>
                <Timer />
                <Wordle solution={solution} onWin={() => setIsWinner(true)} />
              </>
            )}
          </>
        )}
      </Shell>
    </>
  );
}
