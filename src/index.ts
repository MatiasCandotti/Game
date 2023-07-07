import { Application, Assets} from 'pixi.js'
import { myAssets } from './assetBundle'
//import { Scene } from './Scenes/SceneTest';
import { UItest } from './Scenes/UITest';

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 800,
	height: 600,
	hello: true
});

const view = app.view as HTMLCanvasElement;
window.addEventListener("resize",()=>{
	const widthRatio  = window.innerWidth/app.screen.width;
	const heightRatio = window.innerHeight/app.screen.height;
	const idealScreenScale = Math.min(widthRatio,heightRatio);

	const idealWidth  = Math.round(app.screen.width*idealScreenScale);
	const idealHeight = Math.round(app.screen.height*idealScreenScale);

	/*app.*/view.style.width  = idealWidth+"px";
	/*app.*/view.style.height = idealHeight+"px";

	const widthDifference  = window.innerWidth - idealWidth;
	const heightDifference = window.innerHeight - idealHeight;

	/*app.*/view.style.marginLeft = Math.floor(widthDifference/2) +"px";
	/*app.*/view.style.marginTop  = Math.floor(heightDifference/2)+"px";
});
window.dispatchEvent(new Event("resize"));

Assets.addBundle("myAssets", myAssets);
Assets.loadBundle("myAssets").then(()=>{
	const myUI: UItest = new UItest;
	app.stage.addChild(myUI);
	myUI.pivot.set(-100,-600);
});