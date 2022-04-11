import Phaser from 'phaser';

class Booting extends Phaser.Scene
{
	constructor()
	{
		super('booting');
	}

	preload()
	{
		
	}

	create()
	{
		this.add.text(100, 100, "Loading...");
	}
}

export default Booting;