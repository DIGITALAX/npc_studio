"use client";
import Log from "@/components/game/modules/Log";
import dynamic from "next/dynamic";
const DynamicComponentWithNoSSR = dynamic(
  () => import("@/components/game/modules/Studio"),
  { ssr: false }
);

function Home() {
  return (
    <div className="relative w-full h-full min-w-screen flex items-start justify-between p-6 flex-row gap-6">
      <Log />
      <div className="relative w-5/6 h-5/6 border-cielo border-8 flex overflow-hidden">
        <DynamicComponentWithNoSSR />
      </div>
    </div>
  );
}

export default Home;
