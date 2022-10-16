export default class PantallaCarga extends Phaser.Scene
{
	constructor()
	{
		super('PantallaCarga')
	}
	preload() {
		
		
		
		var progressBar = this.add.graphics();
		var progressBox = this.add.graphics();
		progressBox.fillStyle(0x2b2829, 0.8);
		progressBox.fillRect(630, 590, 620, 50);
	
		var width = this.cameras.main.width;
		var height = this.cameras.main.height;
		var loadingText = this.make.text({
		x: width / 2,
		y: height / 2 - 50,
		text: 'CARGANDO...',
		style: {
			font: '80px Happy Chicken'
			
			
		}
	});
	loadingText.setOrigin(0.5, 0.5);
	
	var percentText = this.make.text({
	  x: width / 2.04,
	  y: height / 2 + 74,
	  text: '0%',
	  style: {
		  fontSize: '20px',
		  color: '#777',
		  fontFamily: 'Happy Chicken'
		  
		 
		  
	  }
	});
	percentText.setOrigin(0.5, 0.5);
	
	
		this.load.on('progress', function (value) {
		  console.log(value);
		  // @ts-ignore
		  percentText.setText(parseInt((value) * 100 ) + '%');
		  progressBar.clear();
		  progressBar.fillStyle(0xc91429, 1);
		  progressBar.fillRect(640, 600, 600 * value, 30);
	  });
	  
		
		this.load.on('progress', function (value) {
		  console.log(value);
	  });
				  
	  this.load.on('fileprogress', function (file) {
		  console.log(file.src);
	  });
	  this.load.on('complete', function () {
		  console.log('complete');
		  progressBar.destroy();
	progressBox.destroy();
	  });
	  
	  this.load.spritesheet("cartassprites", "assets/cartassprites.png", {
		frameWidth: 150,
		frameHeight: 215,
		 });
	this.load.image("cartaselect1", "assets/cartaselect1.png");
    this.load.image("cartaselect2", "assets/cartaselect2.png");
    this.load.image("switchboton", "assets/confirmarboton.png");
    this.load.image("flipboton", "assets/loadgif.png");
    this.load.image("background", "assets/bg.png");
    this.load.image("block", "assets/block.png");
	this.load.image("papersicon", "assets/papersicon.png");
	this.load.image("rockicon", "assets/rockicon.png");
	this.load.image("scissorsicon", "assets/scissorsicon.png");
	this.load.image("selectfondo", "assets/selectfondo.png");
	this.load.image("papernormalpose","assets/papernormalpose.png");
	this.load.image("scissorsnormalpose","assets/scissorsnormalpose.png");
	this.load.image("rocknormalpose","assets/rocknormalpose.png");
	this.load.image("VS","assets/VS.png");
	
}
	create() { 
		
		
		this.scene.start('SeleccionPJ'); 

  }}