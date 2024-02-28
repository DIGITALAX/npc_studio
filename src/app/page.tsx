"use client";

import Image from "next/legacy/image";
import { INFURA_GATEWAY } from "../../lib/constants";

export default function Home() {
  return (
    <div className="relative w-full h-full min-h-screen flex items-start justify-start">
      <div className="absolute w-full h-full flex items-center justify-center top-0 left-0">
        <Image
          objectFit="cover"
          draggable={false}
          layout="fill"
          src={`${INFURA_GATEWAY}/ipfs/QmQQjPudXcZedKA53uw1V4qPy82MvfzmggFWyw1doTicci`}
        />
        <div className="absolute w-full h-full flex items-center justify-center top-0 left-0 bg-frio/50"></div>
      </div>
      <div className="relative w-full h-full min-h-screen flex flex-col items-start justify-between font-rain text-white py-5 px-2 gap-4">
        <div className="relative w-full h-fit flex items-start justify-start text-[3rem] sm:text-[5rem] md:text-[7rem] xl:text-[10rem] break-all">
          NPC STUDIO
        </div>
        <div className="relative w-full h-fit flex items-end flex-col md:flex-row justify-center md:justify-between gap-10 md:gap-4 mb-0">
          <div
            className="relative w-full h-fit flex md:items-start md:justify-start items-center justify-center md:order-1 order-2 ml-0 text-5xl cursor-pointer"
            onClick={() => window.open("https://digitalax.xyz")}
          >
            DIGITALAX
          </div>
          <div className="relative w-full h-fit flex items-center md:items-end justify-center md:justify-end md:order-2 order-1">
            <div className="relative w-80 h-96 flex items-center justify-center">
              <Image
                src={`${INFURA_GATEWAY}/ipfs/QmZMivBBHM3ZnTAJ4NuBCPKjv33qH2NmyHCab5dBDaZ1hy`}
                draggable={false}
                layout="fill"
                objectFit="contain"
              />
              <div className="relative flex items-center justify-center text-black font-mana text-sm text-center flex-col gap-1 top-3">
                <div className="relative w-fit h-fit flex items-center justify-center">
                  generation
                </div>
                <div className="relative w-fit h-fit flex items-center justify-center left-5">
                  in progress
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
