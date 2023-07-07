import {Container, Sprite, Texture} from "pixi.js";
import { Button } from "../UI/Button";

export class UItest extends Container {

    private myButton: Button = new Button(
        Texture.from("ButtonBig"),
        Texture.from("ButtonSmall"),
        Texture.from("ButtonBig"),
        ()=>{console.log("function");}
    )

    constructor()
    {
        super();

        const myBG: Sprite = Sprite.from("BackGround");
        myBG.anchor.set(0.5);
        myBG.position.set(300,-300);
        this.addChild(myBG);

        this.myButton.pivot.set(0.5);
        this.myButton.position.set(250,-350);
        this.addChild(this.myButton);
    }
}
