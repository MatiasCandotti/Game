import {Container, Sprite, Texture} from "pixi.js";

export class Button extends Container {

    private myButton: Sprite = new Sprite;

    private idle: Texture;
    private push: Texture;
    private over: Texture;
    private callback: Function;

    constructor(idle:Texture, push:Texture, over:Texture, callback:Function)
    {
        super();

        this.myButton.texture = idle;

        this.idle = idle;
        this.push = push;
        this.over = over;
        this.callback = callback;

        this.myButton.on("mousedown", this.onMouseDown, this)
        this.myButton.on("mouseup", this.onMouseUp, this)
        this.myButton.on("mouseenter", this.onMouseEnter, this)
        this.myButton.on("mouseleave", this.onMouseLeave, this)
        this.myButton.interactive = true;

        this.addChild(this.myButton);
    }

    private onMouseDown():void{
        console.log("down");
        this.myButton.texture = this.push;
    }  
    private onMouseUp():void{
        console.log("up");
        this.callback();
        this.myButton.texture = this.idle;

    }
    private onMouseEnter():void{
        console.log("enter");
        this.myButton.texture = this.over;
    } 
    private onMouseLeave():void{
        console.log("leave");
        this.myButton.texture = this.idle;
    } 
}