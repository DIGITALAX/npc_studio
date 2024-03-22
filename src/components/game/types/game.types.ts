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
