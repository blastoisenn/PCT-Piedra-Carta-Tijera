import Button from "./button"

export default class MenuPrincipal extends Phaser.Scene
{
	
	constructor()
	{
		super('MenuPrincipal')
	}
	
	preload() {
		
		}
	create(){

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
		
		this.menuMusic.play(musicConfig)
		this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, "FondoMenu").setScale(0.6);
		this.add.image(this.cameras.main.centerX, this.cameras.main.centerY*0.45, "Logo").setScale(0.5);
		const botonjugar = new Button(this.cameras.main.centerX, this.cameras.main.centerY*1.35, "Jugar", this, () =>
			{this.menuMusic.stop() ,this.scene.start("SeleccionPJ")})
		const botoncomojugar = new Button(this.cameras.main.centerX, this.cameras.main.centerY*1.65, "¿Como Jugar?", this, () =>{this.sound.play("CartaFlip")})
		let BotonCfg = this.add.image(this.cameras.main.centerX*1.9, this.cameras.main.centerY*0.20, 'BotonConfig').setScale(0.15);
        BotonCfg.setInteractive();
        BotonCfg.on("pointerdown", (pointer, localX, localY) => {this.sound.play("CartaFlip")
       });
	}
		
}
	