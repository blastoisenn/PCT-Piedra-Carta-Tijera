import Phaser from "phaser";
import Carta from "./Cartas";
import Jugador from "./Jugador";
import Tablero from "./Tablero";

// Manejador de eventos centralizados para comunicacion de componentes

// Importacion
//import { sharedInstance as events } from './EventCenter'

// Emisor de mensaje de difusion
// Recibe el nombre del mensaje y los valores de parametro
// events.emit('health-changed', this.health)

// Receptor de mensaje, por ejemplo escena de UI
// Recibe el nombre del mensaje y una funcion callback a ejecutar
// events.on('health-changed', this.handleHealthChanged, this)

export default class HelloWorldScene extends Phaser.Scene {
  constructor() {
    super("hello-world");
  }

  preload() {

    let progressBar = this.add.graphics();
		let progressBox = this.add.graphics();
		progressBox.fillStyle(0x2b2829, 0.8);
		progressBox.fillRect(630, 590, 620, 50);
	
		let width = this.cameras.main.width;
		let height = this.cameras.main.height;
		let loadingText = this.make.text({
		x: width / 2,
		y: height / 2 - 50,
		text: 'CARGANDO...',
		style: {
			font: '80px Impact'
			
			
		}
	});
	loadingText.setOrigin(0.5, 0.5);
	
	let percentText = this.make.text({
	  x: width / 2.04,
	  y: height / 2 + 74,
	  text: '0%',
  
	  style: {
		  font: '20px Happy Chicken',
      color: '#fff'
		  
		  
	  }
	});
	percentText.setOrigin(0.5, 0.5);
	
	
		this.load.on('progress', function (value) {
		  console.log(value);
      
		  percentText.setText(parseInt (value, 100) + '%');
		  progressBar.clear();
		  progressBar.fillStyle(0xc91429, 1);
		  progressBar.fillRect(640, 600, 600 * value, 30);
	  });
	  
		
		this.load.on('progress', function (value) {
		  console.log(value);
	  });
				  
	  this.load.on('fileprogress', function (file) {
		  console.log(file.src);
	  });
	  this.load.on('complete', function () {
		  console.log('complete');
		  progressBar.destroy();
	progressBox.destroy();
	  });
		
	  
	  this.load.spritesheet("cartassprites", "assets/cartassprites.png", {
		frameWidth: 150,
		frameHeight: 215,
		 });
	this.load.image("cartaselect1", "assets/cartaselect1.png");
    this.load.image("cartaselect2", "assets/cartaselect2.png");
    this.load.image("switchboton", "assets/confirmarboton.png");
    this.load.image("flipboton", "assets/loadgif.png");
    this.load.image("background", "assets/bg.png");
    this.load.image("block", "assets/block.png");
	
}

  
  create() {
    const contexto2=this;
    const cartas = [];
    var tiponuevo;
    var tiposr = 8;
    var tipop;
    const tipos = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2].sort((a, b) => 0.5 - Math.random());
    const pos = [
      { x: 150, y: 150 },
      { x: 300, y: 150 },
      { x: 400, y: 150 },
      { x: 500, y: 150 },
      { x: 650, y: 150 },
      { x: 150, y: 275 },
      { x: 300, y: 275 },
      { x: 400, y: 275 },
      { x: 500, y: 275 },
			{ x: 650, y: 275 },
			{ x: 150, y: 400 },
      { x: 300, y: 400 },
      { x: 400, y: 400 },
      { x: 500, y: 400 },
			{ x: 650, y: 400 },
    ];

    let manoturno=150;
    let block;
    let blockx=650;
    let turno=1;
    let turnoj=1;
    let seleccion1
    let seleccion2
    let posicion1 = 0;
    let posicion2 = 0;
		let cartaanterior
    let posicionmarcox = 1000;
    let posicionmarcoy = 1000;
    let cartasselec = 0;
    let lock = 1;
    this.add.image(500, 500, "background").setScale(4);

    const marco1 = this.physics.add
      .image(10000, 10000, "cartaselect1")
      .setScale(0.1);
    const marco2 = this.physics.add
      .image(10000, 10000, "cartaselect1")
      .setScale(0.1);

    console.log(turno);

    tipos.forEach((tipo, index) => {
      const carta = new Carta(tipo, 0, 0);
      const contexto = this;

			const posx = pos[index].x
			const posy = pos[index].y; 

      carta.sprite = contexto.physics.add
        .sprite(posx, posy, "cartassprites", carta.tipo * 10)
        .setScale(0.5);
      carta.posicionx = posx;			
      carta.posiciony = posy;
      carta.sprite.setInteractive();
      carta.sprite.on("pointerdown", (pointer, localX, localY) => {
        if(lock==0){
        cardSelect(carta);}
});

      cartas.push(carta);
    }, this);

    /*const switchboton = this.add.image(300, 500, "switchboton").setScale(0.1);
    switchboton.setInteractive();
    switchboton.on("pointerdown", (pointer, localX, localY) => {
      if (cartasselec >= 2 && lock == 0 && seleccion2) {
        lock = 1;
        console.log(lock);
        marco1.body.reset(10000, 10000);
        marco2.body.reset(10000, 10000);
        seleccion1.sprite.setDepth(1);
        seleccion2.sprite.setDepth(1);
        this.physics.moveToObject(
          seleccion1.sprite,
          seleccion2.sprite,
          null,
          1500
        );
        this.physics.moveToObject(
          seleccion2.sprite,
          seleccion1.sprite,
          null,
          1500
        );
        switchcards1(seleccion2, seleccion1);
        seleccion1 = 0;
        seleccion2 = 0;
        cartaanterior = 0;
        cartasselec = 0;
      }
    });*/

    const flipboton = this.add.image(400, 500, "flipboton").setScale(0.03);
    flipboton.setInteractive();
    flipboton.on("pointerdown", (pointer, localX, localY) => {
      /*if(lock==0&&cartasselec>0){
      seleccion1.flipCarta();}*/
      flipboton.destroy();
      setTimeout(function switchcards2() {
        for(let i=0;i<5;i++){
          cartas[i].flipCarta();
          }
      }, 1000);
      setTimeout(function switchcards2() {
        for(let i=5;i<10;i++){
          cartas[i].flipCarta();
          }
      }, 2000);
      setTimeout(function switchcards2() {
        for(let i=10;i<15;i++){
          cartas[i].flipCarta();
          }
      }, 3000);
      setTimeout(function switchcards2() {
          lock=0;
          crearBlock();
          const switchboton = contexto2.add.image(400, 500, "switchboton").setScale(0.1);
          switchboton.setInteractive();
          switchboton.on("pointerdown", (pointer, localX, localY) => {
            if (cartasselec >= 2 && lock == 0 
            && ((seleccion1.posicionx==manoturno&&seleccion2.posicionx!=manoturno)
            ||(seleccion2.posicionx==manoturno&&seleccion1.posicionx!=manoturno))) {
              lock = 1;
              marco1.body.reset(10000, 10000);
              marco2.body.reset(10000, 10000);
              seleccion1.sprite.setDepth(1);
              seleccion2.sprite.setDepth(1);
              contexto2.physics.moveToObject(
                seleccion1.sprite,
                seleccion2.sprite,
                null,
                1500
              );
              contexto2.physics.moveToObject(
                seleccion2.sprite,
                seleccion1.sprite,
                null,
                1500
              );
              switchcards1(seleccion2, seleccion1);
              seleccion1 = 0;
              seleccion2 = 0;
              cartaanterior = 0;
              cartasselec = 0;
            }
          });
          
      }, 4000);
    });
   

    const Rflipanim1 = this.anims.create({
      key: "Rflip1",
      frames: this.anims.generateFrameNumbers("cartassprites", {
        start: 0,
        end: 9,
      }),
      frameRate: 12,
    });

    const Rflipanim2 = this.anims.create({
      key: "Rflip2",
      frames: this.anims.generateFrameNumbers("cartassprites", {
        start: 9,
        end: 0,
      }),
      frameRate: 12,
    });

    const Pflipanim1 = this.anims.create({
      key: "Pflip1",
      frames: this.anims.generateFrameNumbers("cartassprites", {
        start: 10,
        end: 19,
      }),
      frameRate: 12,
    });

    const Pflipanim2 = this.anims.create({
      key: "Pflip2",
      frames: this.anims.generateFrameNumbers("cartassprites", {
        start: 19,
        end: 10,
      }),
      frameRate: 12,
    });

    const Sflipanim1 = this.anims.create({
      key: "Sflip1",
      frames: this.anims.generateFrameNumbers("cartassprites", {
        start: 20,
        end: 29,
      }),
      frameRate: 12,
    });

    const Sflipanim2 = this.anims.create({
      key: "Sflip2",
      frames: this.anims.generateFrameNumbers("cartassprites", {
        start: 29,
        end: 20,
      }),
      frameRate: 12,
    });

    function switchcards1(cartaA, cartaB) {
      setTimeout(function switchcards2() {
        cartaA.sprite.body.reset(cartaB.posicionx, cartaB.posiciony);
        cartaB.sprite.body.reset(cartaA.posicionx, cartaA.posiciony);
        posicion1 = cartaA.posicionx;
        posicion2 = cartaA.posiciony;
        cartaA.posicionx = cartaB.posicionx;
        cartaA.posiciony = cartaB.posiciony;
        cartaB.posicionx = posicion1;
        cartaB.posiciony = posicion2;
        cartaA.sprite.setDepth(0);
        cartaB.sprite.setDepth(0);
        seleccion1 = 0;
        seleccion2 = 0;
        cartaanterior = 0;
        cartasselec = 0;
        lock = 0;
        turno++;
        block.destroy();
        turnoCambio();
        crearBlock();
        medioTiempo();
        console.log(turno);
      }, 1500);
    }

    function cardSelect(cartasel) {
      let cartacheck=cartasel;
      if(cartacheck!=seleccion1){
      seleccion2 = seleccion1;
      seleccion1 = cartasel;
      cartasselec++;
      cartasel.marcosCartas(marco1, marco2, cartaanterior, cartasselec);
      cartaanterior = cartasel;}
    }

    function turnoCambio(){
    if(lock==0){
    if(blockx==650){blockx=150;turnoj=2;manoturno=650;lock=1;}}
    if(lock==0){
    if(blockx==150){blockx=650;turnoj=1;manoturno=150;lock=1;}}
    lock=0;
    }

    function crearBlock(){
      block=contexto2.add.image(blockx,275,"block")
      block.displayHeight=500;
      block.displayWidth=100;
      block.setInteractive();
      block.on("pointerdown", (pointer, localX, localY) => {})
    }

    function medioTiempo(){
      if(turno==7){
        for(let i=0;i<15;i++){
          if((cartas[i].posicionx!=manoturno)&&(cartas[i].posicionx!=blockx)){
          cartas[i].flipCarta();}}}
      
      
    }
  }
}
