import { Container, Sprite } from "pixi.js";

export class MageSprites extends Container {
    constructor()
    {
        super();
        const mage: Sprite = Sprite.from("Mage");

	    const magehat: Sprite = Sprite.from("MageHat");
        magehat.position.set(-50,-117);

	    this.addChild(mage);
	    this.addChild(magehat);
    }
}