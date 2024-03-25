import { useEffect, useState } from "react";
import messages from "./../../../../public/conversation.json";

const useDialog = () => {
  const [indiceMensajeActual, setIndiceMensajeActual] = useState<number>(0);
  const [indiceConversacionActual, setIndiceConversacionActual] =
    useState<number>(0);

  useEffect(() => {
    if (indiceMensajeActual >= messages[indiceConversacionActual].length) {
      setTimeout(() => {
        setIndiceMensajeActual(0);
      }, 6000);
      return;
    }
  }, [indiceMensajeActual, indiceConversacionActual]);

  const handleCompletaTyping = (): void => {
    setTimeout(() => {
      setIndiceMensajeActual(indiceMensajeActual + 1);
    }, 500);
  };

  return {
    indiceMensajeActual,
    handleCompletaTyping,
    setIndiceConversacionActual,
    setIndiceMensajeActual,
    indiceConversacionActual,
  };
};

export default useDialog;
