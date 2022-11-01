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
		let botoncomojugar = new Button(this.cameras.main.centerX, this.cameras.main.centerY*1.65, getPhrase("¿Como Jugar?"), this, () =>{this.sound.play("CartaFlip")})
		let BotonCfg = this.add.image(this.cameras.main.centerX*1.9, this.cameras.main.centerY*0.20, 'BotonConfig').setScale(0.15);
        BotonCfg.setInteractive();
        BotonCfg.on("pointerdown", (pointer, localX, localY) => {this.sound.play("CartaFlip")
       });
	}

	/*async getTranslations(language){
		await getTranslations(language)
	}*/
		
}
	