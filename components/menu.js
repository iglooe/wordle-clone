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
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-menu"
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
        <Link href="/about" className="font-2xl hover:underline">
          About
        </Link>
        <div className="pt-4 text-sm">
          <Separator />
          <div className="flex mt-4 leading-loose text-left txt-sm text-muted-foreground">
            Built by{" "}
            <Link
              href="https://github.com/iglooe"
              target="_blank"
              rel="noreferrer"
              className="font-semibold transition-colors hover:underline hover:text-foreground"
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
              </Link>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
