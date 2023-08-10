import { NineSlicePlane, Text, Texture } from "pixi.js";

export class MenuButton extends NineSlicePlane{
    constructor(buttonWidth: number, buttonHeight: number, buttonText: string, fontSize: number, color: any, fontFamily: string){
        super(Texture.from("ButtonTexture"),6,6,6,6);
        this.width  = buttonWidth;
        this.height = buttonHeight;
        const halfbuttonWidth = buttonWidth/2;
        this.position.x -= halfbuttonWidth;

        const _buttonText = new Text(buttonText,
            {
                fontSize: fontSize,
                fill: color,
                fontFamily:fontFamily,
            }
        )
        _buttonText.anchor.set(0.5);
        _buttonText.position.set(halfbuttonWidth,buttonHeight/2);
        this.addChild(_buttonText);
    }
}