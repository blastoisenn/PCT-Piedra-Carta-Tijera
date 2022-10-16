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

  
  create() {
    const contexto2=this;
    const cartas = [];
    var tiponuevo;
    var tiposr = 8;
    var tipop;
    const tipos = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2].sort((a, b) => 0.5 - Math.random());
    const pos = [
      { x: 525, y: 250 },
      { x: 775, y: 250 },
      { x: 960, y: 250 },
      { x: 1145, y: 250 },
      { x: 1395, y: 250 },
      { x: 525, y: 500 },
      { x: 775, y: 500 },
      { x: 960, y: 500 },
      { x: 1145, y: 500 },
			{ x: 1395, y: 500 },
			{ x: 525, y: 750 },
      { x: 775, y: 750 },
      { x: 960, y: 750 },
      { x: 1145, y: 750 },
			{ x: 1395, y: 750 },
    ];
    
    let puntajej1=0;
    let puntajej2=0;
    let cartaj1;
    let cartaj2;
    let manoturno=525;
    let block;
    let block1;
    let block2;
    let blockx=1395;
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
    this.add.image(500, 500, "selectfondo").setScale(4);

    const marco1 = this.physics.add
      .image(10000, 10000, "cartaselect1")
      .setScale(0.2);
    const marco2 = this.physics.add
      .image(10000, 10000, "cartaselect1")
      .setScale(0.2);

    console.log(turno);

    tipos.forEach((tipo, index) => {
      const carta = new Carta(tipo, 0, 0);
      const contexto = this;

			const posx = pos[index].x
			const posy = pos[index].y; 

      carta.sprite = contexto.physics.add
        .sprite(posx, posy, "cartassprites", carta.tipo * 10)
        
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
    }); */

    const flipboton = this.add.image(960, 980, "flipboton").setScale(0.08);
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
          const switchboton = contexto2.add.image(960, 980, "switchboton").setScale(0.2);
          switchboton.setInteractive();
          switchboton.on("pointerdown", (pointer, localX, localY) => {
            if (cartasselec >= 2 && lock == 0 && turno<13
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

            if (cartasselec >= 2 && lock == 0 && turno>12
              && ((seleccion1.posicionx==manoturno&&seleccion2.posicionx==blockx)
              ||(seleccion2.posicionx==manoturno&&seleccion1.posicionx==blockx))) {
              
                if(seleccion1.posicionx==manoturno){
                cartaj1=seleccion1.tipo;
                cartaj2=seleccion2.tipo;
                }else{
                cartaj1=seleccion2.tipo;
                cartaj2=seleccion1.tipo; 
                }
                marco1.body.reset(10000, 10000);
                marco2.body.reset(10000, 10000);
                compararCartas(cartaj1,cartaj2);
                seleccion1.flipCarta();
                seleccion2.flipCarta();
                block1=contexto2.add.image(seleccion1.posicionx,seleccion1.posiciony,"block")
                block1.displayHeight=300;
                block1.displayWidth=150;
                block1.setInteractive();
                block1.on("pointerdown", (pointer, localX, localY) => {})
                block2=contexto2.add.image(seleccion2.posicionx,seleccion2.posiciony,"block")
                block2.displayHeight=300;
                block2.displayWidth=150;
                block2.setInteractive();
                block2.on("pointerdown", (pointer, localX, localY) => {})
                seleccion1 = 0;
                seleccion2 = 0;
                cartaanterior = 0;
                cartasselec = 0;
                console.log(puntajej1);
                console.log(puntajej2);
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
        if(turno<13){
        crearBlock();}
        medioTiempo();
        juegoFinal();
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
    if(blockx==1395){blockx=525;turnoj=2;manoturno=1395;lock=1;}}
    if(lock==0){
    if(blockx==525){blockx=1395;turnoj=1;manoturno=525;lock=1;}}
    lock=0;
    }

    function crearBlock(){
      block=contexto2.add.image(blockx,500,"block")
      block.displayHeight=1000;
      block.displayWidth=300;
      block.setInteractive();
      block.on("pointerdown", (pointer, localX, localY) => {})
    }

    function medioTiempo(){
      if(turno==7){
        lock=1;
        for(let i=0;i<15;i++){
          if((cartas[i].posicionx!=manoturno)&&(cartas[i].posicionx!=blockx)){
          cartas[i].flipCarta();}}
      
      setTimeout(function switchcards2() {
        for(let i=0;i<15;i++){
          if((cartas[i].posicionx!=manoturno)&&(cartas[i].posicionx!=blockx)){
          cartas[i].flipCarta();}}
        lock=0;
          }, 10000);
  
        }}

        function juegoFinal(){
          if(turno==13){
            lock=1;
            for(let i=0;i<15;i++){
              if((cartas[i].posicionx!=manoturno)&&(cartas[i].posicionx!=blockx)){
                contexto2.physics.moveTo(cartas[i].sprite,cartas[i].posicionx,-2000, 600);}}
          
          setTimeout(function switchcards2() {
            for(let i=0;i<15;i++){
              if((cartas[i].posicionx!=manoturno)&&(cartas[i].posicionx!=blockx)){
              cartas[i].sprite.body.reset(-2000, -2000);}}
            lock=0;
              }, 3000);
      
            }}

        function compararCartas(carta1,carta2){
        if(carta1==0){
          if (carta2==1){puntajej2++}
          if (carta2==2){puntajej1++}
        }
        if(carta1==1){
          if (carta2==2){puntajej2++}
          if (carta2==0){puntajej1++}
        }
        if(carta1==2){
          if (carta2==0){puntajej2++}
          if (carta2==1){puntajej1++}
        }}

    
  }
}
