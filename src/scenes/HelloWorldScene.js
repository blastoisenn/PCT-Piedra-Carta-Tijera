import Phaser from "phaser";
import Carta from "./Cartas";
import Jugador from "./Jugador";
import { getPhrase } from "./Services/translations";
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

  init(data)
{
    this.seleccionj1 = data.seleccionj1;
    this.seleccionj2 = data.seleccionj2;
}
  
  create() {

    
    const contexto2=this;
    const cartas = [];
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
    
    const colores=[0, 0xC3EFC2, 0xEFC2C2 ,0xC8C2EF]
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
    let turnoj1=1;
    let turnoj2=0;
    let seleccion1
    let seleccion2
    let posicion1 = 0;
    let posicion2 = 0;
		let cartaanterior
    let posicionmarcox = 1000;
    let posicionmarcoy = 1000;
    let cartasselec = 0;
    let lock = 1;
    let seleccionjug1=this.seleccionj1
    let seleccionjug2=this.seleccionj2
    let color=colores[seleccionjug1]
    let scoreTextoj1;
    let scoreTextoj2;
    let turnoj1Texto;
    let turnoj2Texto;
    let recuerdaTexto;
    let switchboton;
    let spritej1;
    let spritej2;
    let ganador;

    console.log(seleccionjug1);
    console.log(seleccionjug2);

    this.add.image(500, 500, "selectfondo").setScale(4);
    let fondo1=this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'Fondoj1').setScale(0.6);
    let fondo2=this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'Fondoj2').setScale(0.6);
    fondo1.tint=colores[seleccionjug1]
    fondo2.tint=colores[seleccionjug2]

    function crearPersonajes(jug1,jug2){
      if(jug1==1){
      spritej1=contexto2.add.sprite(250, 600, 'rockatlas',0).setScale(0.6)
      spritej1.flipX=true}
      else{if(jug1==2){spritej1=contexto2.add.sprite(250, 600, 'papersatlas',0).setScale(0.6);
      spritej1.flipX=true}
      else{spritej1=contexto2.add.sprite(230, 600, 'scissorsatlas',0).setScale(0.55);}}

      if(jug2==1){
        spritej2=contexto2.add.sprite(1685, 600, 'rockatlas',0).setScale(0.6);}
        else{if(jug2==2){spritej2=contexto2.add.sprite(1685, 600, 'papersatlas',0).setScale(0.6);}
        else{spritej2=contexto2.add.sprite(1690, 600, 'scissorsatlas',0).setScale(0.55);
        spritej2.flipX=true}}
    }

    crearPersonajes(seleccionjug1,seleccionjug2);

    let marco1 = this.physics.add
      .image(10000, 10000, "cartaselect1")
      .setScale(0.2);
    let marco2 = this.physics.add
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
    function crearRecuerdaTexto(){
    recuerdaTexto = contexto2.add.text(contexto2.cameras.main.centerX*0.75, 1, getPhrase('Recuerda'), { 
      font: '80px Happy Chicken',
      stroke: '#000000',
      strokeThickness: 11,});}

    turnoj1Texto = contexto2.add.text(contexto2.cameras.main.centerX*0.027, 60, (getPhrase('turno')+': '+turnoj1+"/6"), { 
      font: '55px Happy Chicken',
      stroke: '#000000',
      strokeThickness: 11,});
    
    turnoj2Texto = contexto2.add.text(contexto2.cameras.main.centerX*1.62, 60, (getPhrase('turno') +': 1/6'), { 
      font: '55px Happy Chicken',
      stroke: '#000000',
      strokeThickness: 11,});

    function actualizarTextos(){
      turnoj1Texto.setText((getPhrase('turno')+': '+turnoj1+"/6"));
      turnoj2Texto.setText((getPhrase('turno')+': '+turnoj2+"/6"));
    }

      crearRecuerdaTexto()


    let flipboton = this.add.image(960, 980, "flipboton").setScale(0.08);
    flipboton.setInteractive();
    flipboton.on("pointerdown", (pointer, localX, localY) => {
      /*if(lock==0&&cartasselec>0){
      seleccion1.flipCarta();}*/
      recuerdaTexto.destroy();
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
        spritej1.setFrame(1);
        spritej2.tint=0x777492;
        turnoj2Texto.tint=0x777492;
          lock=0;
          crearBlock();
          switchboton = contexto2.add.image(960, 980, "switchboton").setScale(0.2);
          switchboton.setInteractive();
          switchboton.on("pointerdown", (pointer, localX, localY) => {
            if (cartasselec >= 2 && lock == 0 && turno<13
            && ((seleccion1.posicionx==manoturno&&seleccion2.posicionx!=manoturno)
            ||(seleccion2.posicionx==manoturno&&seleccion1.posicionx!=manoturno))) {
              lock = 1;
              switchboton.tint=0x777492;
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
                turno++;
                scoreTextoj1.setText(puntajej1);
                scoreTextoj2.setText(puntajej2);
                finDePartida()
                console.log(puntajej1);
                console.log(puntajej2);
              }

          });
          
      }, 4000);
    });
    let switchboton2 = contexto2.add.image(1400, 980, "VS").setScale(0.12);
    switchboton2.setInteractive();
    switchboton2.on("pointerdown", (pointer, localX, localY) => {turno=11})

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
        switchboton.clearTint();
        lock = 0;
        turno++;
        block.destroy();
        cambioColor()
        turnoCambio();
        actualizarTextos()
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
      cartasel.marcosCartas(marco1, marco2, cartaanterior, cartasselec, color);
      cartaanterior = cartasel;}
    }

    function turnoCambio(){
    if(lock==0){
    if(blockx==1395){blockx=525;turnoj=2;turnoj2++;manoturno=1395;lock=1;
    spritej1.setFrame(0);
    spritej2.setFrame(1);
    spritej1.tint=0x777492;
    turnoj1Texto.tint=0x777492;
    spritej2.clearTint();
    turnoj2Texto.clearTint();}}
    if(lock==0){
    if(blockx==525){blockx=1395;turnoj=1;turnoj1++;manoturno=525;lock=1;
    spritej2.setFrame(0);
    spritej1.setFrame(1);
    spritej2.tint=0x777492;
    turnoj2Texto.tint=0x777492;
    spritej1.clearTint();
    turnoj1Texto.clearTint();}}
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
        spritej1.setFrame(0);
        spritej1.tint=0x777492;
        turnoj1Texto.tint=0x777492;
        switchboton.tint=0x777492;
        crearRecuerdaTexto()
        for(let i=0;i<15;i++){
          if((cartas[i].posicionx!=manoturno)&&(cartas[i].posicionx!=blockx)){
          cartas[i].flipCarta();}}
      
      setTimeout(function switchcards2() {
        for(let i=0;i<15;i++){
          if((cartas[i].posicionx!=manoturno)&&(cartas[i].posicionx!=blockx)){
          cartas[i].flipCarta();}}
        spritej1.setFrame(1);
        spritej1.clearTint();
        turnoj1Texto.clearTint();
        switchboton.clearTint();
        recuerdaTexto.destroy();
        lock=0;
          }, 10000);
  
        }}

        function juegoFinal(){
          if(turno==13){
            lock=1;
            turnoj1Texto.destroy();
            turnoj2Texto.destroy();
            spritej1.setFrame(0);
            spritej1.clearTint();
            spritej2.clearTint();
            switchboton.tint=0x777492;
            for(let i=0;i<15;i++){
              if((cartas[i].posicionx!=manoturno)&&(cartas[i].posicionx!=blockx)){
                contexto2.physics.moveTo(cartas[i].sprite,cartas[i].posicionx,-2000, 600);}}
          
          setTimeout(function switchcards2() {
            for(let i=0;i<15;i++){
              if((cartas[i].posicionx!=manoturno)&&(cartas[i].posicionx!=blockx)){
              cartas[i].sprite.body.reset(-2000, -2000);}}
              switchboton.clearTint();
              puntajes();
            lock=0;
              }, 2000);
      
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

        function cambioColor(){
        let lock4=0;
        if(lock4==0){
        if(color==colores[seleccionjug1]){color=colores[seleccionjug2]; lock4=1}}
        if(lock4==0){
        if(color==colores[seleccionjug2]){color=colores[seleccionjug1]; lock4=1}}; lock4=0}

        function puntajes(){
          if(turno==13){
          scoreTextoj1 = contexto2.add.text(contexto2.cameras.main.centerX*0.75, contexto2.cameras.main.centerY*0.75, '0', { 
            font: '130px Happy Chicken',
            stroke: '#000000',
            strokeThickness: 11,});
          scoreTextoj2 = contexto2.add.text(contexto2.cameras.main.centerX*1.15, contexto2.cameras.main.centerY*0.75, '0', { 
            font: '130px Happy Chicken',
            stroke: '#000000',
            strokeThickness: 11, });}}

        function finDePartida(){
          if(puntajej1==2){ganador=1; lock=1;
            setTimeout(function terminar() {
            contexto2.scene.start("PostJuego",{ seleccionj1: seleccionjug1, seleccionj2: seleccionjug2, ganador: ganador })
            },1500);}

          if(puntajej2==2){ganador=2;lock=1;
            setTimeout(function terminar() {
            contexto2.scene.start("PostJuego",{ seleccionj1: seleccionjug1, seleccionj2: seleccionjug2, ganador: ganador  })
          },1500);}

            if(turno==16){
          if(puntajej1>puntajej2){ganador=1; lock=1;
            setTimeout(function terminar() {
            contexto2.scene.start("PostJuego",{ seleccionj1: seleccionjug1, seleccionj2: seleccionjug2, ganador: ganador })
            },1500);}
          if(puntajej1<puntajej2){ganador=2;lock=1;
            setTimeout(function terminar() {
            contexto2.scene.start("PostJuego",{ seleccionj1: seleccionjug1, seleccionj2: seleccionjug2, ganador: ganador  })
          },1500);}
          if(puntajej1==puntajej2){
          ganador=0;lock=1;
          setTimeout(function terminar() {
          contexto2.scene.start("PostJuego",{ seleccionj1: seleccionjug1, seleccionj2: seleccionjug2, ganador: ganador  })
          },1500);}}}

        }}


