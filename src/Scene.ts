import { AnimatedSprite, Container, Graphics, Sprite, Text, Texture } from "pixi.js";
import { MageSprites } from "./MageSprites";
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
        //this.addChild(clampy);

	    const button: Sprite = Sprite.from("Button");
        button.anchor.set(0.5);
        button.position.set(300,-100);
        this.addChild(button);

        const charWithHat: CharacterWithHat = new CharacterWithHat;
        charWithHat.position.set(150,-500);
        //this.addChild(charWithHat);

        const mageWithHat: MageSprites = new MageSprites;
        mageWithHat.position.set(150,-440);
        //this.addChild(mageWithHat);

        const animated: AnimatedSprite = new AnimatedSprite(
                [   //sprites
                    Texture.from("Mage"),
                    Texture.from("MageWink"),
                    Texture.from("MageTalk"),
                    Texture.from("MageWinkTalk")
                ],
                true
            );
        animated.position.set(150,-440);
        animated.animationSpeed = 0.05;
        animated.play();
        this.addChild(animated);

        const myGraphics: Graphics = new Graphics();
        myGraphics.moveTo(0,0);
        myGraphics.lineStyle({
            color: 0xFFFFFF,
            alpha: 1,
            width: 5
        });
        myGraphics.beginFill(0xFF0000,1);
        myGraphics.drawCircle(0,0,100);
        myGraphics.moveTo(100,0)
        myGraphics.lineTo(150,150);
        myGraphics.lineTo(0,100);
        myGraphics.endFill();
        myGraphics.position.set(100,-500);
        this.addChild(myGraphics);

        const myText: Text = new Text(
            "May god forgive you,\nfor I won't",
            {fontFamily:"Times New Roman"}
        );
        myText.position.set(-20,-525);
        this.addChild(myText)
    }
}