import Image from "next/legacy/image";
import { INFURA_GATEWAY } from "../../../../lib/constants";
import usePush from "../hooks/usePush";
import { AiOutlineLoading } from "react-icons/ai";
import { LogProps } from "../types/game.types";

function Log({ connected, openConnectModal }: LogProps) {
  const { handleSubscripcion, subscripcionCargando, handleNotify } = usePush();
  return (
    <div className="relative w-full sm:w-3/4 md:w-1/2 xl:w-96 h-fit xl:h-full flex items-between justify-start flex-col gap-5 xl:order-1 order-2 sm:px-0 px-1">
      <div className="relative flex flex-col gap-5 h-full w-full items-center justify-start">
        <div className="relative text-white font-leco items-center justify-center flex w-fit h-fit text-4xl">
          NPC STUDIO
        </div>
        <div className="relative w-full h-48 xl:h-40 flex items-center justify-center border-4 border-white rounded-md bg-ballena flex-row p-2 gap-4">
          <div className="relative w-fit h-full flex flex-col items-center justify-between">
            <div className="absolute font-at text-4xl text-white items-center justify-center w-fit h-fit flex whitespace-nowrap text-center leading-5 top-1">
              CHAT <br /> LOG
            </div>
            <div className="relative font-at text-4xl text-viola items-center justify-center w-fit h-fit flex whitespace-nowrap text-center leading-5">
              CHAT <br /> LOG
            </div>
            <div className="relative w-20 h-20 flex items-center justify-center border-black border-2">
              <Image
                src={`${INFURA_GATEWAY}/ipfs/QmbNktia71Ec2wKsDxL5BeJrDWTrQX9xpMSQs5AUZCaryi`}
                draggable={false}
                objectFit="cover"
                layout="fill"
              />
            </div>
          </div>
          <div className="relative w-full h-full flex items-center justify-center border-black border-2 p-2">
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={`${INFURA_GATEWAY}/ipfs/QmNcCMEJaxyp5fiDef7nQ9A7wNem4fTr3DLGqkrPeDkbUC`}
                draggable={false}
                objectFit="fill"
                layout="fill"
              />
            </div>
          </div>
        </div>
        <div className="relative w-full h-48 xl:h-40 flex items-center justify-center border-4 border-white rounded-md bg-white">
          <div
            id="mapa"
            className="relative w-full h-full rounded-md flex object-cover bg-cover items-start justify-start"
            draggable={false}
          ></div>
        </div>
      </div>
      <div className="relative w-full h-fit flex items-center justify-center px-4 mb-0">
        <div
          className={`relative w-full h-14 flex py-2 px-4 items-center justify-center font-at text-white bg-naranja rounded-md text-3xl border-4 border-frita  ${
            !subscripcionCargando && "cursor-pointer hover:opacity-90"
          }`}
          onClick={
            !connected
              ? openConnectModal
              : () => !subscripcionCargando && handleNotify()
          }
        >
          <div
            className={`relative w-fit h-fit flex items-center justify-center ${
              subscripcionCargando && "animate-spin"
            }`}
          >
            {subscripcionCargando ? (
              <AiOutlineLoading size={15} color="white" />
            ) : (
              "NOTIFY ME!"
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Log;
