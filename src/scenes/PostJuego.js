import Button from "./button"
import { getPhrase } from "./Services/translations";
export default class PostJuego extends Phaser.Scene

{
	constructor()
	{
		super('PostJuego')
	}

	init(data)
	{
		// Selecciones de personajes y resultado de la partida, de la escena anterior
		this.seleccionj1 = data.seleccionj1;
		this.seleccionj2 = data.seleccionj2;
		this.ganador=data.ganador;
	}

	create(){
        let seleccionj1=this.seleccionj1 // Personaje del J1
		let seleccionj2=this.seleccionj2 // Personaje del J2
		let ganador=this.ganador //Resultado de la partida
		//Posicion de los sprites
		let j1x = 500
		let j1y = 600
		let j2x = 500
		let j2y = 600
		//Sprites
		let spritej1;
		let spritej2;
		const contexto=this // Variable de contexto
		//Colores de los personajes
		let colores=[0, 0xC3EFC2, 0xEFC2C2 ,0xC8C2EF]
		//Boton de volumen
		let volumenimg;

		this.rockMusic = this.sound.add("RockWin") // Cancion de victoria de Rock
		this.papersMusic = this.sound.add("PapersWin") // Cancion de victoria de Papers
		this.scissorsMusic = this.sound.add("ScissorsWin") // Cancion de victoria de Scissors
		this.empateMusic = this.sound.add("MusicaEmpate") // Cancion de empate

		// Array de canciones
		let canciones=[contexto.empateMusic,contexto.rockMusic, contexto.papersMusic, contexto.scissorsMusic]
        
		// Configuración de Sonido
		let musicConfig = {
			mute: false,
			volume: 1,
			rate: 1,
			detune: 1,
			seek: 1,
			loop: false,
			delay: 0,
		}

		// Función para reproducir la música correspondiente
		function musicStart(){
			if (ganador==1){canciones[seleccionj1].play(musicConfig)}
			if (ganador==2){canciones[seleccionj2].play(musicConfig)}
			if (ganador==0){canciones[0].play(musicConfig)}
			}

	    // Función para detener la música correspondiente
        function musicStop(){
		if (ganador==1){canciones[seleccionj1].stop()}
		if (ganador==2){canciones[seleccionj2].stop()}
		if (ganador==0){canciones[0].stop()}
		}

        // Función para crear el botón de Sonido
		function crearVolumen(){
			if (contexto.sound.mute == false){volumenimg="volumen"}else{volumenimg="volumen2"}
			let BotonCfg = contexto.add.image(contexto.cameras.main.centerX*0.1, contexto.cameras.main.centerY*0.20, volumenimg).setScale(0.15);
				BotonCfg.setInteractive();
				BotonCfg.on("pointerdown", (pointer, localX, localY) => {
					
					if (contexto.sound.mute == false){
					contexto.sound.mute = true;
					BotonCfg = contexto.add.image(contexto.cameras.main.centerX*0.1, contexto.cameras.main.centerY*0.20, 'volumen2').setScale(0.15);}
					else{contexto.sound.mute = false
					BotonCfg = contexto.add.image(contexto.cameras.main.centerX*0.1, contexto.cameras.main.centerY*0.20, 'volumen').setScale(0.15);}
					
			   });}

		// Función para crear los sprites
		function crearSprites(){
		
		if(seleccionj1==1){
		if(ganador!=0){
			if (ganador==1){spritej1=contexto.add.sprite(j1x, j1y, 'rockatlas',3).setScale(1.1);}
		else{spritej1=contexto.add.sprite(j1x, j1y, 'rockatlas',2).setScale(0.6);}}
		else{spritej1=contexto.add.sprite(j1x, j1y, 'rockatlas',2).setScale(0.6);}}
		
		if(seleccionj1==2){
			if(ganador!=0){
			if (ganador==1){spritej1=contexto.add.sprite(j1x, j1y, 'papersatlas',3).setScale(1);}
			else{spritej1=contexto.add.sprite(j1x, j1y, 'papersatlas',2).setScale(0.6);}}
			else{spritej1=contexto.add.sprite(j1x, j1y, 'papersatlas',2).setScale(0.6);}}
		
		if(seleccionj1==3){
			if(ganador!=0){
			if (ganador==1){spritej1=contexto.add.sprite(j1x, j1y, 'scissorsatlas',3).setScale(1);}
			else{spritej1=contexto.add.sprite(j1x, j1y, 'scissorsatlas',2).setScale(0.765);}}
			else{spritej1=contexto.add.sprite(j1x, j1y, 'scissorsatlas',2).setScale(0.765);}}

     	if(seleccionj2==1){
			if(ganador!=0){
			if (ganador==2){spritej2=contexto.add.sprite(j2x, j2y, 'rockatlas',3).setScale(1)}
			else{spritej2=contexto.add.sprite(j2x, j2y, 'rockatlas',2).setScale(0.6);}}
			else{spritej2=contexto.add.sprite(j2x, j2y, 'rockatlas',2).setScale(0.6);}}
		
		if(seleccionj2==2){
			if(ganador!=0){
			if (ganador==2){spritej2=contexto.add.sprite(j2x, j2y, 'papersatlas',3).setScale(1)}
			else{spritej2=contexto.add.sprite(j2x, j2y, 'papersatlas',2).setScale(0.765);}}
			else{spritej2=contexto.add.sprite(j2x, j2y, 'papersatlas',2).setScale(0.765);}}
		
		if(seleccionj2==3){
			if(ganador!=0){
			if (ganador==2){spritej2=contexto.add.sprite(j2x, j2y, 'scissorsatlas',3).setScale(1)}
			else{spritej2=contexto.add.sprite(j2x, j2y, 'scissorsatlas',2).setScale(0.6);}}
			else{spritej2=contexto.add.sprite(j2x, j2y, 'scissorsatlas',2).setScale(0.6);}}
		}

		// Si gana el jugador 1
        if(ganador==1){
			musicStart()
		j1x=500;
		j1y=600;
		j2x=1550;
		j2y=600;
	    let fondo1=this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'FondoGanador').setScale(0.6);
        let fondo2=this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'FondoPerdedor').setScale(0.6);
        fondo1.tint=colores[seleccionj1]
        fondo2.tint=colores[seleccionj2]
		
		crearSprites()
		crearVolumen()
		}

		// Si gana el jugador 2
		if(ganador==2){
			musicStart()
		j1x=1550;
		j1y=600;
		j2x=500;
		j2y=600;
		let fondo1=this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'FondoGanador').setScale(0.6);
		let fondo2=this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'FondoPerdedor').setScale(0.6);
		fondo1.tint=colores[seleccionj2]
		fondo2.tint=colores[seleccionj1]
		
		crearSprites()
		crearVolumen()
		}
		// Si empatan
		if(ganador==0){
			musicStart()
		j1x=1510;
		j1y=600;
		j2x=500;
		j2y=600;
		this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'selectfondo').setScale(0.6);
		let fondo1=this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'fondoselec1').setScale(0.6);
		let fondo2=this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'fondoselec2').setScale(0.6);
		fondo1.tint=colores[seleccionj2]
		fondo2.tint=colores[seleccionj1]
		
		crearSprites()
		crearVolumen()
		}


        //Botón Menú
		let botonmenu = new Button(this.cameras.main.centerX, this.cameras.main.centerY*1.35, getPhrase("Menu"), this, () =>
			{musicStop();
				musicStop();
			this.sound.play("Click")
			this.scene.start("MenuPrincipal")})

		//Botón Revancha
		let botonvolver = new Button(this.cameras.main.centerX, this.cameras.main.centerY*1.65, getPhrase("Revancha"), this, () =>
			{musicStop();
				musicStop();
			this.sound.play("Click")
			this.scene.start("juego")})
	
	    //Textos
		if(ganador!=0){	
		contexto.add.text(920, 17, getPhrase('Ganador')+":", { 
				font: '80px Fredoka One',
				stroke: '#000000',
				strokeThickness: 11,})}
		else{
			contexto.add.text(780, 150, getPhrase('Empate'), { 
				font: '100px Fredoka One',
				stroke: '#000000',
				strokeThickness: 11,})
		}
	
	
		//Logos
		if (ganador==1){
			//Logos J1
			if(seleccionj1==1){contexto.add.image(1200, 235, 'rocklogo').setScale(0.25);}
			if(seleccionj1==2){contexto.add.image(1200, 235, 'paperlogo').setScale(0.25);}	
			if(seleccionj1==3){contexto.add.image(1200, 235, 'scissorslogo').setScale(0.25);}}	
		if (ganador==2){
			//Logos J2
			if(seleccionj2==1){contexto.add.image(1200, 235, 'rocklogo').setScale(0.25);}
			if(seleccionj2==2){contexto.add.image(1200, 235, 'paperlogo').setScale(0.25);}	
			if(seleccionj2==3){contexto.add.image(1200, 235, 'scissorslogo').setScale(0.25);}}	
}
} 
