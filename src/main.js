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
	width: 800,
	height: 600,
	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH,
		min: {
			width: 800,
			height: 600,
		},
		max: {
			width: 1600,
			height: 1200,
		},
	},
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 0 },
			debug: false,
		}
	},
	scene: [PantallaCarga, SeleccionPJ,  HelloWorldScene, Cartas, Jugador, MenuPrincipal, PostJuego, Tablero]
}

export default new Phaser.Game(config)
