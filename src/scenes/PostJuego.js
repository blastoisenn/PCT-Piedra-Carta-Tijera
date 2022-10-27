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
		this.seleccionj1 = data.seleccionj1;
		this.seleccionj2 = data.seleccionj2;
		this.ganador=data.ganador;
	}

	create(){
        let seleccionj1=this.seleccionj1
		let seleccionj2=this.seleccionj2
		let ganador=this.ganador
		let j1x = 500
		let j1y = 600
		let j2x = 500
		let j2y = 600
		let spritej1;
		let spritej2;
		const contexto=this
		let colores=[0, 0xC3EFC2, 0xEFC2C2 ,0xC8C2EF]

        
		
		

		function crearSprites(){
		
		if(seleccionj1==1){
			if (ganador==1){spritej1=contexto.add.sprite(j1x, j1y, 'rockatlas',3).setScale(1.1);}
		else{spritej1=contexto.add.sprite(j1x, j1y, 'rockatlas',2).setScale(0.8);}}
		
		if(seleccionj1==2){
			if (ganador==1){spritej1=contexto.add.sprite(j1x, j1y, 'papersatlas',3).setScale(1);}
			else{spritej1=contexto.add.sprite(j1x, j1y, 'papersatlas',2).setScale(0.8);}}
		
		if(seleccionj1==3){
			if (ganador==1){spritej1=contexto.add.sprite(j1x, j1y, 'scissorsatlas',3).setScale(1);}
			else{spritej1=contexto.add.sprite(j1x, j1y, 'scissorsatlas',2).setScale(0.765);}}


			
		if(seleccionj2==1){
			if (ganador==2){spritej2=contexto.add.sprite(j2x, j2y, 'rockatlas',3).setScale(1)}
			else{spritej2=contexto.add.sprite(j2x, j2y, 'rockatlas',2).setScale(0.8);}}
		
		if(seleccionj2==2){
			if (ganador==2){spritej2=contexto.add.sprite(j2x, j2y, 'papersatlas',3).setScale(1)}
			else{spritej2=contexto.add.sprite(j2x, j2y, 'papersatlas',2).setScale(0.765);}}
		
		if(seleccionj2==3){
			if (ganador==2){spritej2=contexto.add.sprite(j2x, j2y, 'scissorsatlas',3).setScale(1)}
			else{spritej2=contexto.add.sprite(j2x, j2y, 'scissorsatlas',2).setScale(0.8);}}
		}

		

		
		function sprites(){
			spritej1.body.reset(j1x,j1y);
			spritej2.body.reset(j2x,j2y);
			}
        if(ganador==1){
		j1x=500;
		j1y=600;
		j2x=1585;
		j2y=600;
		//sprites()
	    let fondo1=this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'FondoGanador').setScale(0.6);
        let fondo2=this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'FondoPerdedor').setScale(0.6);
        fondo1.tint=colores[seleccionj1]
        fondo2.tint=colores[seleccionj2]
		crearSprites()
		}
		if(ganador==2){
		j1x=1585;
		j1y=600;
		j2x=500;
		j2y=600;
		//sprites()
		let fondo1=this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'FondoGanador').setScale(0.6);
		let fondo2=this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'FondoPerdedor').setScale(0.6);
		fondo1.tint=colores[seleccionj2]
		fondo2.tint=colores[seleccionj1]
		crearSprites()
		}
		if(ganador==0){
		j1x=1510;
		j1y=600;
		j2x=500;
		j2y=600;
		//sprites()
		this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'selectfondo').setScale(0.6);
		crearSprites()
		}

		let botonmenu = new Button(this.cameras.main.centerX, this.cameras.main.centerY*1.35, getPhrase("Menu"), this, () =>
			{this.scene.start("MenuPrincipal")})
		let botonvolver = new Button(this.cameras.main.centerX, this.cameras.main.centerY*1.65, getPhrase("Revancha"), this, () =>
			{this.scene.start("hello-world")})
	
	
			contexto.add.text(920, 17, 'Ganador: ', { 
				font: '80px Happy Chicken',
				stroke: '#000000',
				strokeThickness: 11,})
	
	
		//Logos
		if (ganador==1){
			//Logos J1
			if(seleccionj1==1){contexto.add.image(1470, 80, 'rocklogo').setScale(0.14);}
			if(seleccionj1==2){contexto.add.image(1482, 80, 'paperlogo').setScale(0.14);}	
			if(seleccionj1==3){contexto.add.image(1470, 80, 'scissorslogo').setScale(0.14);}}	
		if (ganador==2){
			//Logos J2
			if(seleccionj2==1){contexto.add.image(1470, 80, 'rocklogo').setScale(0.14);}
			if(seleccionj2==2){contexto.add.image(1482, 80, 'paperlogo').setScale(0.14);}	
			if(seleccionj2==3){contexto.add.image(1470, 80, 'scissorslogo').setScale(0.14);}}	
}
} 
