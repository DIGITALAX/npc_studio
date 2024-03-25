import { useEffect, useState } from "react";
import messages from "./../../../../public/conversation.json";

const useDialog = () => {
  const [indiceMensajeActual, setIndiceMensajeActual] = useState<number>(0);

  useEffect(() => {
    if (indiceMensajeActual >= messages.length) {
      setTimeout(() => {
        setIndiceMensajeActual(0);
      }, 6000);
      return;
    }
  }, [indiceMensajeActual, messages.length]);

  const handleCompletaTyping = (): void => {
    setTimeout(() => {
      setIndiceMensajeActual(indiceMensajeActual + 1);
    }, 500);
  };

  return {
    indiceMensajeActual,
    handleCompletaTyping,
  };
};

export default useDialog;
