"use client";

import React from "react";

import Menu from "@/components/ui/menu";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/ui/mode-toggle";

export default function MainNav() {
  return (
    <>
      <div className="flex-col md:flex">
        <div className="flex items-center h-16 px-4">
          <div className="flex items-center mr-auto space-x-4">
            <Menu />
          </div>
          <h1 className="text-3xl font-bold">Birdle</h1>
          <div className="flex items-center ml-auto space-x-4">
            <ModeToggle />
          </div>
        </div>
      </div>
      <Separator />
    </>
  );
}
