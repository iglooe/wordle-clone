import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getRandomSolution(solutions) {
  return solutions[Math.floor(Math.random() * solutions.length)].word;
}

export function ShowSolution({ solution }) {
  if (process.env.NODE_ENV === "production") return null;

  if (!solution) return null;
  return (
    <div className="w-full flex justify-center">
      <div className="">
        solution: <span className="font-bold uppercase">{solution}</span>
      </div>
    </div>
  );
}
