import { Container, Sprite } from "pixi.js";

export class TestScene extends Container {
    constructor(){
        super();

        const myButtonSmall = Sprite.from('ButtonSmall');
        myButtonSmall.anchor.set(0.5);
        myButtonSmall.x = 200;
        myButtonSmall.y = 200;

        myButtonSmall.on("mousedown", this.onMouseDown, this);
        myButtonSmall.on("mouseup", this.onMouseUp, this);
        myButtonSmall.interactive = true;

        this.addChild(myButtonSmall);
    }

    private onMouseDown(){
        console.log("mouse down");
    }
    private onMouseUp(){
        console.log("mouse up");
    }
}