import { Container, Sprite } from "pixi.js";
import { CharacterWithHat } from "./CharacterWithHat";

export class Scene extends Container {
    constructor()
    {
        super();

        const myBG: Sprite = Sprite.from("BackGround");
	    myBG.anchor.set(0.5);
        myBG.position.set(300,-300);
        this.addChild(myBG);

        const clampy: Sprite = Sprite.from("Clampy");
	    clampy.anchor.set(0.5);
        clampy.position.set(300,-300);
        this.addChild(clampy);

	    const button: Sprite = Sprite.from("Button");
        button.anchor.set(0.5);
        button.position.set(300,-100);
        this.addChild(button);

        const charWithHat: CharacterWithHat = new CharacterWithHat;
        this.addChild(charWithHat);
    }
}