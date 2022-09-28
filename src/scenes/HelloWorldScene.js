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
    //this.load.setBaseURL('http://labs.phaser.io')

    this.load.spritesheet("cartassprites", "assets/cartassprites.png", {
      frameWidth: 150,
      frameHeight: 215,
    });
    this.load.image("cartaselect1", "assets/cartaselect1.png");
    this.load.image("cartaselect2", "assets/cartaselect2.png");
    this.load.image("switchboton", "assets/confirmarboton.png");
    this.load.image("flipboton", "assets/loadgif.png");
    this.load.image("background", "assets/bg.png");
  }

  create() {
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

    let seleccion1
    let seleccion2
    let posicion1 = 0;
    let posicion2 = 0;
		let cartaanterior
    let posicionmarcox = 1000;
    let posicionmarcoy = 1000;
    let cartasselec = 0;
    let lock = 0;
    this.add.image(500, 500, "background").setScale(4);

    const marco1 = this.physics.add
      .image(10000, 10000, "cartaselect2")
      .setScale(0.1);
    const marco2 = this.physics.add
      .image(10000, 10000, "cartaselect1")
      .setScale(0.1);

    tipos.forEach((tipo, index) => {
      //console.log(index);
      const carta = new Carta(tipo, 0, 0);
      const contexto = this;

			const posx = pos[index].x
			const posy = pos[index].y; 

      //console.log(carta);
      carta.sprite = contexto.physics.add
        .sprite(posx, posy, "cartassprites", carta.tipo * 10)
        .setScale(0.5);
      carta.posicionx = posx;			
      carta.posiciony = posy;
      carta.sprite.setInteractive();
      carta.sprite.on("pointerdown", (pointer, localX, localY) => {
        cardSelect(carta);
        carta.marcosCartas(marco1, marco2, cartaanterior, lock, cartasselec);
        cartaanterior = carta;
				console.log(carta.posicionx,carta.posiciony)
      });

      cartas.push(carta);
    }, this);

		const carta2= new Carta (0,0,0);
		carta2.posicionx=10000
		carta2.posiciony=10000
		cartaanterior = carta2;
		seleccion2=carta2

    /* 
    tiponuevo = tipos[Phaser.Math.Between(0, tiposr)];
    tipop = tipos.indexOf(tiponuevo);
    tipos.splice(tipop, 1);
    const carta1 = new Carta(tiponuevo, 0, 0);
    tiposr = tiposr - 1;

    tiponuevo = tipos[Phaser.Math.Between(0, tiposr)];
    tipop = tipos.indexOf(tiponuevo);
    tipos.splice(tipop, 1);
    const carta2 = new Carta(tiponuevo, 0, 0);
    tiposr = tiposr - 1;

    tiponuevo = tipos[Phaser.Math.Between(0, tiposr)];
    tipop = tipos.indexOf(tiponuevo);
    tipos.splice(tipop, 1);
    const carta3 = new Carta(tiponuevo, 0, 0);
    tiposr = tiposr - 1;

    tiponuevo = tipos[Phaser.Math.Between(0, tiposr)];
    tipop = tipos.indexOf(tiponuevo);
    tipos.splice(tipop, 1);
    const carta4 = new Carta(tiponuevo, 0, 0);
    tiposr = tiposr - 1;

    tiponuevo = tipos[Phaser.Math.Between(0, tiposr)];
    tipop = tipos.indexOf(tiponuevo);
    tipos.splice(tipop, 1);
    const carta5 = new Carta(tiponuevo, 0, 0);
    tiposr = tiposr - 1;

    tiponuevo = tipos[Phaser.Math.Between(0, tiposr)];
    tipop = tipos.indexOf(tiponuevo);
    tipos.splice(tipop, 1);
    const carta6 = new Carta(tiponuevo, 0, 0);
    tiposr = tiposr - 1;

    tiponuevo = tipos[Phaser.Math.Between(0, tiposr)];
    tipop = tipos.indexOf(tiponuevo);
    tipos.splice(tipop, 1);
    const carta7 = new Carta(tiponuevo, 0, 0);
    tiposr = tiposr - 1;

    tiponuevo = tipos[Phaser.Math.Between(0, tiposr)];
    tipop = tipos.indexOf(tiponuevo);
    tipos.splice(tipop, 1);
    const carta8 = new Carta(tiponuevo, 0, 0);
    tiposr = tiposr - 1;

    tiponuevo = tipos[Phaser.Math.Between(0, tiposr)];
    tipop = tipos.indexOf(tiponuevo);
    tipos.splice(tipop, 1);
    const carta9 = new Carta(tiponuevo, 0, 0);
    tiposr = tiposr - 1;

    tiponuevo = tipos[Phaser.Math.Between(0, tiposr)];
    tipop = tipos.indexOf(tiponuevo);
    tipos.splice(tipop, 1);
    const carta10 = new Carta(tiponuevo, 0, 0);
    tiposr = tiposr - 1; */

    const switchboton = this.add.image(300, 500, "switchboton").setScale(0.1);
    switchboton.setInteractive();
    switchboton.on("pointerdown", (pointer, localX, localY) => {
      if (cartasselec >= 2 && lock == 0 && seleccion2 != carta2) {
        lock = 1;
        console.log(lock);
        marco1.body.reset(10000, 10000);
        marco2.body.reset(10000, 10000);
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
    });

    const flipboton = this.add.image(500, 500, "flipboton").setScale(0.03);
    flipboton.setInteractive();
    flipboton.on("pointerdown", (pointer, localX, localY) => {
      seleccion1.flipCarta();
    });
    /* 
    carta2.sprite = this.physics.add
      .sprite(400, 150, "cartassprites", carta2.tipo * 10)
      .setScale(0.5);
    carta2.posicionx = 400;
    carta2.posiciony = 150;
    carta2.sprite.setInteractive();
    carta2.sprite.on("pointerdown", (pointer, localX, localY) => {
      cardSelect(carta2);
      carta2.marcosCartas(marco1, marco2, cartaanterior, lock);
      cartaanterior = carta2;
    });

    carta3.sprite = this.physics.add
      .sprite(600, 150, "cartassprites", carta3.tipo * 10)
      .setScale(0.5);
    carta3.posicionx = 600;
    carta3.posiciony = 150;
    carta3.sprite.setInteractive();
    carta3.sprite.on("pointerdown", (pointer, localX, localY) => {
      cardSelect(carta3);
      carta3.marcosCartas(marco1, marco2, cartaanterior, lock);
      cartaanterior = carta3;
    });

    carta4.sprite = this.physics.add
      .sprite(200, 275, "cartassprites", carta4.tipo * 10)
      .setScale(0.5);
    carta4.posicionx = 200;
    carta4.posiciony = 275;
    carta4.sprite.setInteractive();
    carta4.sprite.on("pointerdown", (pointer, localX, localY) => {
      cardSelect(carta4);
      carta4.marcosCartas(marco1, marco2, cartaanterior, lock);
      cartaanterior = carta4;
    });

    carta5.sprite = this.physics.add
      .sprite(400, 275, "cartassprites", carta5.tipo * 10)
      .setScale(0.5);
    carta5.posicionx = 400;
    carta5.posiciony = 275;
    carta5.sprite.setInteractive();
    carta5.sprite.on("pointerdown", (pointer, localX, localY) => {
      cardSelect(carta5);
      carta5.marcosCartas(marco1, marco2, cartaanterior, lock);
      cartaanterior = carta5;
    });

    carta6.sprite = this.physics.add
      .sprite(600, 275, "cartassprites", carta6.tipo * 10)
      .setScale(0.5);
    carta6.posicionx = 600;
    carta6.posiciony = 275;
    carta6.sprite.setInteractive();
    carta6.sprite.on("pointerdown", (pointer, localX, localY) => {
      cardSelect(carta6);
      carta6.marcosCartas(marco1, marco2, cartaanterior, lock);
      cartaanterior = carta6;
    });

    carta7.sprite = this.physics.add
      .sprite(200, 400, "cartassprites", carta7.tipo * 10)
      .setScale(0.5);
    carta7.posicionx = 200;
    carta7.posiciony = 400;
    carta7.sprite.setInteractive();
    carta7.sprite.on("pointerdown", (pointer, localX, localY) => {
      cardSelect(carta7);
      carta7.marcosCartas(marco1, marco2, cartaanterior, lock);
      cartaanterior = carta7;
    });

    carta8.sprite = this.physics.add
      .sprite(400, 400, "cartassprites", carta8.tipo * 10)
      .setScale(0.5);
    carta8.posicionx = 400;
    carta8.posiciony = 400;
    carta8.sprite.setInteractive();
    carta8.sprite.on("pointerdown", (pointer, localX, localY) => {
      cardSelect(carta8);
      carta8.marcosCartas(marco1, marco2, cartaanterior, lock);
      cartaanterior = carta8;
    });

    carta9.sprite = this.physics.add
      .sprite(600, 400, "cartassprites", carta9.tipo * 10)
      .setScale(0.5);
    carta9.posicionx = 600;
    carta9.posiciony = 400;
    carta9.sprite.setInteractive();
    carta9.sprite.on("pointerdown", (pointer, localX, localY) => {
      cardSelect(carta9);
      carta9.marcosCartas(marco1, marco2, cartaanterior, lock);
      cartaanterior = carta9;
    }); */

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
        seleccion1 = 0;
        seleccion2 = 0;
        cartaanterior = 0;
        cartasselec = 0;
        lock = 0;
        console.log(lock);
      }, 1500);
    }

    function cardSelect(cartasel) {
      seleccion2 = seleccion1;
      seleccion1 = cartasel;
      cartasselec++;
    }
  }
}
