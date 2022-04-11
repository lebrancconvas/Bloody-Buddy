import Phaser from 'phaser';

class Stage1 extends Phaser.Scene
{
	constructor()
	{
		super('stage1');
	}

	create()
	{
		this.add.text(100, 100, "Stage 1");

	}

	update()
	{
		
	}
}

export default Stage1;