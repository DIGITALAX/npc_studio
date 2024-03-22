import Image from "next/legacy/image";
import { INFURA_GATEWAY } from "../../../../lib/constants";

function Dialog() {
  return (
    <div className="relative w-full h-fit flex items-start justify-start md:px-0 px-1 md:pb-0 pb-5">
      <div className="relative w-full h-96 flex items-start justify-start bg-black/80 rounded-md border-4 border-white">
        <div className="absolute flex items-center justify-center flex-row gap-2 bottom-4 right-4">
          {[
            "QmdXGstnuEL9SoxdPoP6VwavmLCD1AauGkAs4fp4PsEgJu",
            "QmdADQtTM5VkpA7eAS5ozQ8k6Qg3QTGmf5LTwbzvLRtwgs",
          ].map((image: string, index: number) => {
            return (
              <div
                key={index}
                className="relative w-5 h-5 flex items-center justify-center cursor-pointer active:scale-95"
              >
                <Image
                  src={`${INFURA_GATEWAY}/ipfs/${image}`}
                  draggable={false}
                  layout="fill"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Dialog;
