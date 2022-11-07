import Phaser from 'phaser'
import Cartas from './scenes/Cartas'
import Idioma from './scenes/Idioma'
import Juego from './scenes/Juego'
import MenuPrincipal from './scenes/Menuprincipal'
import PantallaCarga from './scenes/PantallaCarga'
import PostJuego from './scenes/PostJuego'
import SeleccionPJ from './scenes/SeleccionPJ'

const config = {
	type: Phaser.AUTO,
	width: 1920,
	height: 1080,
	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH,
		min: {
			width: 800,
			height: 450,
		},
		max: {
			width: 1600,
			height: 900,
		},
	},
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 0 },
			debug: false,
		}
	},


	scene: [PantallaCarga, Idioma, MenuPrincipal,  Juego, Cartas,  SeleccionPJ, PostJuego]

}

export default new Phaser.Game(config)
