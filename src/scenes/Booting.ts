import Phaser from 'phaser';

class Booting extends Phaser.Scene
{
	constructor()
	{
		super('booting');
	}

	preload()
	{
		this.load.spritesheet("man", "assets/visual/sprite/ToonSet/Male person/Tilesheet/character_malePerson_sheet.png", {
			frameWidth: 16,
			frameHeight: 16 
		});
	}

	create()
	{
		this.add.text(100, 100, "Loading...");
		this.scene.start("start"); 
	}
}

export default Booting;