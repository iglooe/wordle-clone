import React from "react";

import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Github } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  );
}

export default function Menu() {
  return (
    <Popover>
      <PopoverTrigger className="p-2 hover:border hover:rounded-full">
        <MenuIcon />
      </PopoverTrigger>
      <PopoverContent>
        <div className="text-2xl font-bold text-current cursor-default selection:text-black dark:selection:text-white selection:bg-lime-500">
          About
        </div>
        <div className="pt-4 text-sm">
          <Separator />
          <div className="pt-2 pb-3 selection:bg-lime-500">
            <p className="pb-2 tracking-tightest">
              <span className="font-bold">Birdle</span> is an open-source Wordle
              clone made with everything new in{" "}
              <Link
                className="font-bold transition-colors cursor-pointer hover:underline hover:text-foreground"
                href="https://nextjs.org/"
                target="_blank"
                rel="noreferrer"
              >
                Next.JS 13
              </Link>
              .
            </p>
            <p className="tracking-tightest">
              Join me in the world of words, challenge your vocabulary, and have
              fun guessing the hidden word in my take on the classic game
              Wordle!
            </p>
          </div>
          {/* <Separator className="mb-2" /> */}
          <div className="text-2xl font-bold text-current cursor-default selection:bg-lime-500 selection:text-black dark:selection:text-white">
            Tech Stack Used
          </div>
          <div className="pt-4">
            <Separator />
            <div className="pt-4 pl-4 selection:bg-lime-500">
              <ul className="list-disc">
                <li className="pb-1">
                  <Link
                    className="font-bold transition-colors cursor-pointer hover:underline hover:text-foreground"
                    href="https://nextjs.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Next.JS 13
                  </Link>
                  <span className="pl-1 text-sm text-muted-foreground selection:text-black">
                    - framework
                  </span>
                </li>
                <li className="pb-1">
                  <Link
                    className="font-bold transition-colors cursor-pointer hover:underline hover:text-foreground"
                    href="https://tailwindcss.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    TailwindCSS
                  </Link>
                  <span className="pl-1 text-sm text-muted-foreground selection:text-black">
                    {" "}
                    - styling
                  </span>
                </li>
                <li className="pb-1">
                  <Link
                    className="font-bold transition-colors cursor-pointer hover:underline hover:text-foreground"
                    href="https://ui.shadcn.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    shadcn/ui
                  </Link>
                  <span className="pl-1 text-sm text-muted-foreground selection:text-black">
                    {" "}
                    - UI components
                  </span>
                </li>
                <li className="pb-1">
                  <Link
                    className="font-bold transition-colors cursor-pointer hover:underline hover:text-foreground"
                    href="https://sonner.emilkowal.ski/https://tailwindcss.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Sonner
                  </Link>
                  <span className="pl-1 text-sm text-muted-foreground selection:text-black">
                    - toast notifications
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="mt-2" />
          <div className="flex items-center pt-1 text-sm leading-loose text-left text-muted-foreground selection-text-black dark:selection:text-white selection:bg-lime-500">
            Built by{" "}
            <Link
              href="https://github.com/iglooe"
              target="_blank"
              rel="noreferrer"
              className="ml-1 font-semibold transition-colors hover:underline dark:text-amber-500 text-amber-600 selection:text-black hover:text-foreground"
            >
              Derek<span className="sr-only">Github</span>
            </Link>
            .
            <div className="flex ml-auto">
              <Link
                href="https://github.com/iglooe/wordle-clone"
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                    size: "icon",
                  })
                )}
              >
                <Github className="inline-block w-6 h-6 text-right" />
                <span className="sr-only"></span>
              </Link>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
