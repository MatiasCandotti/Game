import { Container, Sprite } from "pixi.js";

export class CharacterWithHat extends Container {
    constructor()
    {
        super();
        const character: Sprite = Sprite.from("Character");
	    character.anchor.set(0);

	    const hat: Sprite = Sprite.from("Hat");
	    hat.scale.set(0.72);

	    this.addChild(character);
	    this.addChild(hat);
    }
}