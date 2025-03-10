export default class PantallaCarga extends Phaser.Scene {
  constructor() {
    super("PantallaCarga");
  }

  preload() {
    // Barra de Carga
    let progressBar = this.add.graphics();
    let progressBox = this.add.graphics();
    progressBox.fillStyle(0x2b2829, 0.8);
    progressBox.fillRect(630, 590, 620, 50);

    let width = this.cameras.main.width;
    let height = this.cameras.main.height;
    let loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      style: {
        font: "80px Fredoka One",
      },
    });

    loadingText.setOrigin(0.5, 0.5);

    let percentText = this.make.text({
      x: width / 2.04,
      y: height / 2 + 74,
      text: "0%",
      style: {
        fontSize: "20px",
        color: "#fff",
        fontFamily: "Fredoka One",
      },
    });

    percentText.setOrigin(0.5, 0.5);

    this.load.on("progress", function (value) {
      console.log(value);
      // @ts-ignore
      percentText.setText(parseInt(value * 100) + "%");
      progressBar.clear();
      progressBar.fillStyle(0xc91429, 1);
      progressBar.fillRect(640, 600, 600 * value, 30);
    });

    this.load.on("progress", function (value) {
      console.log(value);
    });

    this.load.on("fileprogress", function (file) {
      console.log(file.src);
    });
    this.load.on("complete", function () {
      console.log("complete");
      progressBar.destroy();
      progressBox.destroy();
    });

    // Carga de Sprites
    this.load.spritesheet("cartassprites", "assets/cartassprites.png", {
      frameWidth: 150,
      frameHeight: 215,
    });
    this.load.spritesheet("rockatlas", "assets/RockAtlas.png", {
      frameWidth: 1250,
      frameHeight: 1250,
    });
    this.load.spritesheet("papersatlas", "assets/PapersAtlas.png", {
      frameWidth: 1250,
      frameHeight: 1250,
    });
    this.load.spritesheet("scissorsatlas", "assets/ScissorsAtlas.png", {
      frameWidth: 1250,
      frameHeight: 1250,
    });

    // Carga de Imágenes
    this.load.image("X", "assets/X.png");
    this.load.image("ayuda", "assets/ayuda.png");
    this.load.image("tutorial", "assets/tutorial.png");
    this.load.image("tutorial2", "assets/tutorial2.png");
    this.load.image("rocklogo", "assets/rocklogo.png");
    this.load.image("scissorslogo", "assets/scissorslogo.png");
    this.load.image("paperlogo", "assets/paperlogo.png");
    this.load.image("fondoselec1", "assets/fondoselec1.png");
    this.load.image("fondoselec2", "assets/fondoselec2.png");
    this.load.image("cartaselect1", "assets/cartaselect1.png");
    this.load.image("cartaselect2", "assets/cartaselect2.png");
    this.load.image("switchboton", "assets/confirmarboton.png");
    this.load.image("flipboton", "assets/loadgif.png");
    this.load.image("background", "assets/bg.png");
    this.load.image("block", "assets/block.png");
    this.load.image("papersicon", "assets/papersicon.png");
    this.load.image("rockicon", "assets/rockicon.png");
    this.load.image("scissorsicon", "assets/scissorsicon.png");
    this.load.image("papersicon2", "assets/papersicon2.png");
    this.load.image("rockicon2", "assets/rockicon2.png");
    this.load.image("scissorsicon2", "assets/scissorsicon2.png");
    this.load.image("selectfondo", "assets/selectfondo.png");
    this.load.image("papernormalpose", "assets/papernormalpose.png");
    this.load.image("scissorsnormalpose", "assets/scissorsnormalpose.png");
    this.load.image("rocknormalpose", "assets/rocknormalpose.png");
    this.load.image("VS", "assets/VS.png");
    this.load.image("FondoMenu", "assets/menufondo.png");
    this.load.image("Logo", "assets/logo.png");
    this.load.image("BotonConfig", "assets/Ajustes.png");
    this.load.image("Fondoj1", "assets/gmbg1.png");
    this.load.image("Fondoj2", "assets/gmbg2.png");
    this.load.image("FondoGanador", "assets/winbg.png");
    this.load.image("FondoPerdedor", "assets/losebg.png");
    this.load.image("Puntos", "assets/dotdotdot.png");
    this.load.image("volumen", "assets/volumen.png");
    this.load.image("volumen2", "assets/volumen2.png");

    // Carga de Sonidos
    this.load.audio("MusicaMenu", "assets/sounds/Música Menú Principal.mp3");
    this.load.audio("CartaFlip", "assets/sounds/Card_Flip.mp3");
    this.load.audio("MusicaEmpate", "assets/sounds/MusicaEmpate.mp3");
    this.load.audio("RockWin", "assets/sounds/RockWin.mp3");
    this.load.audio("PapersWin", "assets/sounds/PapersWin.mp3");
    this.load.audio("ScissorsWin", "assets/sounds/ScissorsWin.mp3");
    this.load.audio("MusicaSeleccion", "assets/sounds/MusicaFondo.mp3");
    this.load.audio("MusicaJuego", "assets/sounds/MusicaFondo2.mp3");
    this.load.audio("Click", "assets/sounds/MouseClick.mp3");
    this.load.audio("RockHover", "assets/sounds/RockHover.wav");
    this.load.audio("RockClick", "assets/sounds/RockClick.wav");
    this.load.audio("PapersHover", "assets/sounds/PapersHover.mp3");
    this.load.audio("PapersClick", "assets/sounds/PapersClick.mp3");
    this.load.audio("ScissorsHover", "assets/sounds/ScissorsHover.wav");
    this.load.audio("ScissorsClick", "assets/sounds/ScissorsClick.wav");
  }

  // Pasaje a la Selección de Idioma
  create() {
    this.scene.start("Idioma");
  }
}
