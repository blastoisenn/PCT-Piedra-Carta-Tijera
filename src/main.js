import Phaser from 'phaser'
import Cartas from './scenes/Cartas'

import HelloWorldScene from './scenes/HelloWorldScene'
import Jugador from './scenes/Jugador'
import MenuPrincipal from './scenes/Menuprincipal'
import PantallaCarga from './scenes/PantallaCarga'
import PostJuego from './scenes/PostJuego'
import SeleccionPJ from './scenes/SeleccionPJ'
import Tablero from './scenes/Tablero'

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
	scene: [HelloWorldScene, Cartas, Jugador, MenuPrincipal, PantallaCarga, PostJuego, SeleccionPJ, Tablero]
}

export default new Phaser.Game(config)
