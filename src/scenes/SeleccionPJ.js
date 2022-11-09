import Button from "./button";
import { getPhrase } from "./Services/translations";

export default class SeleccionPJ extends Phaser.Scene {
  constructor() {
    super("SeleccionPJ");
  }

  create() {
    const contextoPJ = this; // Variable de contexto

    //Sprites volátiles de personajes
    let papernormalposedestroy;
    let rocknormalposedestroy;
    let scissorsnormalposedestroy;
    //Íconos de los personajes
    let rocklogodestroy;
    let paperlogodestroy;
    let scissorslogodestroy;
    //Posiciones de los sprites
    let posxjg1 = 350;
    let posyjg1 = 690;
    let posxjg2 = 1600;
    let posyjg2 = 690;
    //Selecciones de los personajes
    let seleccionj1 = 0;
    let seleccionj2 = 0;

    let lock1 = 0;
    let lock2 = 0;
    let lock3 = 0;
    let jugadoresselec = 0; //Cantidad de jugadores que seleccionaron
    let eligej1; // Texto "J1"

    // Colores de los personajes
    let colores = [0xc3efc2, 0xefc2c2, 0xc8c2ef];

    this.selecMusic = this.sound.add("MusicaSeleccion"); // Música de fondo

    //Configuración del sonido
    let musicConfig = {
      mute: false,
      volume: 1,
      rate: 1,
      detune: 1,
      seek: 1,
      loop: true,
      delay: 0,
    };

    this.selecMusic.play(musicConfig); // Reproduccion de la música con la configuración

    //Creación del fondo
    this.add
      .image(
        this.cameras.main.centerX,
        this.cameras.main.centerY,
        "selectfondo"
      )
      .setScale(0.6);

    //Textos
    contextoPJ.add.text(775, 50, getPhrase("Elige"), {
      font: "145px Fredoka One",
      stroke: "#000000",
      strokeThickness: 11,
    });

    eligej1 = contextoPJ.add.text(840, 270, getPhrase("J1"), {
      font: "180px Fredoka One",
      stroke: "#000000",
      strokeThickness: 11,
    });

    // Función para crear el botón "Comenzar"
    function crearVS() {
      let botonjugar = new Button(
        contextoPJ.cameras.main.centerX,
        contextoPJ.cameras.main.centerY * 1.65,
        getPhrase("Comenzar"),
        contextoPJ,
        () => {
          contextoPJ.selecMusic.stop();
          contextoPJ.sound.play("Click");
          contextoPJ.scene.start("juego", {
            seleccionj1: seleccionj1,
            seleccionj2: seleccionj2,
          });
        }
      );
    }

    //////   Botón del Personaje Rock   //////

    let rockmouse = this.add
      .image(
        this.cameras.main.centerX - 200,
        this.cameras.main.centerY + 120,
        "rockicon"
      )
      .setScale(0.1);
    rockmouse.setInteractive();

    // Cuando se le pasa el cursor arriba
    rockmouse.on("pointerover", (pointer, localX, localY) => {
      if (jugadoresselec < 2) {
        if (seleccionj1 == 0) {
          this.sound.play("RockHover");
          rockmouse.setDepth(1);
          rockmouse.setScale(0.125);
          rocknormalposedestroy = this.add
            .image(posxjg1, posyjg1, "rockatlas", 0)
            .setScale(1.05);
          rocknormalposedestroy.flipX = true;
          rocklogodestroy = this.add.image(320, 970, "rocklogo").setScale(0.27);
          lock2 = 1;
        } else {
          this.sound.play("RockHover");
          rockmouse.setDepth(1);
          rockmouse.setScale(0.125);

          rocknormalposedestroy = this.add
            .image(posxjg2, posyjg2, "rockatlas", 0)
            .setScale(1.05);
          rocklogodestroy = this.add
            .image(1620, 970, "rocklogo")
            .setScale(0.27);
          lock2 = 1;
        }
      }
      // Cuando se le quita el cursor de encima
      rockmouse.on("pointerout", (pointer, localX, localY) => {
        if (jugadoresselec < 2) {
          if (lock2 == 1) {
            rockmouse.setDepth(0);
            rockmouse.setScale(0.1);
            rocknormalposedestroy.destroy();
            rocklogodestroy.destroy();

            lock2 = 0;
          }
        }
      });
    });
    // Cuando se lo clickea
    rockmouse.on("pointerdown", (pointer, localX, localY) => {
      if (jugadoresselec < 2) {
        this.sound.play("RockClick");
        if (seleccionj1 == 0) {
          rockmouse.destroy();

          let fondo1 = this.add
            .image(
              this.cameras.main.centerX,
              this.cameras.main.centerY,
              "fondoselec1"
            )
            .setScale(0.6);

          fondo1.tint = colores[0];
          this.add
            .image(posxjg1, 590, "rockatlas", 1)
            .setScale(1.05)
            .setDepth(0);
          let rockmouse2 = this.add
            .image(
              this.cameras.main.centerX - 200,
              this.cameras.main.centerY + 120,
              "rockicon2"
            )
            .setScale(0.1);
          this.add.image(320, 970, "rocklogo").setScale(0.27);
          seleccionj1 = 1;
          jugadoresselec++;
          rocknormalposedestroy.destroy();
          EligeJugador();
        } else {
          rockmouse.destroy();

          let fondo2 = this.add
            .image(
              this.cameras.main.centerX,
              this.cameras.main.centerY,
              "fondoselec2"
            )
            .setScale(0.6);
          let rockmouse2 = this.add
            .image(
              this.cameras.main.centerX - 200,
              this.cameras.main.centerY + 120,
              "rockicon2"
            )
            .setScale(0.1);
          fondo2.tint = colores[0];
          this.add
            .image(posxjg2, 590, "rockatlas", 1)
            .setScale(1.05)
            .setDepth(0).flipX = true;
          this.add.image(1620, 970, "rocklogo").setScale(0.27);
          scissorsmouse.setDepth(1);
          seleccionj2 = 1;
          jugadoresselec++;
          rocknormalposedestroy.destroy();
          crearVS();
        }
      }

      EligeJugador();
    });

    //////   Botón del Personaje Papers   //////
    let papersmouse = this.add
      .image(
        this.cameras.main.centerX,
        this.cameras.main.centerY + 120,
        "papersicon"
      )
      .setScale(0.1);
    papersmouse.setInteractive();

    // Cuando se le pasa el cursor arriba
    papersmouse.on("pointerover", (pointer, localX, localY) => {
      if (jugadoresselec < 2) {
        if (seleccionj1 == 0) {
          this.sound.play("PapersHover");
          papersmouse.setDepth(1);
          papersmouse.setScale(0.125);

          papernormalposedestroy = this.add
            .image(posxjg1, posyjg1, "papersatlas", 0)
            .setScale(1.05);
          papernormalposedestroy.flipX = true;
          paperlogodestroy = this.add
            .image(300, 970, "paperlogo")
            .setScale(0.27);
          lock1 = 1;
        } else {
          this.sound.play("PapersHover");
          papersmouse.setDepth(1);
          papersmouse.setScale(0.125);

          papernormalposedestroy = this.add
            .image(posxjg2, posyjg2, "papersatlas", 0)
            .setScale(1.05);
          paperlogodestroy = this.add
            .image(1620, 970, "paperlogo")
            .setScale(0.27);
          lock1 = 1;
        }
      }
      // Cuando se le quita el cursor de encima
      papersmouse.on("pointerout", (pointer, localX, localY) => {
        if (jugadoresselec < 2) {
          if (lock1 == 1) {
            papersmouse.setDepth(0);
            papersmouse.setScale(0.1);
            papernormalposedestroy.destroy();
            paperlogodestroy.destroy();

            lock1 = 0;
          }
        }
      });
    });

    // Cuando se lo clickea
    papersmouse.on("pointerdown", (pointer, localX, localY) => {
      papersmouse.setDepth(2);
      if (jugadoresselec < 2) {
        this.sound.play("PapersClick");
        if (seleccionj1 == 0) {
          papersmouse.destroy();

          let fondo1 = this.add
            .image(
              this.cameras.main.centerX,
              this.cameras.main.centerY,
              "fondoselec1"
            )
            .setScale(0.6);
          let papersmouse2 = this.add
            .image(
              this.cameras.main.centerX,
              this.cameras.main.centerY + 120,
              "papersicon2"
            )
            .setScale(0.1);
          fondo1.tint = colores[1];
          this.add.image(posxjg1, posyjg1, "papersatlas", 1).setScale(0.9);
          this.add.image(350, 970, "paperlogo").setScale(0.27);

          seleccionj1 = 2;
          jugadoresselec++;
          papernormalposedestroy.destroy();
          rockmouse.setDepth(1);
          EligeJugador();
        } else {
          papersmouse.destroy();

          let fondo2 = this.add
            .image(
              this.cameras.main.centerX,
              this.cameras.main.centerY,
              "fondoselec2"
            )
            .setScale(0.6);
          let papersmouse2 = this.add
            .image(
              this.cameras.main.centerX,
              this.cameras.main.centerY + 120,
              "papersicon2"
            )
            .setScale(0.1);
          fondo2.tint = colores[1];
          this.add
            .image(posxjg2, posyjg2, "papersatlas", 1)
            .setScale(0.9).flipX = true;
          this.add.image(1620, 970, "paperlogo").setScale(0.27);
          scissorsmouse.setDepth(1);
          seleccionj2 = 2;
          jugadoresselec++;
          papernormalposedestroy.destroy();
          crearVS();
        }
      }
      EligeJugador();
    });

    //////   Botón del Personaje Scissors   //////

    let scissorsmouse = this.add
      .image(
        this.cameras.main.centerX + 200,
        this.cameras.main.centerY + 120,
        "scissorsicon"
      )
      .setScale(0.1);
    scissorsmouse.setInteractive();

    // Cuando se le pasa el cursor arriba
    scissorsmouse.on("pointerover", (pointer, localX, localY) => {
      if (jugadoresselec < 2) {
        if (seleccionj1 == 0) {
          this.sound.play("ScissorsHover");
          scissorsmouse.setDepth(1);
          scissorsmouse.setScale(0.125);
          scissorsnormalposedestroy = this.add
            .image(posxjg1, posyjg1, "scissorsatlas", 0)
            .setScale(0.9);
          scissorslogodestroy = this.add
            .image(320, 970, "scissorslogo")
            .setScale(0.27);
          lock3 = 1;
        } else {
          this.sound.play("ScissorsHover");
          scissorsmouse.setDepth(1);
          scissorsmouse.setScale(0.125);
          scissorsnormalposedestroy = this.add
            .image(posxjg2, posyjg2, "scissorsatlas", 0)
            .setScale(0.9);
          scissorsnormalposedestroy.flipX = true;
          scissorslogodestroy = this.add
            .image(1620, 970, "scissorslogo")
            .setScale(0.27);
          lock3 = 1;
        }
      }
      // Cuando se le quita el cursor de encima
      scissorsmouse.on("pointerout", (pointer, localX, localY) => {
        if (jugadoresselec < 2) {
          if (lock3 == 1) {
            scissorsmouse.setDepth(0);
            scissorsmouse.setScale(0.1);
            scissorsnormalposedestroy.destroy();
            scissorslogodestroy.destroy();
            lock3 = 0;
          }
        }
      });

      // Cuando se lo clickea
      scissorsmouse.on("pointerdown", (pointer, localX, localY) => {
        scissorsmouse.setDepth(2);
        if (jugadoresselec < 2) {
          this.sound.play("ScissorsClick");
          if (seleccionj1 == 0) {
            let fondo1 = this.add
              .image(
                this.cameras.main.centerX,
                this.cameras.main.centerY,
                "fondoselec1"
              )
              .setScale(0.6);
            let scissorsmouse2 = this.add
              .image(
                this.cameras.main.centerX + 200,
                this.cameras.main.centerY + 120,
                "scissorsicon2"
              )
              .setScale(0.1);
            fondo1.tint = colores[2];
            this.add.image(posxjg1, posyjg1, "scissorsatlas", 1).setScale(0.9);
            this.add.image(300, 970, "scissorslogo").setScale(0.27);
            rockmouse.setDepth(1);
            scissorsmouse.destroy();
            seleccionj1 = 3;
            jugadoresselec++;
            scissorsnormalposedestroy.destroy();
            EligeJugador();
          } else {
            scissorsmouse.destroy();

            let fondo2 = this.add
              .image(
                this.cameras.main.centerX,
                this.cameras.main.centerY,
                "fondoselec2"
              )
              .setScale(0.6);
            let scissorsmouse2 = this.add
              .image(
                this.cameras.main.centerX + 200,
                this.cameras.main.centerY + 120,
                "scissorsicon2"
              )
              .setScale(0.1);
            fondo2.tint = colores[2];
            this.add
              .image(posxjg2, posyjg2, "scissorsatlas", 1)
              .setScale(0.9).flipX = true;
            this.add.image(1620, 970, "scissorslogo").setScale(0.27);
            scissorsmouse.setDepth(1);
            seleccionj2 = 3;
            jugadoresselec++;
            scissorsnormalposedestroy.destroy();
            crearVS();
          }
        }
        EligeJugador();
      });
    });

    // Función para cambiar el texto "J1" a "J2"
    function EligeJugador() {
      if (jugadoresselec == 1) {
        contextoPJ.add.text(835, 270, getPhrase("J2"), {
          font: "180px Fredoka One",
          stroke: "#000000",
          strokeThickness: 11,
        });
        eligej1.destroy();
      }
    }
  }
}
