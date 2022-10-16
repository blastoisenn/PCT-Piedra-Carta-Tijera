import Button from "./button"

export default class MenuPrincipal extends Phaser.Scene
{
	
	constructor()
	{
		super('MenuPrincipal')
	}
	
	preload() {
		this.load.audio("MusicaMenu", "assets/sounds/Música Menú Principal.mp3") 
		this.load.audio("CartaFlip", "assets/sounds/Card_Flip.mp3")
		this.load.image("FondoMenu", "assets/menufondo.png")
		this.load.image("Logo", "assets/logo.png")
		this.load.image("BotonConfig", "assets/Ajustes.png")
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
		this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, "FondoMenu").setScale(0.3);
		this.add.image(this.cameras.main.centerX, this.cameras.main.centerY*0.45, "Logo").setScale(0.25);
		const botonjugar = new Button(this.cameras.main.centerX, this.cameras.main.centerY*1.35, "Jugar", this, () =>
			{this.menuMusic.stop() ,this.scene.start("hello-world")})
		const botoncomojugar = new Button(this.cameras.main.centerX, this.cameras.main.centerY*1.65, "¿Como Jugar?", this, () =>{this.sound.play("CartaFlip")})
		let BotonCfg = this.add.image(this.cameras.main.centerX*1.8, this.cameras.main.centerY*0.28, 'BotonConfig').setScale(0.1);
        BotonCfg.setInteractive();
        BotonCfg.on("pointerdown", (pointer, localX, localY) => {this.sound.play("CartaFlip")
       });
	}
		
}
	