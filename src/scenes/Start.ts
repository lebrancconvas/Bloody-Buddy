import Phaser from 'phaser';

class Start extends Phaser.Scene
{
	private startKey;

	constructor()
	{
		super('start');
	}

	create()
	{
		this.add.text(100, 100, "Bloody Buddy...");
		this.add.text(100, 200, "Press Enter to Start");
		this.startKey = this.input.keyboard.addKey('ENTER');
	}

	update()
	{
		if(this.startKey.isDown)
		{
			this.scene.start("stage1");
		}
	}
}	

export default Start;