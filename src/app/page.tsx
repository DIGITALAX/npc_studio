"use client";
import useConfig from "@/components/game/hooks/useConfig";
import { RefObject } from "react";

function Home() {
  const { gameRef } = useConfig();

  return (
    <div
      ref={gameRef as RefObject<HTMLDivElement>}
      className="relative w-full h-full flex"
    />
  );
}

export default Home;
