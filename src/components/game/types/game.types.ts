export enum Direcion {
  Izquierda,
  Derecha,
  Arriba,
  Abajo,
}

export type LogProps = {
  connected: boolean;
  openConnectModal: (() => void) | undefined;
};

export interface Message {
  team: string;
  name: string;
  message: string;
  color: string;
  base: string;
}
