"use client";

import { useEffect, useRef } from "react";
import Phaser from "phaser";
import { INFURA_GATEWAY } from "../../../../lib/constants";
import { Direcion, Waypoint } from "../types/game.types";

const useConfig = () => {
  const gameRef = useRef<HTMLElement | undefined>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && gameRef.current) {
      const parentWidth = 1512;
      const parentHeight = 830;
      class CustomPhaserScene extends Phaser.Scene {
        muchacho?: Phaser.Physics.Arcade.Sprite | null;
        escritorio1?: Phaser.GameObjects.Image | null;
        escritorio2?: Phaser.GameObjects.Image | null;
        escritorio3?: Phaser.GameObjects.Image | null;
        escritorio4?: Phaser.GameObjects.Image | null;
        silla1?: Phaser.GameObjects.Image | null;
        silla2?: Phaser.GameObjects.Image | null;
        silla3?: Phaser.GameObjects.Image | null;
        silla4?: Phaser.GameObjects.Image | null;
        panelDeControl?: Phaser.GameObjects.Image | null;
        cursor?: Phaser.Types.Input.Keyboard.CursorKeys | null;
        initialPointerPosition?: { x: number; y: number };
        frameCount: number;
        sentadoSofa: boolean;
        sentadoEscritorio: boolean;
        waypoints: Waypoint[];
        currentWaypointIndex: number;
        isMoving: boolean;

        constructor() {
          super();
          this.initialPointerPosition = { x: 0, y: 0 };
          this.muchacho = null;
          this.cursor = null;
          this.escritorio1 = null;
          this.escritorio2 = null;
          this.escritorio3 = null;
          this.escritorio4 = null;
          this.panelDeControl = null;
          this.frameCount = 0;
          this.sentadoSofa = false;
          this.sentadoEscritorio = false;
          this.isMoving = false;
          this.currentWaypointIndex = 0;
          this.waypoints = [
            {
              direccion: "derecha",
              destino: { x: 902, y: 576 },
            },
            {
              direccion: "inactivo",
              destino: { x: 902, y: 576 },
              duracion: 5000,
            },
            {
              direccion: "abajo",
              destino: { x: 902, y: 680 },
            },
            {
              direccion: "inactivo",
              destino: { x: 902, y: 680 },
              duracion: 1000,
            },
            {
              direccion: "derecha",
              destino: { x: 1280.5, y: 680 },
            },
            {
              direccion: "inactivo",
              destino: { x: 1280.5, y: 680 },
              duracion: 15000,
            },
            {
              direccion: "izquierda",
              destino: { x: 196, y: 680 },
            },
            {
              direccion: "inactivo",
              destino: { x: 196, y: 680 },
              duracion: 1000,
            },
            {
              direccion: "arriba",
              destino: { x: 196, y: 421 },
            },
            {
              direccion: "inactivo",
              destino: { x: 196, y: 421 },
              duracion: 1000,
            },
            {
              direccion: "derecha",
              destino: { x: 584, y: 421 },
            },
            {
              direccion: "inactivo",
              destino: { x: 584, y: 421 },
              duracion: 1000,
            },
            {
              direccion: "arriba",
              destino: { x: 584, y: 210 },
            },
            {
              direccion: "inactivo",
              destino: { x: 584, y: 210 },
              duracion: 1000,
            },
            {
              direccion: "abajo",
              destino: { x: 584, y: 303 },
            },
            {
              direccion: "inactivo",
              destino: { x: 584, y: 303 },
              duracion: 1000,
            },
            {
              direccion: "derecha",
              destino: { x: 1336, y: 303 },
            },
            {
              direccion: "inactivo",
              destino: { x: 1336, y: 303 },
              duracion: 10000,
            },
            {
              direccion: "sentadoEscritorio",
              destino: {
                x: 1336,
                y: this.silla1!?.y - Number(this.silla1!?.y) / 4,
              },
              duracion: 15000,
            },
          ];
        }

        preload() {
          this.load.image(
            "fondo",
            `${INFURA_GATEWAY}/ipfs/QmQho15EawdPjxhZ6QcnFoGHiEV8r2dTS1u7TczQv9cd44`
          );
          this.load.image(
            "pared",
            `${INFURA_GATEWAY}/ipfs/QmcR8PpyDhRaUzJJW5UoxhnyzqNk88imgXS2MGuhgfYsYK`
          );
          this.load.image(
            "nevera",
            `${INFURA_GATEWAY}/ipfs/QmaGoMNwYt7aEgG6AoKGmDdmWUQgshQ8KtASkgoHKgmcS2`
          );
          this.load.image(
            "maquina",
            `${INFURA_GATEWAY}/ipfs/QmVubKFGVcdfZS2pSEhmK8DtpFWbiC8H2BX11VPTd9xnNp`
          );
          this.load.image(
            "sofaUno",
            `${INFURA_GATEWAY}/ipfs/QmQfqKAD2Hepe9kQ9VxBSNmwZrywCvuPrnAr5AiF4bMvwB`
          );
          this.load.image(
            "sofaDos",
            `${INFURA_GATEWAY}/ipfs/QmUFsXQpp1ZZWKWCnHAED4pgZgeLSBnp4ofMz9ae1BkhAR`
          );
          this.load.image(
            "alfombra",
            `${INFURA_GATEWAY}/ipfs/QmQaZhrMnuwkKbP2UbYtnMxRiUcpZfNGyuEhGuqd7xcFAj`
          );
          this.load.image(
            "escritorio1",
            `${INFURA_GATEWAY}/ipfs/QmWtr9iRZ4HiPe1PBxrJfiB9hEQNa3GWxtipt7hqFvBPvs`
          );
          this.load.image(
            "silla1",
            `${INFURA_GATEWAY}/ipfs/QmariT81Kgxw4mNHCt8wGHmgH5avzrZt2r6vNiik4qeSwK`
          );
          this.load.image(
            "escritorio2",
            `${INFURA_GATEWAY}/ipfs/QmTwbtXhizeCxBbZk9Nbd3yrt67kcB7Ytm6sKAzx5rFtCd`
          );
          this.load.image(
            "silla2",
            `${INFURA_GATEWAY}/ipfs/Qmc8VyBMDALMJJknadELsL9SBQuYSuTHpa3e1SqfX61Egn`
          );
          this.load.image(
            "escritorio3",
            `${INFURA_GATEWAY}/ipfs/Qmcy6nTw4YaGj8AEtba2WVm8gYy1vj9LbyMNk9qGptz4ny`
          );
          this.load.image(
            "silla3",
            `${INFURA_GATEWAY}/ipfs/QmUuHUnrMHhusH1JrgG6WonoCUxG1t7LQe348gru2d4uHM`
          );
          this.load.image(
            "escritorio4",
            `${INFURA_GATEWAY}/ipfs/Qmd8VH1yPkPGtxoRM1bdAvLJnjyTG21pgswddCVnECxDHh`
          );
          this.load.image(
            "silla4",
            `${INFURA_GATEWAY}/ipfs/QmfZPky9neYWSuQcZ7wtyajqMCRPBaq7WiPjaab4ZxC8PZ`
          );
          this.load.image(
            "panelDeControl",
            `${INFURA_GATEWAY}/ipfs/QmWMPF4YYvRLGW4F76kufDSxg2LnYojDNZK7cfdkwQxdXw`
          );
          this.load.image(
            "arcade",
            `${INFURA_GATEWAY}/ipfs/QmaNMrJo7TqEpvsveTFJk7zwBbS4SukM3gnuVwhiY5sCoa`
          );
          this.load.image(
            "audio1",
            `${INFURA_GATEWAY}/ipfs/QmYrGLoU35kwH9HyVLi283hG2GzX1fbxuszHT3j1qfAs8G`
          );
          this.load.image(
            "audio2",
            `${INFURA_GATEWAY}/ipfs/QmQA2cgeuAMvLSqj75CWrhmNhKoQV2GKapy94Co6WmWQVi`
          );
          this.load.image(
            "planta1",
            `${INFURA_GATEWAY}/ipfs/QmXYg1FC5zTHXHP1czJmsusC9DT33JCwHnLacYAui1HH84`
          );
          this.load.image(
            "planta2",
            `${INFURA_GATEWAY}/ipfs/QmdcSwsasjt18R7Hey77X6idnW9qz25Q1XkVsHT7inqbm7`
          );
          this.load.image(
            "telefono",
            `${INFURA_GATEWAY}/ipfs/QmSz2dcSRdX9vtxpXH91dS4pe8PAkAakbwfb4mGZNwunkk`
          );
          this.load.image(
            "capsula",
            `${INFURA_GATEWAY}/ipfs/QmYjXKxmyRQHf6fDdqEaNPEdc3W7gcFuNxogsVL38kR3M9`
          );
          this.load.spritesheet(
            "muchacho",
            `${INFURA_GATEWAY}/ipfs/QmUHDrL3JTUMwztqyzr8cUdCjYLpjET9pRXrLTRPtfgSBx`,
            {
              frameWidth: 600,
              frameHeight: 600,
              margin: 0,
              startFrame: 0,
              endFrame: 143,
            }
          );
        }

        create() {
          const fondo = this.add.image(0, 0, "fondo").setOrigin(0, 0);
          fondo.displayWidth = parentWidth;
          fondo.displayHeight = parentHeight;
          const pared = this.physics.add
            .staticImage(fondo.width, 0, "pared")
            .setOrigin(0.62, 0)
            .setScale(1.1);
          pared.scaleX = 1.3;
          pared.body
            .setSize(pared.width, pared.height / 1.5, false)
            .setOffset(-0.5, 0);
          const nevera = this.physics.add
            .staticImage(0, 0, "nevera")
            .setOrigin(0, 0)
            .setScale(1.1);
          nevera.scaleX = 1.4;
          nevera.body
            .setSize(nevera.width * 2, nevera.height * 0.8, false)
            .setOffset(0, 0);
          const maquina = this.physics.add
            .staticImage(
              nevera.width + nevera.width / 2,
              nevera.height / 7,
              "maquina"
            )
            .setOrigin(0, 0)
            .setScale(1.1);
          maquina.scaleX = 1.6;
          maquina.body
            .setSize(maquina.width, maquina.height / 3, false)
            .setOffset(maquina.width, maquina.height / 5);
          const alfombra = this.add
            .image(fondo.width / 4, fondo.height / 2, "alfombra")
            .setOrigin(0, 0)
            .setScale(1.2);
          alfombra.scaleX = 1.5;
          const sofaUno = this.add
            .image(fondo.width / 1.5, pared.height / 1.4, "sofaUno")
            .setOrigin(0, 0)
            .setScale(1.2);
          sofaUno.setInteractive();
          sofaUno.on("pointerdown", () => {
            const centroSofaX = sofaUno.x + sofaUno.displayWidth * 0.5;
            const frenteSofaY = sofaUno.y;
            const muchachoX = this.muchacho?.x;
            const muchachoY = this.muchacho?.y;

            const toleranciaX = sofaUno.displayWidth * 0.5;
            const toleranciaY = 50;

            if (
              Math.abs(Number(muchachoX) - centroSofaX) <= toleranciaX &&
              Math.abs(Number(muchachoY) - frenteSofaY) <= toleranciaY
            ) {
              this.muchacho!.x = sofaUno.x + sofaUno.displayWidth * 0.5;
              this.muchacho!.y = 220;
              this.sentadoSofa = true;
            } else {
              this.sentadoSofa = false;
            }
          });

          const sofaDos = this.add
            .image(fondo.width / 0.9, pared.height / 1.4, "sofaDos")
            .setOrigin(0, 0)
            .setScale(1.2);
          sofaDos.setInteractive();
          sofaDos.on("pointerdown", () => {
            const centroSofaX = sofaDos.x + sofaDos.displayWidth * 0.5;
            const frenteSofaY = sofaDos.y;
            const muchachoX = this.muchacho?.x;
            const muchachoY = this.muchacho?.y;

            const toleranciaX = sofaDos.displayWidth * 0.5;
            const toleranciaY = 50;

            if (
              Math.abs(Number(muchachoX) - centroSofaX) <= toleranciaX &&
              Math.abs(Number(muchachoY) - frenteSofaY) <= toleranciaY
            ) {
              this.muchacho!.x = sofaDos.x + sofaDos.displayWidth * 0.5;
              this.muchacho!.y = 220;
              this.sentadoSofa = true;
            } else {
              this.sentadoSofa = false;
            }
          });

          this.panelDeControl = this.add
            .image(
              Number(parentWidth),
              Number(parentHeight) / 1.1,
              "panelDeControl"
            )
            .setOrigin(1, 1);

          this.escritorio1 = this.add
            .image(
              Number(parentWidth) - 20,
              Number(parentHeight) / 2.2,
              "escritorio1"
            )
            .setOrigin(1, 1);
          this.silla1 = this.add
            .image(
              Number(this.escritorio1.x) - Number(this.escritorio1.width / 2.5),
              this.escritorio1.y,
              "silla1"
            )
            .setOrigin(1, 1);
          this.escritorio1.setInteractive();
          this.silla1.setInteractive();
          this.escritorio1.on("pointerdown", () => {
            const centroEscritorioX =
              Number(this.escritorio1!.x) -
              Number(this.escritorio1!.displayWidth) * 0.5;
            const frenteEscritorioY = Number(this.escritorio1!.y);
            const muchachoX = this.muchacho?.x;
            const muchachoY = this.muchacho?.y;

            const toleranciaX = Number(this.escritorio1!.displayWidth) * 0.5;
            const toleranciaY = 80;

            if (
              Math.abs(Number(muchachoX) - centroEscritorioX) <= toleranciaX &&
              Math.abs(Number(muchachoY) - frenteEscritorioY) <= toleranciaY
            ) {
              this.muchacho!.x =
                this.silla1!.x - Number(this.silla1!.width) / 2;
              this.muchacho!.y = this.silla1!.y - Number(this.silla1!.y) / 4;
              this.sentadoEscritorio = true;
              this.escritorio1?.setDepth(1);
              this.silla1?.setDepth(2);
              this.muchacho?.setDepth(1.5);
            } else {
              this.sentadoEscritorio = false;
            }
          });
          this.silla1.on("pointerdown", () => {
            const centroEscritorioX =
              Number(this.escritorio1!.x) -
              Number(this.escritorio1!.displayWidth) * 0.5;
            const frenteEscritorioY = Number(this.escritorio1!.y);
            const muchachoX = this.muchacho?.x;
            const muchachoY = this.muchacho?.y;

            const toleranciaX = Number(this.escritorio1!.displayWidth) * 0.5;
            const toleranciaY = 80;

            if (
              Math.abs(Number(muchachoX) - centroEscritorioX) <= toleranciaX &&
              Math.abs(Number(muchachoY) - frenteEscritorioY) <= toleranciaY
            ) {
              this.muchacho!.x =
                this.silla1!.x - Number(this.silla1!.width) / 2;
              this.muchacho!.y = this.silla1!.y - Number(this.silla1!.y) / 4;
              this.sentadoEscritorio = true;
              this.escritorio1?.setDepth(1);
              this.silla1?.setDepth(2);
              this.muchacho?.setDepth(1.5);
            } else {
              this.sentadoEscritorio = false;
            }
          });

          this.escritorio2 = this.add
            .image(
              Number(parentWidth) - 20,
              Number(parentHeight) / 1.6,
              "escritorio2"
            )
            .setOrigin(1, 1);
          this.silla2 = this.add
            .image(
              Number(this.escritorio2.x) - Number(this.escritorio2.width / 2.5),
              this.escritorio2.y,
              "silla2"
            )
            .setOrigin(1, 1);
          this.escritorio2.setInteractive();
          this.silla2.setInteractive();
          this.escritorio2.on("pointerdown", () => {
            const centroEscritorioX =
              Number(this.escritorio2!.x) -
              Number(this.escritorio2!.displayWidth) * 0.5;
            const frenteEscritorioY = Number(this.escritorio2!.y);
            const muchachoX = this.muchacho?.x;
            const muchachoY = this.muchacho?.y;

            const toleranciaX = Number(this.escritorio2!.displayWidth) * 0.5;
            const toleranciaY = 80;

            if (
              Math.abs(Number(muchachoX) - centroEscritorioX) <= toleranciaX &&
              Math.abs(Number(muchachoY) - frenteEscritorioY) <= toleranciaY
            ) {
              this.muchacho!.x =
                this.silla2!.x - Number(this.silla2!.width) / 2;
              this.muchacho!.y = this.silla2!.y - Number(this.silla2!.y) / 4;
              this.sentadoEscritorio = true;
              this.escritorio2?.setDepth(1);
              this.silla2?.setDepth(2);
              this.muchacho?.setDepth(1.5);
            } else {
              this.sentadoEscritorio = false;
            }
          });
          this.silla2.on("pointerdown", () => {
            const centroEscritorioX =
              Number(this.escritorio2!.x) -
              Number(this.escritorio2!.displayWidth) * 0.5;
            const frenteEscritorioY = Number(this.escritorio2!.y);
            const muchachoX = this.muchacho?.x;
            const muchachoY = this.muchacho?.y;

            const toleranciaX = Number(this.escritorio2!.displayWidth) * 0.5;
            const toleranciaY = 80;

            if (
              Math.abs(Number(muchachoX) - centroEscritorioX) <= toleranciaX &&
              Math.abs(Number(muchachoY) - frenteEscritorioY) <= toleranciaY
            ) {
              this.muchacho!.x =
                this.silla2!.x - Number(this.silla2!.width) / 2;
              this.muchacho!.y = this.silla2!.y - Number(this.silla2!.y) / 4;
              this.sentadoEscritorio = true;
              this.escritorio2?.setDepth(1);
              this.silla2?.setDepth(2);
              this.muchacho?.setDepth(1.5);
            } else {
              this.sentadoEscritorio = false;
            }
          });

          this.escritorio3 = this.add
            .image(
              Number(parentWidth) - (this.escritorio1.width + 20),
              Number(parentHeight) / 2.2,
              "escritorio3"
            )
            .setOrigin(1, 1);
          this.silla3 = this.add
            .image(
              Number(this.escritorio3.x) - Number(this.escritorio3.width / 2.5),
              this.escritorio3.y,
              "silla3"
            )
            .setOrigin(1, 1);
          this.escritorio3.setInteractive();
          this.silla3.setInteractive();
          this.escritorio3.on("pointerdown", () => {
            const centroEscritorioX =
              Number(this.escritorio3!.x) -
              Number(this.escritorio3!.displayWidth) * 0.5;
            const frenteEscritorioY = Number(this.escritorio3!.y);
            const muchachoX = this.muchacho?.x;
            const muchachoY = this.muchacho?.y;

            const toleranciaX = Number(this.escritorio3!.displayWidth) * 0.5;
            const toleranciaY = 80;

            if (
              Math.abs(Number(muchachoX) - centroEscritorioX) <= toleranciaX &&
              Math.abs(Number(muchachoY) - frenteEscritorioY) <= toleranciaY
            ) {
              this.muchacho!.x =
                this.silla3!.x - Number(this.silla3!.width) / 2;
              this.muchacho!.y = this.silla3!.y - Number(this.silla3!.y) / 4;
              this.sentadoEscritorio = true;
              this.escritorio3?.setDepth(1);
              this.silla3?.setDepth(2);
              this.muchacho?.setDepth(1.5);
            } else {
              this.sentadoEscritorio = false;
            }
          });
          this.silla3.on("pointerdown", () => {
            const centroEscritorioX =
              Number(this.escritorio3!.x) -
              Number(this.escritorio3!.displayWidth) * 0.5;
            const frenteEscritorioY = Number(this.escritorio3!.y);
            const muchachoX = this.muchacho?.x;
            const muchachoY = this.muchacho?.y;

            const toleranciaX = Number(this.escritorio3!.displayWidth) * 0.5;
            const toleranciaY = 80;

            if (
              Math.abs(Number(muchachoX) - centroEscritorioX) <= toleranciaX &&
              Math.abs(Number(muchachoY) - frenteEscritorioY) <= toleranciaY
            ) {
              this.muchacho!.x =
                this.silla3!.x - Number(this.silla3!.width) / 2;
              this.muchacho!.y = this.silla3!.y - Number(this.silla3!.y) / 4;
              this.sentadoEscritorio = true;
              this.escritorio3?.setDepth(1);
              this.silla3?.setDepth(2);
              this.muchacho?.setDepth(1.5);
            } else {
              this.sentadoEscritorio = false;
            }
          });

          this.escritorio4 = this.add
            .image(
              Number(parentWidth) - (this.escritorio2.width + 20),
              Number(parentHeight) / 1.6,
              "escritorio4"
            )
            .setOrigin(1, 1);
          this.silla4 = this.add
            .image(
              Number(this.escritorio4.x) - Number(this.escritorio4.width / 2.5),
              this.escritorio4.y,
              "silla4"
            )
            .setOrigin(1, 1);
          this.escritorio4.setInteractive();
          this.silla4.setInteractive();
          this.escritorio4.on("pointerdown", () => {
            const centroEscritorioX =
              Number(this.escritorio4!.x) -
              Number(this.escritorio4!.displayWidth) * 0.5;
            const frenteEscritorioY = Number(this.escritorio4!.y);
            const muchachoX = this.muchacho?.x;
            const muchachoY = this.muchacho?.y;

            const toleranciaX = Number(this.escritorio4!.displayWidth) * 0.5;
            const toleranciaY = 80;

            if (
              Math.abs(Number(muchachoX) - centroEscritorioX) <= toleranciaX &&
              Math.abs(Number(muchachoY) - frenteEscritorioY) <= toleranciaY
            ) {
              this.muchacho!.x =
                this.silla4!.x - Number(this.silla4!.width) / 2;
              this.muchacho!.y = this.silla4!.y - Number(this.silla4!.y) / 4;
              this.sentadoEscritorio = true;
              this.escritorio4?.setDepth(1);
              this.silla4?.setDepth(2);
              this.muchacho?.setDepth(1.5);
            } else {
              this.sentadoEscritorio = false;
            }
          });
          this.silla4.on("pointerdown", () => {
            const centroEscritorioX =
              Number(this.escritorio4!.x) -
              Number(this.escritorio4!.displayWidth) * 0.5;
            const frenteEscritorioY = Number(this.escritorio4!.y);
            const muchachoX = this.muchacho?.x;
            const muchachoY = this.muchacho?.y;

            const toleranciaX = Number(this.escritorio4!.displayWidth) * 0.5;
            const toleranciaY = 80;

            if (
              Math.abs(Number(muchachoX) - centroEscritorioX) <= toleranciaX &&
              Math.abs(Number(muchachoY) - frenteEscritorioY) <= toleranciaY
            ) {
              this.muchacho!.x =
                this.silla4!.x - Number(this.silla4!.width) / 2;
              this.muchacho!.y = this.silla4!.y - Number(this.silla4!.y) / 4;
              this.sentadoEscritorio = true;
              this.escritorio4?.setDepth(1);
              this.silla4?.setDepth(2);
              this.muchacho?.setDepth(1.5);
            } else {
              this.sentadoEscritorio = false;
            }
          });

          const arcade = this.physics.add
            .staticImage(Number(parentWidth), Number(parentHeight), "arcade")
            .setOrigin(1, 1)
            .setDepth(10000);
          const telefono = this.physics.add
            .staticImage(0, Number(parentHeight), "telefono")
            .setOrigin(0, 1)
            .setDepth(10000);
          telefono.body
            .setSize(telefono.width, telefono.height, false)
            .setOffset(0, -telefono.height / 2);
          const capsula = this.physics.add
            .staticImage(0, Number(parentHeight) - telefono.height, "capsula")
            .setOrigin(0, 1)
            .setDepth(10000);
          capsula.body
            .setSize(capsula.width, capsula.height, false)
            .setOffset(0, -capsula.height / 2);

          this.muchacho = this.physics.add
            .sprite(
              alfombra.x + alfombra.x / 2,
              alfombra.y + alfombra.y / 2,
              "muchacho"
            )
            .setScale(0.5);
          this.cameras.main.startFollow(this.muchacho, true, 0.05, 0.05);

          const audio1 = this.add
            .image(Number(parentWidth) / 2, Number(parentHeight), "audio1")
            .setOrigin(1, 1)
            .setDepth(10000);
          this.add
            .image(
              Number(parentWidth) / 2 + audio1.width,
              Number(parentHeight),
              "audio2"
            )
            .setOrigin(1, 1)
            .setDepth(10000);
          const planta1 = this.add
            .image(Number(parentWidth) / 2.5, Number(parentHeight), "planta1")
            .setOrigin(1, 1)
            .setDepth(10000);
          this.add
            .image(
              Number(parentWidth) / 2.5 - planta1.width,
              Number(parentHeight),
              "planta2"
            )
            .setOrigin(1, 1)
            .setDepth(10000);
          this.physics.world.bounds.width = parentWidth;
          this.physics.world.bounds.height = parentHeight;
          this.cameras.main.setBounds(0, 0, parentWidth, parentHeight);

          this.cursor = this.input.keyboard?.createCursorKeys();
          this.physics.add.collider(this.muchacho, capsula);
          this.physics.add.collider(this.muchacho, telefono);
          this.physics.add.collider(this.muchacho, arcade);
          this.physics.add.collider(this.muchacho, pared);
          this.physics.add.collider(this.muchacho, nevera);
          this.physics.add.collider(this.muchacho, maquina);
          this.physics.add.collider(this.muchacho, sofaUno);
          this.physics.add.collider(this.muchacho, sofaDos);
          this.muchacho.setCollideWorldBounds(true);

          // if (
          //   this.sys.game.device.os.iOS ||
          //   this.sys.game.device.os.android ||
          //   this.sys.game.device.os.iPad ||
          //   this.sys.game.device.os.iPhone
          // ) {
          //   this.enableTouchControls();
          // }

          this.anims.create({
            key: "inactivo",
            frames: this.anims.generateFrameNumbers("muchacho", {
              start: 132,
              end: 143,
            }),
            frameRate: 0.3,
            repeat: -1,
          });
          this.anims.create({
            key: "arriba",
            frames: this.anims.generateFrameNumbers("muchacho", {
              start: 0,
              end: 11,
            }),
            frameRate: 3,
            repeat: -1,
          });
          this.anims.create({
            key: "izquierda",
            frames: this.anims.generateFrameNumbers("muchacho", {
              start: 24,
              end: 35,
            }),
            frameRate: 3,
            repeat: -1,
          });
          this.anims.create({
            key: "abajo",
            frames: this.anims.generateFrameNumbers("muchacho", {
              start: 12,
              end: 23,
            }),
            frameRate: 3,
            repeat: -1,
          });
          this.anims.create({
            key: "derecha",
            frames: this.anims.generateFrameNumbers("muchacho", {
              start: 36,
              end: 47,
            }),
            frameRate: 3,
            repeat: -1,
          });
          this.anims.create({
            key: "izquierdaAbajo",
            frames: this.anims.generateFrameNumbers("muchacho", {
              start: 72,
              end: 83,
            }),
            frameRate: 3,
            repeat: -1,
          });
          this.anims.create({
            key: "izquierdaArriba",
            frames: this.anims.generateFrameNumbers("muchacho", {
              start: 48,
              end: 59,
            }),
            frameRate: 3,
            repeat: -1,
          });
          this.anims.create({
            key: "derechaArriba",
            frames: this.anims.generateFrameNumbers("muchacho", {
              start: 60,
              end: 71,
            }),
            frameRate: 3,
            repeat: -1,
          });
          this.anims.create({
            key: "derechaAbajo",
            frames: this.anims.generateFrameNumbers("muchacho", {
              start: 84,
              end: 95,
            }),
            frameRate: 3,
            repeat: -1,
          });
          this.anims.create({
            key: "sentadoSofa",
            frames: this.anims.generateFrameNumbers("muchacho", {
              start: 97,
              end: 108,
            }),
            frameRate: 0.3,
            repeat: -1,
          });
          this.anims.create({
            key: "sentadoEscritorio",
            frames: this.anims.generateFrameNumbers("muchacho", {
              start: 108,
              end: 119,
            }),
            frameRate: 0.3,
            repeat: -1,
          });

          this.input.on("pointerdown", () => {
            this.sentadoSofa = false;
            this.sentadoEscritorio = false;
          });
        }

        update() {
          if (!this.isMoving && this.waypoints.length > 0) {
            const waypoint = this.waypoints[this.currentWaypointIndex];

            if (
              waypoint.direccion === "sentadoSofa" ||
              waypoint.direccion === "sentadoEscritorio"
            ) {
              this.handleSittingAction(waypoint);
            } else if (waypoint.direccion !== "inactivo") {
              this.moveCharacterTo(waypoint);
            } else {
              this.handleAction(waypoint);

              this.muchacho!.depth = (this.muchacho!?.y +
                this.muchacho!?.height / 4) as number;
              this.escritorio1!.depth = this.escritorio1?.y as number;
              this.silla1!.depth = this.silla1?.y as number;
              this.escritorio2!.depth = this.escritorio2?.y as number;
              this.silla2!.depth = this.silla2?.y as number;
              this.escritorio3!.depth = this.escritorio3?.y as number;
              this.silla3!.depth = this.silla3?.y as number;
              this.escritorio4!.depth = this.escritorio4?.y as number;
              this.silla4!.depth = this.silla4?.y as number;
              this.panelDeControl!.depth = this.panelDeControl?.y as number;
            }
          }

          console.log(this.muchacho?.x, this.muchacho?.y);

          // if (this.sentadoSofa) {
          //   this.muchacho?.setVelocityX(0);
          //   this.muchacho?.setVelocityY(0);
          //   this.muchacho?.anims.play("sentadoSofa", true);
          //   return;
          // }

          // if (this.sentadoEscritorio) {
          //   this.muchacho?.setVelocityX(0);
          //   this.muchacho?.setVelocityY(0);
          //   this.muchacho?.anims.play("sentadoEscritorio", true);
          //   return;
          // }

          // if (
          //   this.cursor?.left.isDown &&
          //   this.cursor?.down?.isDown &&
          //   this.bloqueoDinamico(Direcion.Izquierda) &&
          //   this.bloqueoDinamico(Direcion.Abajo)
          // ) {
          //   this.muchacho?.setVelocityX(-160);
          //   this.muchacho?.setVelocityY(160);
          //   this.muchacho?.anims.play("izquierdaAbajo", true);
          // } else if (
          //   this.cursor?.left.isDown &&
          //   this.cursor?.up?.isDown &&
          //   this.bloqueoDinamico(Direcion.Izquierda) &&
          //   this.bloqueoDinamico(Direcion.Arriba)
          // ) {
          //   this.muchacho?.setVelocityX(-160);
          //   this.muchacho?.setVelocityY(-160);
          //   this.muchacho?.anims.play("izquierdaArriba", true);
          // } else if (
          //   this.cursor?.right.isDown &&
          //   this.cursor?.down?.isDown &&
          //   this.bloqueoDinamico(Direcion.Abajo) &&
          //   this.bloqueoDinamico(Direcion.Derecha)
          // ) {
          //   this.muchacho?.setVelocityX(160);
          //   this.muchacho?.setVelocityY(160);
          //   this.muchacho?.anims.play("derechaAbajo", true);
          // } else if (
          //   this.cursor?.right.isDown &&
          //   this.cursor?.up?.isDown &&
          //   this.bloqueoDinamico(Direcion.Arriba) &&
          //   this.bloqueoDinamico(Direcion.Derecha)
          // ) {
          //   this.muchacho?.setVelocityX(160);
          //   this.muchacho?.setVelocityY(-160);
          //   this.muchacho?.anims.play("derechaArriba", true);
          // } else if (
          //   this.cursor?.left.isDown &&
          //   this.bloqueoDinamico(Direcion.Izquierda)
          // ) {
          //   this.muchacho?.setVelocityX(-160);
          //   this.muchacho?.anims.play("izquierda", true);
          // } else if (
          //   this.cursor?.right.isDown &&
          //   this.bloqueoDinamico(Direcion.Derecha)
          // ) {
          //   this.muchacho?.setVelocityX(160);
          //   this.muchacho?.anims.play("derecha", true);
          // } else if (
          //   this.cursor?.up.isDown &&
          //   this.bloqueoDinamico(Direcion.Arriba)
          // ) {
          //   this.muchacho?.setVelocityY(-160);
          //   this.muchacho?.anims.play("arriba", true);
          // } else if (
          //   this.cursor?.down.isDown &&
          //   this.bloqueoDinamico(Direcion.Abajo)
          // ) {
          //   this.muchacho?.setVelocityY(160);
          //   this.muchacho?.anims.play("abajo", true);
          // } else {
          //   this.muchacho?.setVelocityY(0);
          //   this.muchacho?.setVelocityX(0);
          // }

          // if (
          //   !this.cursor?.left.isDown &&
          //   !this.cursor?.right.isDown &&
          //   !this.cursor?.up.isDown &&
          //   !this.cursor?.down.isDown
          // ) {
          //   this.muchacho?.anims.play("inactivo", true);
          // }

          if (this.frameCount % 10 === 0) {
            this.game.renderer.snapshot((snapshot: any) => {
              const mapaDiv = document.getElementById("mapa");

              if (mapaDiv?.firstChild) {
                mapaDiv.replaceChild(snapshot, mapaDiv.firstChild);
              } else {
                mapaDiv?.appendChild(snapshot);
              }
              snapshot.draggable = false;
              mapaDiv!.style.overflow = "hidden";
              mapaDiv!.style.width = "100%";
              mapaDiv!.style.height = "100%";
            });
          }
          this.frameCount++;
        }
        moveCharacterTo(waypoint: Waypoint) {
          const { destino, direccion } = waypoint;
          this.muchacho?.anims.play(direccion, true);
          this.physics.moveTo(this.muchacho!, destino.x, destino.y, 100);

          const distance = Phaser.Math.Distance.Between(
            this.muchacho?.x!,
            this.muchacho?.y!,
            destino.x,
            destino.y
          );

          if (distance < 4) {
            this.muchacho?.body?.stop();
            this.muchacho?.setPosition(destino.x, destino.y);
            this.isMoving = false;
            this.advanceToNextWaypoint();
          }
        }
        handleSittingAction(waypoint: Waypoint) {
          if (waypoint.direccion === "sentadoSofa") {
            this.adjustCharacterForSitting(
              { x: waypoint.destino.x, y: waypoint.destino.y },
              "sentadoSofa"
            );
          } else if (waypoint.direccion === "sentadoEscritorio") {
            this.adjustCharacterForSitting(
              { x: waypoint.destino.x, y: waypoint.destino.y },
              "sentadoEscritorio"
            );
          }

          this.time.delayedCall(waypoint.duracion || 1000, () => {
            this.advanceToNextWaypoint();
          });
        }
        adjustCharacterForSitting(
          destino: {
            x: number;
            y: number;
          },
          action: string
        ) {
          this.muchacho?.body?.stop();
          this.muchacho?.setPosition(destino.x, destino.y);
          this.muchacho?.anims.play(action, true);
          if (action === "sentadoEscritorio") {
            this.muchacho!.depth = this.escritorio1!?.depth + 1;
          }
          this.isMoving = false;
        }
        handleAction(waypoint: Waypoint) {
          const { duracion, direccion } = waypoint;
          this.isMoving = true;
          if (direccion) this.muchacho?.anims.play(direccion, true);

          this.time.delayedCall(duracion!, () => {
            this.isMoving = false;
            this.advanceToNextWaypoint();
          });
        }
        advanceToNextWaypoint() {
          this.currentWaypointIndex++;
          if (this.currentWaypointIndex >= this.waypoints.length) {
            this.currentWaypointIndex = 0;
          }
        }
        bloqueoDinamico(direcion: Direcion): boolean {
          const numeroUmbral = 20;
          const bloqueos = [
            this.escritorio1,
            this.silla1,
            this.escritorio2,
            this.silla2,
            this.escritorio3,
            this.silla3,
            this.escritorio4,
            this.silla4,
            this.panelDeControl,
          ];

          const esBloqueado = bloqueos.some(
            (item: Phaser.GameObjects.Image | null | undefined) => {
              const escritorio4Y =
                this.muchacho!?.y > item!?.y - item!?.height - numeroUmbral &&
                this.muchacho!?.y < item!?.y - item!?.height + numeroUmbral;
              const escritorio4DerechoX =
                this.muchacho!?.x >= item!?.x - item!?.width - numeroUmbral &&
                this.muchacho!?.x <= item!?.x - item!?.width + numeroUmbral;
              const escritorio4IzquierdoX =
                this.muchacho!?.x <= item!?.x + numeroUmbral &&
                this.muchacho!?.x >= item!?.x - numeroUmbral;

              const escritorio4X =
                this.muchacho!?.x > item!?.x - item!?.width - numeroUmbral &&
                this.muchacho!?.y < item!?.x - item!?.width + numeroUmbral;

              const escritorio4AbajoY =
                this.muchacho!?.y >= item!?.y - item!?.height - numeroUmbral &&
                this.muchacho!?.y <= item!?.y - item!?.height + numeroUmbral;
              const escritorio4ArribaY =
                this.muchacho!?.y <=
                  item!?.y - item!?.height / 1.5 + numeroUmbral &&
                this.muchacho!?.y >=
                  item!?.y - item!?.height / 1.5 - numeroUmbral;

              if (direcion == Direcion.Izquierda) {
                if (escritorio4Y && escritorio4IzquierdoX) {
                  return true;
                }
              } else if (direcion == Direcion.Derecha) {
                if (escritorio4Y && escritorio4DerechoX) {
                  return true;
                }
              } else if (direcion == Direcion.Arriba) {
                if (escritorio4X && escritorio4ArribaY) {
                  return true;
                }
              } else if (direcion == Direcion.Abajo) {
                if (escritorio4X && escritorio4AbajoY) {
                  return true;
                }
              }

              return false;
            }
          );

          return !esBloqueado;
        }
      }

      const config: Phaser.Types.Core.GameConfig = {
        type: Phaser.AUTO,
        width: gameRef.current.clientWidth,
        height: gameRef.current.clientHeight,
        physics: {
          default: "arcade",
          arcade: {
            gravity: { y: 0, x: 0 },
            debug: false,
          },
        },
        scene: [CustomPhaserScene],
        parent: gameRef.current as HTMLElement,
      };

      const game = new Phaser.Game(config);

      return () => {
        game.destroy(true);
      };
    }
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//cdn.jsdelivr.net/npm/phaser@3.80.1/dist/phaser.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return {
    gameRef,
  };
};

export default useConfig;
