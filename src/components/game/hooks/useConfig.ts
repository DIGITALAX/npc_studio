"use client";

import { useEffect, useRef } from "react";
import Phaser from "phaser";
import { INFURA_GATEWAY } from "../../../../lib/constants";

const useConfig = () => {
  const gameRef = useRef<HTMLElement | undefined>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && gameRef.current) {
      class CustomPhaserScene extends Phaser.Scene {
        muchacho?: Phaser.Physics.Arcade.Sprite | null;
        escritorio1?: Phaser.GameObjects.Image | null;
        escritorio2?: Phaser.GameObjects.Image | null;
        escritorio3?: Phaser.GameObjects.Image | null;
        escritorio4?: Phaser.GameObjects.Image | null;
        panelDeControl: Phaser.GameObjects.Image | null;
        cursor?: Phaser.Types.Input.Keyboard.CursorKeys | null;

        constructor() {
          super();
          this.muchacho = null;
          this.cursor = null;
          this.escritorio1 = null;
          this.escritorio2 = null;
          this.escritorio3 = null;
          this.escritorio4 = null;
          this.panelDeControl = null;
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
            `${INFURA_GATEWAY}/ipfs/QmPN6q9w8aHoBcuZ5dpv8R2NMttGBg1Ep5EViK52s2kqtR`
          );
          this.load.image(
            "escritorio2",
            `${INFURA_GATEWAY}/ipfs/QmUXSKNLKgA4z9AKVtzjouSRWBdkWQ6Qktnx6CC1qEYp9m`
          );
          this.load.image(
            "escritorio3",
            `${INFURA_GATEWAY}/ipfs/QmdzbavGrq9Ysny1d3jUuZXcQ5WBRL2NQjE6zMZmMd8Vda`
          );
          this.load.image(
            "escritorio4",
            `${INFURA_GATEWAY}/ipfs/QmdDnUZMahnzy1UaS9hLKdGyuXuu1u2cyLEimyPvFUsWoS`
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
            `${INFURA_GATEWAY}/ipfs/QmZrkeyDHE32gx7nnzjpgMy1hEy7kZu59rxYjuJKcyiqZo`,
            {
              frameWidth: 60.8,
              frameHeight: 61.8,
              margin: 0,
              startFrame: 0,
              endFrame: 64,
            }
          );
        }

        create() {
          const fondo = this.add.image(0, 0, "fondo").setOrigin(0, 0);
          fondo.displayWidth = window.innerWidth;
          fondo.displayHeight = window.innerHeight;
          const pared = this.physics.add
            .staticImage(fondo.width, 0, "pared")
            .setOrigin(0.62, 0)
            .setScale(1.1);
          pared.scaleX = 1.3;
          pared.body
            .setSize(pared.width, pared.height / 1.4, false)
            .setOffset(-0.5, 0);
          const nevera = this.physics.add
            .staticImage(0, 0, "nevera")
            .setOrigin(0, 0)
            .setScale(1.1);
          nevera.scaleX = 1.4;
          nevera.body
            .setSize(nevera.width * 2, nevera.height, false)
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
            .setSize(maquina.width, maquina.height / 2, false)
            .setOffset(maquina.width, maquina.height / 2);
          const alfombra = this.add
            .image(fondo.width / 4, fondo.height / 2, "alfombra")
            .setOrigin(0, 0)
            .setScale(1.2);
          alfombra.scaleX = 1.5;
          const sofaUno = this.physics.add
            .staticImage(fondo.width / 1.5, pared.height / 1.4, "sofaUno")
            .setOrigin(0, 0)
            .setScale(1.2);
          sofaUno.body
            .setSize(sofaUno.width, sofaUno.height, false)
            .setOffset(sofaUno.width / 2.4, -sofaUno.height / 1.3);
          const sofaDos = this.physics.add
            .staticImage(fondo.width / 0.9, pared.height / 1.4, "sofaDos")
            .setOrigin(0, 0)
            .setScale(1.2);
          sofaDos.body
            .setSize(sofaUno.width, sofaUno.height, false)
            .setOffset(sofaUno.width / 2.4, -sofaUno.height / 1.3);
          this.panelDeControl = this.add
            .image(
              window.innerWidth,
              window.innerHeight / 1.1,
              "panelDeControl"
            )
            .setOrigin(1, 1);

          this.escritorio1 = this.add
            .image(
              window.innerWidth - 20,
              window.innerHeight / 2.2,
              "escritorio1"
            )
            .setOrigin(1, 1);
          this.escritorio2 = this.add
            .image(
              window.innerWidth - 20,
              window.innerHeight / 1.6,
              "escritorio2"
            )
            .setOrigin(1, 1);
          this.escritorio3 = this.add
            .image(
              window.innerWidth - (this.escritorio1.width + 20),
              window.innerHeight / 2.2,
              "escritorio3"
            )
            .setOrigin(1, 1);
          this.escritorio4 = this.add
            .image(
              window.innerWidth - (this.escritorio2.width + 20),
              window.innerHeight / 1.6,
              "escritorio4"
            )
            .setOrigin(1, 1);

          const arcade = this.physics.add
            .staticImage(window.innerWidth, window.innerHeight, "arcade")
            .setOrigin(1, 1)
            .setDepth(10000);
          const telefono = this.physics.add
            .staticImage(0, window.innerHeight, "telefono")
            .setOrigin(0, 1)
            .setDepth(10000);
          telefono.body
            .setSize(telefono.width, telefono.height, false)
            .setOffset(0, -telefono.height / 2);
          const capsula = this.physics.add
            .staticImage(0, window.innerHeight - telefono.height, "capsula")
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
            .setScale(3.3)
            .setOrigin(1, 1);

          const audio1 = this.add
            .image(window.innerWidth / 2, window.innerHeight, "audio1")
            .setOrigin(1, 1)
            .setDepth(10000);
          this.add
            .image(
              window.innerWidth / 2 + audio1.width,
              window.innerHeight,
              "audio2"
            )
            .setOrigin(1, 1)
            .setDepth(10000);
          const planta1 = this.add
            .image(window.innerWidth / 2.5, window.innerHeight, "planta1")
            .setOrigin(1, 1)
            .setDepth(10000);
          this.add
            .image(
              window.innerWidth / 2.5 - planta1.width,
              window.innerHeight,
              "planta2"
            )
            .setOrigin(1, 1)
            .setDepth(10000);

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

          this.anims.create({
            key: "idle",
            frames: this.anims.generateFrameNumbers("muchacho", {
              start: 8,
              end: 15,
            }),
            frameRate: 5,
            repeat: -1,
          });
          this.anims.create({
            key: "up",
            frames: this.anims.generateFrameNumbers("muchacho", {
              start: 24,
              end: 32,
            }),
            frameRate: 5,
            repeat: -1,
          });
          this.anims.create({
            key: "left",
            frames: this.anims.generateFrameNumbers("muchacho", {
              start: 33,
              end: 41,
            }),
            frameRate: 5,
            repeat: -1,
          });
          this.anims.create({
            key: "down",
            frames: this.anims.generateFrameNumbers("muchacho", {
              start: 42,
              end: 50,
            }),
            frameRate: 5,
            repeat: -1,
          });
          this.anims.create({
            key: "right",
            frames: this.anims.generateFrameNumbers("muchacho", {
              start: 51,
              end: 59,
            }),
            frameRate: 5,
            repeat: -1,
          });
          this.anims.create({
            key: "diagonalRightUp",
            frames: this.anims.generateFrameNumbers("muchacho", {
              start: 0,
              end: 7,
            }),
            frameRate: 5,
            repeat: -1,
          });
          this.anims.create({
            key: "diagonalLeftDown",
            frames: this.anims.generateFrameNumbers("muchacho", {
              start: 16,
              end: 23,
            }),
            frameRate: 5,
            repeat: -1,
          });

          this.muchacho.anims.play("idle");

          this.add.graphics().setAlpha(0.75);
          this.physics.world.createDebugGraphic();
        }

        update() {
          if (this.cursor?.left.isDown) {
            this.muchacho?.setVelocityX(-160);
            this.muchacho?.anims.play("left", true);
          } else if (this.cursor?.right.isDown) {
            this.muchacho?.setVelocityX(160);
            this.muchacho?.anims.play("right", true);
          } else {
            this.muchacho?.setVelocityX(0);
          }

          if (this.cursor?.up.isDown) {
            this.muchacho?.setVelocityY(-160);
            this.muchacho?.anims.play("up", true);
          } else if (this.cursor?.down.isDown) {
            this.muchacho?.setVelocityY(160);
            this.muchacho?.anims.play("down", true);
          } else {
            this.muchacho?.setVelocityY(0);
          }

          if (
            !this.cursor?.left.isDown &&
            !this.cursor?.right.isDown &&
            !this.cursor?.up.isDown &&
            !this.cursor?.down.isDown
          ) {
            this.muchacho?.anims.play("idle");
          }

          this.muchacho!.depth = (this.muchacho!?.y +
            this.muchacho!?.height / 2) as number;
          this.escritorio1!.depth = this.escritorio1?.y as number;
          this.escritorio2!.depth = this.escritorio2?.y as number;
          this.escritorio3!.depth = this.escritorio3?.y as number;
          this.escritorio4!.depth = this.escritorio4?.y as number;
          this.panelDeControl!.depth = this.panelDeControl?.y as number;
        }
      }

      const config: Phaser.Types.Core.GameConfig = {
        type: Phaser.AUTO,
        width: window.innerWidth,
        height: window.innerHeight,
        physics: {
          default: "arcade",
          arcade: {
            gravity: { y: 0, x: 0 },
            debug: true,
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
