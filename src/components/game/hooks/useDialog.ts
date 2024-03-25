import { useEffect, useRef, useState } from "react";
import messages from "./../../../../public/conversation.json";

const useDialog = () => {
  const contenedorMensajesRef = useRef<HTMLDivElement | null>(null);
  const [indiceMensajeActual, setIndiceMensajeActual] = useState<number>(0);
  const [indiceConversacionActual, setIndiceConversacionActual] =
    useState<number>(0);

  useEffect(() => {
    if (indiceMensajeActual >= messages[indiceConversacionActual].length) {
      setTimeout(() => {
        setIndiceConversacionActual((prev) =>
          prev + 1 < messages.length ? prev + 1 : 0
        );
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

  useEffect(() => {
    const interval = setInterval(() => {
      if (contenedorMensajesRef.current) {
        const contenedor = contenedorMensajesRef.current;
        contenedor.scrollTop = contenedor.scrollHeight;
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [indiceMensajeActual]);

  return {
    indiceMensajeActual,
    handleCompletaTyping,
    setIndiceConversacionActual,
    setIndiceMensajeActual,
    indiceConversacionActual,
    contenedorMensajesRef
  };
};

export default useDialog;
