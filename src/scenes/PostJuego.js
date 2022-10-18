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
		const colores=[0, 0xC3EFC2, 0xEFC2C2 ,0xC8C2EF]
        if(ganador==1){
	    const fondo1=this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'FondoGanador').setScale(0.6);
        const fondo2=this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'FondoPerdedor').setScale(0.6);
        fondo1.tint=colores[seleccionj1]
        fondo2.tint=colores[seleccionj2]
		}
		if(ganador==2){
		const fondo1=this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'FondoGanador').setScale(0.6);
		const fondo2=this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'FondoPerdedor').setScale(0.6);
		fondo1.tint=colores[seleccionj2]
		fondo2.tint=colores[seleccionj1]
		}
		if(ganador==0){
		this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'selectfondo').setScale(0.6);
		}

		const botonmenu = new Button(this.cameras.main.centerX, this.cameras.main.centerY*1.35, "Menu", this, () =>
			{this.scene.start("MenuPrincipal")})
		const botonvolver = new Button(this.cameras.main.centerX, this.cameras.main.centerY*1.65, "Revancha", this, () =>
			{this.scene.start("hello-world")})
	}
}
