let papernormalposedestroy
let rocknormalposedestroy
let scissorsnormalposedestroy
let posxjg1 = 300
let posyjg1 = 500
let posxjg2 = 1620
let posyjg2 = 500
let lockpaper = 0
let lockrock = 0
let lockscissors = 0
let seleccionj1=0
let seleccionj2=0
let lock1=0
let lock2=0
let lock3=0
let jugadoresselec=0;

export default class SeleccionPJ extends Phaser.Scene
{
	constructor()
	{super('SeleccionPJ')}
	
	create() { 

		this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'selectfondo').setScale(0.6);
		let versusb = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY+200, 'VS').setScale(0.1);
		versusb.setInteractive();
		versusb.on('pointerdown', (pointer, localX, localY) => {
		if(jugadoresselec==2){
		this.scene.start("hello-world")}})
		
		///////////////////////// PAPER
		let papersmouse = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'papersicon').setScale(0.1);
		papersmouse.setInteractive();
		
		papersmouse.on('pointerover', (pointer, localX, localY) => {
		if(jugadoresselec<2){
		if(seleccionj1==0){
		papersmouse.setDepth(1);
		papersmouse.setScale(0.125);
		papernormalposedestroy = this.add.image(posxjg1, posyjg1, 'papernormalpose').setScale(0.28);
	    lock1=1;}
		else{
		papersmouse.setDepth(1);
		papersmouse.setScale(0.125);
		papernormalposedestroy = this.add.image(posxjg2, posyjg2, 'papernormalpose').setScale(0.28);
		lock1=1;}}
        papersmouse.on('pointerout' , (pointer, localX, localY) => {
		if(jugadoresselec<2){
		if(lock1==1){
		papersmouse.setDepth(0);
		papersmouse.setScale(0.1);
		papernormalposedestroy.destroy();
	    lock1=0;}}})})				
						
		/////////////////////// ROCK

	    let rockmouse = this.add.image(this.cameras.main.centerX-200, this.cameras.main.centerY, 'rockicon').setScale(0.1);
	    rockmouse.setInteractive();

	    rockmouse.on('pointerover', (pointer, localX, localY) => {
		if(jugadoresselec<2){
		if(seleccionj1==0){
		rockmouse.setDepth(1);
		rockmouse.setScale(0.125);
	    rocknormalposedestroy = this.add.image(posxjg1, posyjg1, 'rocknormalpose').setScale(0.28);
		lock2=1;}
		else{
		rockmouse.setDepth(1);
		rockmouse.setScale(0.125);
		rocknormalposedestroy = this.add.image(posxjg2, posyjg2, 'rocknormalpose').setScale(0.28);
		lock2=1;}}
	    rockmouse.on('pointerout' , (pointer, localX, localY) => {
		if(jugadoresselec<2){
		if(lock2==1){
		rockmouse.setDepth(0);
		rockmouse.setScale(0.1);
	    rocknormalposedestroy.destroy();
	    lock2=0;}}})})

		////////////////////////// SCISSORS	

	    let scissorsmouse = this.add.image(this.cameras.main.centerX+200, this.cameras.main.centerY, 'scissorsicon').setScale(0.1);
	    scissorsmouse.setInteractive();

	    scissorsmouse.on('pointerover', (pointer, localX, localY) => {
		if(jugadoresselec<2){
		if(seleccionj1==0){
		scissorsmouse.setDepth(1);
		scissorsmouse.setScale(0.125);
	    scissorsnormalposedestroy = this.add.image(posxjg1, posyjg1, 'scissorsnormalpose').setScale(0.28);
		lock3=1;}
		else{
		scissorsmouse.setDepth(1);
		scissorsmouse.setScale(0.125);
		scissorsnormalposedestroy = this.add.image(posxjg2, posyjg2, 'scissorsnormalpose').setScale(0.28);
		lock3=1;}}
	    scissorsmouse.on('pointerout' , (pointer, localX, localY) => {
		if(jugadoresselec<2){
		if(lock3==1){
		scissorsmouse.setDepth(0);
		scissorsmouse.setScale(0.1);				
		scissorsnormalposedestroy.destroy();
	    lock3=0}}})})
			
			
		////////////////////// SELECCIONAR PERSONAJE
			rockmouse.on('pointerdown', (pointer, localX, localY) => {
				if(jugadoresselec<2){
				if(seleccionj1==0){
				rockmouse.destroy();
				let rockmouse2 = this.add.image(this.cameras.main.centerX-200, this.cameras.main.centerY, 'rockicon2').setScale(0.1);
				this.add.image(posxjg1, posyjg1, 'rocknormalpose').setScale(0.28);
				seleccionj1=1;
			    jugadoresselec++;}
				else{
				rockmouse.destroy();
				let rockmouse2 = this.add.image(this.cameras.main.centerX-200, this.cameras.main.centerY, 'rockicon2').setScale(0.1);
				this.add.image(posxjg2, posyjg2, 'rocknormalpose').setScale(0.28);
				seleccionj2=1;
				jugadoresselec++;}
				}})	
	   

			papersmouse.on('pointerdown', (pointer, localX, localY) => {
				if(jugadoresselec<2){
				if(seleccionj1==0){
				papersmouse.destroy();
				let papersmouse2 = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'papersicon2').setScale(0.1);
				this.add.image(posxjg1, posyjg1, 'papernormalpose').setScale(0.28);
				seleccionj1=2;
				jugadoresselec++;}
				else{
				papersmouse.destroy();
				let papersmouse2 = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'papersicon2').setScale(0.1);
				this.add.image(posxjg2, posyjg2, 'papernormalpose').setScale(0.28);
				seleccionj2=2;
				jugadoresselec++;}
	            }})

			
			scissorsmouse.on('pointerdown', (pointer, localX, localY) => {
				if(jugadoresselec<2){
				if(seleccionj1==0){
				let scissorsmouse2 = this.add.image(this.cameras.main.centerX+200, this.cameras.main.centerY, 'scissorsicon2').setScale(0.1);
				this.add.image(posxjg1, posyjg1, 'scissorsnormalpose').setScale(0.28);
				scissorsmouse.destroy();
				seleccionj1=3;
				jugadoresselec++;}	
				else{
				scissorsmouse.destroy();
				let scissorsmouse2 = this.add.image(this.cameras.main.centerX+200, this.cameras.main.centerY, 'scissorsicon2').setScale(0.1);
				this.add.image(posxjg2, posyjg2, 'scissorsnormalpose').setScale(0.28);
				seleccionj2=3;
				jugadoresselec++;}
				}})	
		   
	
 }
} 
	  

	 
  