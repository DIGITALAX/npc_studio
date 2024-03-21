import Image from "next/legacy/image";
import { INFURA_GATEWAY } from "../../../../lib/constants";

function Log() {
  return (
    <div className="relative w-96 h-full flex items-start justify-start flex-col gap-5">
      <div className="relative text-white font-leco items-center justify-center flex w-fit h-fit text-4xl">
        NPC STUDIO
      </div>
      <div className="relative w-full h-40 flex items-center justify-center border-4 border-white rounded-md bg-ballena flex-row p-2 gap-4">
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
      <div className="relative w-full h-40 flex items-center justify-center border-4 border-white rounded-md bg-white">
        <Image
          layout="fill"
          src={`${INFURA_GATEWAY}/ipfs/QmX1C1GeujPzenhs1x5Ep6sXPEKSxHjPSF4Qr6xk8D8U7E`}
          objectFit="cover"
          className="rounded-md"
          draggable={false}
        />
      </div>
      <div className="relative w-full h-fit flex items-center justify-center px-4">
        <div
          className="relative w-full h-fit flex py-2 px-4 items-center justify-center font-at text-white bg-naranja rounded-md cursor-pointer text-3xl border-4 border-frita active:scale-95 hover:opacity-90"
          onClick={() => {}}
        >
          NOTIFY ME!
        </div>
      </div>
    </div>
  );
}

export default Log;
