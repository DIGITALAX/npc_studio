import Image from "next/legacy/image";
import { INFURA_GATEWAY } from "../../../../lib/constants";
import useDialog from "../hooks/useDialog";
import Typist from "react-typist";
import messages from "./../../../../public/conversation.json";

function Dialog() {
  const { indiceMensajeActual, handleCompletaTyping } = useDialog();
  return (
    <div className="relative w-full h-fit flex items-start justify-start md:px-0 px-1 md:pb-0 pb-5">
      <div className="relative w-full h-96 flex flex-col items-start justify-start bg-black/80 rounded-md border-4 border-white p-4">
        <div className="relative w-full h-full flex flex-col items-start justify-start font-at text-3xl text-white">
          {messages.slice(0, indiceMensajeActual + 1).map((msg, index) => (
            <div key={index} className="my-2">
              {index === indiceMensajeActual ? (
                <Typist
                  onTypingDone={handleCompletaTyping}
                  cursor={{ hideWhenDone: true, hideWhenDoneDelay: 500 }}
                >
                  <span style={{ color: msg.color }}>
                    {msg.name} ({msg.team}):
                  </span>
                  <span style={{ color: msg.base }}> {msg.message}</span>
                </Typist>
              ) : (
                <p>
                  <span style={{ color: msg.color }}>
                    <strong>
                      {msg.name} ({msg.team}):
                    </strong>
                  </span>
                  <span style={{ color: msg.base }}> {msg.message}</span>
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="relative w-full h-fit flex items-end justify-end">
          <div className="relative flex items-center justify-center flex-row gap-2">
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
    </div>
  );
}

export default Dialog;
