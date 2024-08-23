import { Toaster } from "sonner";

import MainNav from "@/components/MainNav";
import Game from "@/components/Game";

export default function Home() {
  return (
    <>
      <MainNav />
      <Toaster position="top-center" richColors />
      <Game />
    </>
  );
}
