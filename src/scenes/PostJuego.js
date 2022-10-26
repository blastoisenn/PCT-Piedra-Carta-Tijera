import Button from "./button"
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
		let j1x;
		let j1y;
		let j2x;
		let j2y;
		let spritej1;
		let spritej2;
		const contexto=this
		const colores=[0, 0xC3EFC2, 0xEFC2C2 ,0xC8C2EF]

        function crearSprites(){
		if(seleccionj1==1){
			spritej1=contexto.add.sprite(500, 600, 'rockatlas',0).setScale(1);}
		if(seleccionj1==2){
			spritej1=contexto.add.sprite(500, 600, 'papersatlas',0).setScale(1);}
		if(seleccionj1==3){
			spritej1=contexto.add.sprite(500, 600, 'scissorsatlas',0).setScale(1);}
		if(seleccionj2==1){
			spritej2=contexto.add.sprite(500, 600, 'rockatlas',0).setScale(0.8)}
		if(seleccionj2==2){
			spritej2=contexto.add.sprite(500, 600, 'papersatlas',0).setScale(0.8)}
		if(seleccionj2==3){
			spritej2=contexto.add.sprite(500, 600, 'scissorsatlas',0).setScale(0.8)}
		}

		

		
		function sprites(){
			spritej1.body.reset(j1x,j1y);
			spritej2.body.reset(j2x,j2y);
			}
        if(ganador==1){
		j1x=500;
		j1y=500;
		j2x=1000;
		j2y=500;
		//sprites()
	    const fondo1=this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'FondoGanador').setScale(0.6);
        const fondo2=this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'FondoPerdedor').setScale(0.6);
        fondo1.tint=colores[seleccionj1]
        fondo2.tint=colores[seleccionj2]
		crearSprites()
		}
		if(ganador==2){
		j1x=1000;
		j1y=500;
		j2x=500;
		j2y=500;
		//sprites()
		const fondo1=this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'FondoGanador').setScale(0.6);
		const fondo2=this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'FondoPerdedor').setScale(0.6);
		fondo1.tint=colores[seleccionj2]
		fondo2.tint=colores[seleccionj1]
		crearSprites()
		}
		if(ganador==0){
		j1x=500;
		j1y=500;
		j2x=500;
		j2y=500;
		//sprites()
		this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'selectfondo').setScale(0.6);
		crearSprites()
		}

		const botonmenu = new Button(this.cameras.main.centerX, this.cameras.main.centerY*1.35, "Menu", this, () =>
			{this.scene.start("MenuPrincipal")})
		const botonvolver = new Button(this.cameras.main.centerX, this.cameras.main.centerY*1.65, "Revancha", this, () =>
			{this.scene.start("hello-world")})
	}
}
