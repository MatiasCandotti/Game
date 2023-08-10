import { AnimatedSprite, Container, Graphics, Texture } from "pixi.js";
import { MenuButton } from "./MenuButton";

export class TestScene extends Container {
    constructor(){
        super();

        const animatedCharacter: AnimatedSprite = new AnimatedSprite(
            [
                Texture.from("Run1"),
                Texture.from("Run2"),
                Texture.from("Run3"),
                Texture.from("Run4"),
                Texture.from("Run5"),
                Texture.from("Run6")
            ], /*Autoupdate =*/ true
        );

        animatedCharacter.animationSpeed = 0.2;
        animatedCharacter.play();

        animatedCharacter.anchor.set(0.5);
        animatedCharacter.anchor.y *= 2;

        animatedCharacter.x = 100;
        animatedCharacter.y = 130;

        const anchorTracker: Graphics = new Graphics();
        anchorTracker.beginFill(0x000000,0.5);
        anchorTracker.drawCircle(0,0,1);
        anchorTracker.endFill();

        animatedCharacter.addChild(anchorTracker);

        this.addChild(animatedCharacter);

        const myMenu: Container = new Container;
        myMenu.position.x = 100;
        myMenu.position.y = 25;

        const buttonWidth: number = 100;
        const buttonHeight: number = 20;
        const buttonSpacing: number = 2;

        const buttonFontSize: number = 12;
        const buttonFont: string = "Arial";
        const buttonColor = 0xFFFFFF;
        
        const playButton: MenuButton = new MenuButton(buttonWidth,buttonHeight,"Start Game",buttonFontSize,buttonColor,buttonFont);
        myMenu.addChild(playButton);

        const resumeButton: MenuButton = new MenuButton(buttonWidth,buttonHeight,"Resume",buttonFontSize,buttonColor,buttonFont);
        resumeButton.position.y = buttonHeight+buttonSpacing;
        myMenu.addChild(resumeButton);

        const quitButton: MenuButton = new MenuButton(buttonWidth,buttonHeight,"Quit",buttonFontSize,buttonColor,buttonFont);
        quitButton.position.y = 2*(buttonHeight+buttonSpacing);
        myMenu.addChild(quitButton);

        this.addChild(myMenu);
    }
}