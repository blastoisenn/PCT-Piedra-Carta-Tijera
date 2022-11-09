import Button from "./button";
import { getPhrase } from "./Services/translations";

export default class MenuPrincipal extends Phaser.Scene {
  constructor() {
    super("MenuPrincipal");
  }

  create() {
    let cerrar; // Símbolo para cerrar los Pop-ups
    this.menuMusic = this.sound.add("MusicaMenu"); // Música de fondo
    // Configuración del sonido
    let musicConfig = {
      mute: false,
      volume: 1,
      rate: 1,
      detune: 1,
      seek: 1,
      loop: true,
      delay: 0,
    };
	
    this.menuMusic.play(musicConfig); //Reproducir música con la configuración de sonido

    //Fondo y Logo
    this.add
      .image(this.cameras.main.centerX, this.cameras.main.centerY, "FondoMenu")
      .setScale(0.6);
    this.add
      .image(
        this.cameras.main.centerX,
        this.cameras.main.centerY * 0.45,
        "Logo"
      )
      .setScale(0.5);

    //Boton Jugar
    let botonjugar = new Button(
      this.cameras.main.centerX,
      this.cameras.main.centerY * 1.25,
      getPhrase("Jugar"),
      this,
      () => {
        this.sound.play("Click");
        this.menuMusic.stop(), this.scene.start("SeleccionPJ");
      }
    );

    //Boton Cómo Jugar
    let botoncomojugar = new Button(
      this.cameras.main.centerX,
      this.cameras.main.centerY * 1.45,
      getPhrase("¿Como Jugar?"),
      this,
      () => {
		this.sound.play("CartaFlip");
        let tventana = this.add
          .image(
            this.cameras.main.centerX,
            this.cameras.main.centerY,
            "tutorial"
          )
          .setScale(0.45);
        tventana.setInteractive();
        tventana.on("pointerdown", (pointer, localX, localY) => {});

        // Símbolo Cerrar
        cerrar = this.add
          .image(
            this.cameras.main.centerX * 1.7,
            this.cameras.main.centerY * 0.35,
            "X"
          )
          .setScale(0.1);

        // Título del Pop-up
        let textotut7 = this.add.text(700, 175, getPhrase("¿Como Jugar?"), {
          font: "80px Fredoka One",
          stroke: "#000000",
          strokeThickness: 11,
        });

        // Texto superior del Pop-up
        let textotut1 = this.add.text(300, 300, getPhrase("Memoriza"), {
          font: "60px Fredoka One",
          stroke: "#000000",
          strokeThickness: 11,
        });
        let textotut2 = this.add.text(845, 300, getPhrase("Cambia"), {
          font: "60px Fredoka One",
          stroke: "#000000",
          strokeThickness: 11,
        });
        let textotut3 = this.add.text(1325, 300, getPhrase("Batalla"), {
          font: "60px Fredoka One",
          stroke: "#000000",
          strokeThickness: 11,
        });

        // Texto inferior del Pop-up
        let textotut4 = this.add.text(
          250,
          750,
          getPhrase("las cartas en el campo y las manos"),
          { font: "26px Fredoka One", stroke: "#000000", strokeThickness: 11 }
        );
        let textotut5 = this.add.text(
          782,
          750,
          getPhrase("las cartas de tu mano y campo"),
          { font: "26px Fredoka One", stroke: "#000000", strokeThickness: 11 }
        );
        let textotut6 = this.add.text(
          1262,
          750,
          getPhrase("contra la mano de tu oponente"),
          { font: "26px Fredoka One", stroke: "#000000", strokeThickness: 11 }
        );

        // Funcionalidad del botón Cerrar
        cerrar.setInteractive();
        cerrar.on("pointerdown", (pointer, localX, localY) => {
          this.sound.play("Click");
          textotut1.destroy();
          textotut2.destroy();
          textotut3.destroy();
          textotut4.destroy();
          textotut5.destroy();
          textotut6.destroy();
          textotut7.destroy();
          tventana.destroy();
          cerrar.destroy();
        }); })

        // Botón Créditos
        let botoncreaditos = new Button(
          this.cameras.main.centerX,
          this.cameras.main.centerY * 1.65,
          getPhrase("Créditos"),
          this,
          () => {
            this.sound.play("CartaFlip");
            let tventana = this.add
              .image(
                this.cameras.main.centerX,
                this.cameras.main.centerY,
                "tutorial2"
              )
              .setScale(0.45);
            tventana.setInteractive();
            tventana.on("pointerdown", (pointer, localX, localY) => {});

            // Símbolo Cerrar
            cerrar = this.add
              .image(
                this.cameras.main.centerX * 1.7,
                this.cameras.main.centerY * 0.35,
                "X"
              )
              .setScale(0.1);

            // Título del Pop-Up
            let textotut11 = this.add.text(800, 175, getPhrase("Créditos"), {
              font: "80px Fredoka One",
              stroke: "#000000",
              strokeThickness: 11,
            });

            // Texto superior del Pop-Up
            let textotut1 = this.add.text(300, 300, getPhrase("Programador"), {
              font: "60px Fredoka One",
              stroke: "#000000",
              strokeThickness: 11,
            });
            let textotut2 = this.add.text(850, 300, getPhrase("Artista"), {
              font: "60px Fredoka One",
              stroke: "#000000",
              strokeThickness: 11,
            });
            let textotut3 = this.add.text(1300, 300, getPhrase("Diseñador"), {
              font: "60px Fredoka One",
              stroke: "#000000",
              strokeThickness: 11,
            });

            // Texto inferior del Pop-Up
            let textotut4 = this.add.text(305, 600, "Santiago Airaudo", {
              font: "40px Fredoka One",
              stroke: "#000000",
              strokeThickness: 11,
            });
            let textotut5 = this.add.text(800, 600, "Nicolás Duverne", {
              font: "40px Fredoka One",
              stroke: "#000000",
              strokeThickness: 11,
            });
            let textotut6 = this.add.text(1280, 600, "Valentín Fischer", {
              font: "40px Fredoka One",
              stroke: "#000000",
              strokeThickness: 11,
            });

            // Texto pequeño del Pop-Up
            let textotut7 = this.add.text(
              250,
              750,
              getPhrase("Fuente") + ": Fredoka One (Google Fonts)",
              {
                font: "40px Fredoka One",
                stroke: "#000000",
                strokeThickness: 11,
              }
            );
            let textotut8 = this.add.text(
              250,
              800,
              getPhrase("Música") +
                ": Take a Stance (Sven Lindvall, Daniel Fridell), Mirror Waltz (Soara),",
              {
                font: "40px Fredoka One",
                stroke: "#000000",
                strokeThickness: 11,
              }
            );
            let textotut9 = this.add.text(
              250,
              850,
              "The Cast (Wendy Marcini), Lalala (Hara Noda), Dumb as a Rock",
              {
                font: "40px Fredoka One",
                stroke: "#000000",
                strokeThickness: 11,
              }
            );
            let textotut10 = this.add.text(
              250,
              900,
              "(Honeycutts), Sneaky Pete (Lennon Hutton), Capos (Azucares)",
              {
                font: "40px Fredoka One",
                stroke: "#000000",
                strokeThickness: 11,
              }
            );

            // Íconos del Pop-Up
            let icon1 = this.add
              .image(
                this.cameras.main.centerX,
                this.cameras.main.centerY * 0.93,
                "scissorsicon"
              )
              .setScale(0.1);
            let icon2 = this.add
              .image(
                this.cameras.main.centerX * 0.5,
                this.cameras.main.centerY * 0.93,
                "papersicon"
              )
              .setScale(0.1);
            let icon3 = this.add
              .image(
                this.cameras.main.centerX * 1.5,
                this.cameras.main.centerY * 0.93,
                "rockicon"
              )
              .setScale(0.1);

            // Funcionalidad del botón Cerrar
            cerrar.setInteractive();
            cerrar.on("pointerdown", (pointer, localX, localY) => {
              this.sound.play("Click");
              tventana.destroy();
              textotut1.destroy();
              textotut2.destroy();
              textotut3.destroy();
              textotut4.destroy();
              textotut5.destroy();
              textotut6.destroy();
              textotut7.destroy();
              textotut8.destroy();
              textotut9.destroy();
              textotut10.destroy();
              textotut11.destroy();
              icon1.destroy();
              icon2.destroy();
              icon3.destroy();
              cerrar.destroy();
			  
            });
          }
        );

        
      


    // Botón de Sonido
    let BotonCfg = this.add
      .image(
        this.cameras.main.centerX * 0.1,
        this.cameras.main.centerY * 0.2,
        "volumen"
      )
      .setScale(0.15);

    // Funcionalidad del botón de Sonido
    BotonCfg.setInteractive();
    BotonCfg.on("pointerdown", (pointer, localX, localY) => {
      if (this.sound.mute == false) {
        this.sound.mute = true;
        BotonCfg = this.add
          .image(
            this.cameras.main.centerX * 0.1,
            this.cameras.main.centerY * 0.2,
            "volumen2"
          )
          .setScale(0.15);
      } else {
        this.sound.mute = false;
        BotonCfg = this.add
          .image(
            this.cameras.main.centerX * 0.1,
            this.cameras.main.centerY * 0.2,
            "volumen"
          )
          .setScale(0.15);
      }
    });
  }
}
