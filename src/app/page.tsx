"use client";
import dynamic from "next/dynamic";
const DynamicComponentWithNoSSR = dynamic(
  () => import("@/components/game/modules/Studio"),
  { ssr: false }
);

function Home() {
  return <DynamicComponentWithNoSSR />;
}

export default Home;
