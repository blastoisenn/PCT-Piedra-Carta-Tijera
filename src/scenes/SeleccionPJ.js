import { getPhrase } from "./Services/translations"


export default class SeleccionPJ extends Phaser.Scene
{
	constructor()
	{super('SeleccionPJ')}
	
	create() { 
		const contextoPJ =this
let papernormalposedestroy
let rocknormalposedestroy
let scissorsnormalposedestroy
let rocklogodestroy
let paperlogodestroy
let scissorslogodestroy
let posxjg1 = 350
let posyjg1 = 690
let posxjg2 = 1600
let posyjg2 = 690
let seleccionj1=0
let seleccionj2=0
let lock1=0
let lock2=0
let lock3=0
let jugadoresselec=0;
let eligej1
let colores=[0xC3EFC2, 0xEFC2C2 ,0xC8C2EF]

		this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'selectfondo').setScale(0.6);
		
		contextoPJ.add.text(730, 50, getPhrase('Elige'), { 
			font: '145px Happy Chicken',
			stroke: '#000000',
			strokeThickness: 11,})
		
		eligej1 = contextoPJ.add.text(840, 270, getPhrase('J1'), { 
			font: '180px Happy Chicken',
			stroke: '#000000',
			strokeThickness: 11,})
		
			function crearVS(){
			let versusb = contextoPJ.add.image(contextoPJ.cameras.main.centerX, contextoPJ.cameras.main.centerY+350, 'VS').setScale(0.11);
		versusb.setInteractive();
		versusb.on('pointerdown', (pointer, localX, localY) => {
		if(jugadoresselec==2){
		
			contextoPJ.scene.start("hello-world",{ seleccionj1: seleccionj1, seleccionj2: seleccionj2  })}
		
		})}

		
		
		///////////////////////// PAPER
		let papersmouse = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY+120, 'papersicon').setScale(0.1);
		papersmouse.setInteractive();
		
		papersmouse.on('pointerover', (pointer, localX, localY) => {
		if(jugadoresselec<2){
		if(seleccionj1==0){
		papersmouse.setDepth(1);
		papersmouse.setScale(0.125);
		
		papernormalposedestroy = this.add.image(posxjg1, posyjg1, 'papersatlas', 0).setScale(1.05);
		papernormalposedestroy.flipX=true
		paperlogodestroy = this.add.image(300, 970, 'paperlogo').setScale(0.27);
	    lock1=1;
		
	}
		else{
		papersmouse.setDepth(1);
		papersmouse.setScale(0.125);
		
		

		papernormalposedestroy = this.add.image(posxjg2, posyjg2, 'papersatlas', 0).setScale(1.05);
		paperlogodestroy = this.add.image(1620, 970, 'paperlogo').setScale(0.27)
		lock1=1;}}
        papersmouse.on('pointerout' , (pointer, localX, localY) => {
		if(jugadoresselec<2){
		if(lock1==1){
		papersmouse.setDepth(0);
		papersmouse.setScale(0.1);
		papernormalposedestroy.destroy();
		paperlogodestroy.destroy();
		
		
	    lock1=0;}}})})				
						
		/////////////////////// ROCK

	    let rockmouse = this.add.image(this.cameras.main.centerX-200, this.cameras.main.centerY+120, 'rockicon').setScale(0.1);
	    rockmouse.setInteractive();

	    rockmouse.on('pointerover', (pointer, localX, localY) => {
		if(jugadoresselec<2){
		if(seleccionj1==0){
		rockmouse.setDepth(1);
		rockmouse.setScale(0.125);
	    rocknormalposedestroy = this.add.image(posxjg1, posyjg1, 'rockatlas', 0).setScale(1.05)
		rocknormalposedestroy.flipX=true;
		rocklogodestroy = this.add.image(320, 970, 'rocklogo').setScale(0.27)
		lock2=1;}
		
		else{
		rockmouse.setDepth(1);
		rockmouse.setScale(0.125);
		
		rocknormalposedestroy = this.add.image(posxjg2, posyjg2, 'rockatlas', 0).setScale(1.05);
		rocklogodestroy = this.add.image(1620, 970, 'rocklogo').setScale(0.27)
		lock2=1;}}
	    rockmouse.on('pointerout' , (pointer, localX, localY) => {
		if(jugadoresselec<2){
		if(lock2==1){
		rockmouse.setDepth(0);
		rockmouse.setScale(0.1);
	    rocknormalposedestroy.destroy();
		rocklogodestroy.destroy();
	    
		lock2=0;}}})})

		////////////////////////// SCISSORS	

	    let scissorsmouse = this.add.image(this.cameras.main.centerX+200, this.cameras.main.centerY+120, 'scissorsicon').setScale(0.1);
	    scissorsmouse.setInteractive();

	    scissorsmouse.on('pointerover', (pointer, localX, localY) => {
		if(jugadoresselec<2){
		if(seleccionj1==0){
		scissorsmouse.setDepth(1);
		scissorsmouse.setScale(0.125);
	    scissorsnormalposedestroy = this.add.image(posxjg1, posyjg1, 'scissorsatlas', 0).setScale(0.9);
		scissorslogodestroy = this.add.image(320, 970, 'scissorslogo').setScale(0.27);
		lock3=1;}
		
		else{
		scissorsmouse.setDepth(1);
		scissorsmouse.setScale(0.125);
		scissorsnormalposedestroy = this.add.image(posxjg2, posyjg2, 'scissorsatlas', 0).setScale(0.9);
		scissorsnormalposedestroy.flipX=true;
		scissorslogodestroy = this.add.image(1620, 970, 'scissorslogo').setScale(0.27)
		lock3=1;}}
	    scissorsmouse.on('pointerout' , (pointer, localX, localY) => {
		if(jugadoresselec<2){
		if(lock3==1){
		scissorsmouse.setDepth(0);
		scissorsmouse.setScale(0.1);				
		scissorsnormalposedestroy.destroy();
	    scissorslogodestroy.destroy();
		lock3=0}}})
		
	})
			
			
		////////////////////// SELECCIONAR PERSONAJE
			rockmouse.on('pointerdown', (pointer, localX, localY) => {
				
				if(jugadoresselec<2){
				if(seleccionj1==0){
				rockmouse.destroy();
				
				let fondo1=this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'fondoselec1').setScale(0.6);
				
				fondo1.tint=colores[0];
				this.add.image(posxjg1, 590, 'rockatlas', 1).setScale(1.05).setDepth(0);
				let rockmouse2 = this.add.image(this.cameras.main.centerX-200, this.cameras.main.centerY+120, 'rockicon2').setScale(0.1);
				this.add.image(320, 970, 'rocklogo').setScale(0.27)
				seleccionj1=1;
			    jugadoresselec++;
				rocknormalposedestroy.destroy();
				EligeJugador();
			}
				else{
				rockmouse.destroy();
				
				let fondo2=this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'fondoselec2').setScale(0.6);
				let rockmouse2 = this.add.image(this.cameras.main.centerX-200, this.cameras.main.centerY+120, 'rockicon2').setScale(0.1);
				fondo2.tint=colores[0];
				this.add.image(posxjg2, 590, 'rockatlas', 1).setScale(1.05).setDepth(0).flipX=true;
				this.add.image(1620, 970, 'rocklogo').setScale(0.27)
				scissorsmouse.setDepth(1);
				seleccionj2=1;
				jugadoresselec++;
				rocknormalposedestroy.destroy();
				crearVS()
			}
				}
				
				EligeJugador();
			})	
	   

			papersmouse.on('pointerdown', (pointer, localX, localY) => {
				papersmouse.setDepth(2);
				if(jugadoresselec<2){
				if(seleccionj1==0){
				papersmouse.destroy();
				
				let fondo1=this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'fondoselec1').setScale(0.6);
				let papersmouse2 = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY+120, 'papersicon2').setScale(0.1);
				fondo1.tint=colores[1];
				this.add.image(posxjg1, posyjg1, 'papersatlas', 1).setScale(0.9);
				this.add.image(350, 970, 'paperlogo').setScale(0.27)
				
				seleccionj1=2;
				jugadoresselec++;
				papernormalposedestroy.destroy();
				rockmouse.setDepth(1);
				EligeJugador();
			}
				else{
				papersmouse.destroy();
				
				let fondo2=this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'fondoselec2').setScale(0.6);
				let papersmouse2 = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY+120, 'papersicon2').setScale(0.1);
				fondo2.tint=colores[1];
				this.add.image(posxjg2, posyjg2, 'papersatlas', 1).setScale(0.9).flipX=true;
				this.add.image(1620, 970,  'paperlogo').setScale(0.27)
				scissorsmouse.setDepth(1);
				seleccionj2=2;
				jugadoresselec++;
				papernormalposedestroy.destroy();
				crearVS()
			}
	            }
				EligeJugador();
			})
				
				

			
			scissorsmouse.on('pointerdown', (pointer, localX, localY) => {
				scissorsmouse.setDepth(2);
				if(jugadoresselec<2){
				if(seleccionj1==0){
				
				let fondo1=this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'fondoselec1').setScale(0.6);
				let scissorsmouse2 = this.add.image(this.cameras.main.centerX+200, this.cameras.main.centerY+120, 'scissorsicon2').setScale(0.1);
                fondo1.tint=colores[2];
				this.add.image(posxjg1, posyjg1, 'scissorsatlas',1).setScale(0.9);
				this.add.image(300, 970, 'scissorslogo').setScale(0.27)
				rockmouse.setDepth(1);
				scissorsmouse.destroy();
				seleccionj1=3;
				jugadoresselec++;
				scissorsnormalposedestroy.destroy();
				EligeJugador();
			}	
				else{
				scissorsmouse.destroy();
				
				let fondo2=this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'fondoselec2').setScale(0.6);
				let scissorsmouse2 = this.add.image(this.cameras.main.centerX+200, this.cameras.main.centerY+120, 'scissorsicon2').setScale(0.1);
				this.add.image(posxjg2, posyjg2, 'scissorsatlas',1).setScale(0.9).flipX=true;
				fondo2.tint=colores[2];
				this.add.image(1620, 970,  'scissorslogo').setScale(0.27)
				seleccionj2=3;
				jugadoresselec++;
				scissorsnormalposedestroy.destroy();
				crearVS()
			}
				}
				EligeJugador();
				
			})	
				
	
		
		
				
				
				function EligeJugador(){
					if(jugadoresselec==1){
			 	contextoPJ.add.text(835, 270, getPhrase('J2'), { 
					font: '180px Happy Chicken',
					stroke: '#000000',
					strokeThickness: 11,})
					eligej1.destroy();
					;}
 }


}

}