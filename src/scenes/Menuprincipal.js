import Button from "./button"
import { getTranslations, getPhrase } from "./Services/translations"

export default class MenuPrincipal extends Phaser.Scene
{
	#language
	constructor()
	{
		super('MenuPrincipal')
	}
	
	preload() {
		
		}

		init(data)
{
    //this.language=data.language
	
}

	create(){
        
		//let idioma=this.language
		this.menuMusic = this.sound.add("MusicaMenu")
		var musicConfig = {
			mute: false,
			volume: 1,
			rate: 1,
			detune: 1,
			seek: 1,
			loop: true,
			delay: 0,
		}
	
		//getTranslations(this.#language)
		
		this.menuMusic.play(musicConfig)
		this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, "FondoMenu").setScale(0.6);
		this.add.image(this.cameras.main.centerX, this.cameras.main.centerY*0.45, "Logo").setScale(0.5);
		let botonjugar = new Button(this.cameras.main.centerX, this.cameras.main.centerY*1.35, getPhrase("Jugar"), this, () =>
			{this.menuMusic.stop() ,this.scene.start("SeleccionPJ")})
		let botoncomojugar = new Button(this.cameras.main.centerX, this.cameras.main.centerY*1.65, getPhrase("¿Como Jugar?"), this, () =>{
			let tventana=this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, "tutorial").setScale(0.45);
			let cerrar=this.add.image(this.cameras.main.centerX*1.7, this.cameras.main.centerY*0.35, "X").setScale(0.1);
			// texto arriba
			let textotut1= this.add.text(300, 300, getPhrase("Memoriza"),
			{font: '60px Happy Chicken',
			stroke: '#000000',
			strokeThickness: 11,});
			let textotut2= this.add.text(845, 300, getPhrase("Cambia"),
			{font: '60px Happy Chicken',
			stroke: '#000000',
			strokeThickness: 11,});
			let textotut3= this.add.text(1325, 300, getPhrase("Batalla"),
			{font: '60px Happy Chicken',
			stroke: '#000000',
			strokeThickness: 11,});
			//texto abajo
			let textotut4= this.add.text(250, 750, getPhrase("las cartas en el campo y las manos"),
			{font: '24px Happy Chicken',
			stroke: '#000000',
			strokeThickness: 11,});
			let textotut5= this.add.text(785, 750, getPhrase("las cartas de tu mano y campo"),
			{font: '24px Happy Chicken',
			stroke: '#000000',
			strokeThickness: 11,});
			let textotut6= this.add.text(1265, 750, getPhrase("contra la mano de tu oponente"),
			{font: '24px Happy Chicken',
			stroke: '#000000',
			strokeThickness: 11,});

			this.sound.play("CartaFlip")})
		let BotonCfg = this.add.image(this.cameras.main.centerX*1.9, this.cameras.main.centerY*0.20, 'BotonConfig').setScale(0.15);
        BotonCfg.setInteractive();
        BotonCfg.on("pointerdown", (pointer, localX, localY) => {this.sound.play("CartaFlip")
       });
	}

	/*async getTranslations(language){
		await getTranslations(language)
	}*/
		
}
	