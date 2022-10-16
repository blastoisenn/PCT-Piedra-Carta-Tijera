let SeleccionPAPER = 0
let SeleccionROCK = 0
let SeleccionSCISSORS = 0
let rockmouse
let scissorsmouse
let papersmouse
let papernormalposedestroy
let rocknormalposedestroy
let scissorsnormalposedestroy
let posxjg1 = 150
let posyjg1 = 230
let lockpaper = 0
let lockrock = 0
let lockscissors = 0

export default class SeleccionPJ extends Phaser.Scene
{
	constructor()
	{
		super('SeleccionPJ')

	
	
	}
	
	
	
	preload() { 
		this.load.image("papersicon", "assets/papersicon.png");
		this.load.image("rockicon", "assets/rockicon.png");
		this.load.image("scissorsicon", "assets/scissorsicon.png");
		this.load.image("selectfondo", "assets/selectfondo.png");
		this.load.image("VS","assets/VS.png");
}
	
	create() { 

		this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'selectfondo').setScale(1);
		this.add.image(this.cameras.main.centerX, this.cameras.main.centerY-50, 'VS').setScale(0.62); 
		
		
		///////////////////////// PAPER
		papersmouse = this.add.image(300, 500, 'papersicon').setScale(0.05);
		papersmouse.setInteractive();
		
		

		papersmouse.on('pointerover', (pointer, localX, localY) => {
			papersmouse.setScale(0.06)
		let papernormalposedestroy = this.add.image(posxjg1, posyjg1, 'papernormalpose').setScale(0.15);

		papersmouse.on('pointerout' , (pointer, localX, localY) => {
			papersmouse.setScale(0.05)
				papernormalposedestroy.destroy();})})

		

				
						
			/////////////////////// ROCK
	rockmouse = this.add.image(410, 500, 'rockicon').setScale(0.05);
	  rockmouse.setInteractive();
	  rockmouse.on('pointerover', (pointer, localX, localY) => {
			rockmouse.setScale(0.06)
	rocknormalposedestroy = this.add.image(posxjg1, posyjg1, 'rocknormalpose').setScale(0.15);
	  this.update()
	   rockmouse.on('pointerout' , (pointer, localX, localY) => {
	   rockmouse.setScale(0.05)
			  rocknormalposedestroy.destroy();})})

	
	
	
		////////////////////////// SCISSORS	  
	scissorsmouse = this.add.image(520, 500, 'scissorsicon').setScale(0.05);
	scissorsmouse.setInteractive();
	scissorsmouse.on('pointerover', (pointer, localX, localY) => {
		scissorsmouse.setScale(0.06)
	scissorsnormalposedestroy = this.add.image(posxjg1, posyjg1, 'scissorsnormalpose').setScale(0.15);
	
	
	 scissorsmouse.on('pointerout' , (pointer, localX, localY) => {
		scissorsmouse.setScale(0.05)
		
		
			scissorsnormalposedestroy.destroy();})})
			
			
		////////////////////// SELECCIONAR PERSONAJE
			rockmouse.on('pointerdown', (pointer, localX, localY) => {
				this.add.image(posxjg1, posyjg1, 'rocknormalpose').setScale(0.15);
				SeleccionROCK = 1
				lockrock = 1
				lockpaper = 0
				lockscissors = 0
				console.log(SeleccionROCK)	
					 })	
	   

			papersmouse.on('pointerdown', (pointer, localX, localY) => {
				this.add.image(posxjg1, posyjg1, 'papernormalpose').setScale(0.15);
				SeleccionPAPER = 1
				lockpaper = 1
				lockrock = 0
				lockscissors = 0
				console.log(SeleccionPAPER)
				 })

			
			scissorsmouse.on('pointerdown', (pointer, localX, localY) => {
				this.add.image(posxjg1, posyjg1, 'scissorsnormalpose').setScale(0.15);
				SeleccionSCISSORS = 1
				lockscissors = 1
				lockpaper = 0
				lockrock = 0
				console.log(SeleccionROCK)	
					})	
		   
	
 }
 		 update (){
			if (lockpaper==1){
				posxjg1 = 650
				posyjg1 = 230			
			if (lockrock==1){
				posxjg1 = 650
				posyjg1 = 230
			if (lockscissors==1){
				posxjg1 = 650
				posyjg1 = 230
			  	 
		   }
		 } 
	  }
    }

	 
  }