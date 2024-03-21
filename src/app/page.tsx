"use client";
import Log from "@/components/game/modules/Log";
import dynamic from "next/dynamic";
const DynamicComponentWithNoSSR = dynamic(
  () => import("@/components/game/modules/Studio"),
  { ssr: false }
);

function Home() {
  return (
    <div className="relative w-full h-full min-w-screen flex items-center justify-center">
      <div className="relative w-full h-5/6 flex items-center justify-center flex-row gap-6">
        <Log />
        <div className="relative w-5/6 h-full border-cielo border-8 flex overflow-hidden rounded-md bg-cielo">
          <DynamicComponentWithNoSSR />
        </div>
      </div>
    </div>
  );
}

export default Home;
