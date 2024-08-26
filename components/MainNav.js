"use client";

import React from "react";

import Menu from "@/components/ui/menu";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Shell } from "@/components/ui/shell";

export default function MainNav() {
  return (
    <>
      <div className="grid items-center gap-8 container max-w-3xl">
        <div className="flex-col md:flex">
          <div className="flex items-center h-16 px-4">
            <div className="flex mr-auto space-x-4 items-center">
              <Menu />
            </div>
            <h1 className="text-3xl font-bold">Birdle</h1>
            <div className="flex items-center ml-auto space-x-4">
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
      <Separator />
    </>
  );
}
