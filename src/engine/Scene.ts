import IScene, { SceneProps } from "./interfaces/IScene";
import IEntity from "./interfaces/IEntity";

import Utils from "./Utils";

export default class Scene implements IScene {
	private readonly canvas: HTMLCanvasElement        = (document.createElement("canvas")! as HTMLCanvasElement);
	private readonly ctx:    CanvasRenderingContext2D = this.canvas.getContext("2d")!;

	private entities: Array<IEntity> = [];

	private props: SceneProps = {
		width:      0,
		height:     0,
		background: ""
	}

	constructor(sceneProps: SceneProps) {
		// add canvas to html
		document.body.insertBefore(this.canvas, document.body.childNodes[0]);

		this.props = sceneProps;
		
		this.canvas.width  = this.props.width;
		this.canvas.height = this.props.height;

		Utils.loop((): void => {
			this.update();
		});
	}

	public getProps(): SceneProps {
		return this.props;
	}

	private setBackground(): void {
		const image: HTMLImageElement = new Image();

		image.src = this.props.background;

		this.ctx.drawImage((image as CanvasImageSource), 0, 0, this.canvas.width, this.canvas.height);
	}

	private update(): void {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.setBackground();

		for (const entity of this.entities) {
			this.rederizeEntity(entity);
		}
	}

	private rederizeEntity(entity: IEntity): void {
		if (entity.type === "image") {
			this.ctx.drawImage((entity.getDraw() as CanvasImageSource), entity.getPosX(), entity.getPosY(), entity.getWidth(), entity.getHeight());
		} else if (entity.type === "text") {
			const textProps: Array<string> = (entity.getDraw() as string).split(" ");

			this.ctx.font      = textProps[1] + " " + textProps[2];
			this.ctx.fillStyle = (textProps[0] as string);
			this.ctx.fillText(entity.getName(), entity.getPosX(), entity.getPosY());	
		} else {
			this.ctx.fillStyle = (entity.getDraw() as string);
			this.ctx.fillRect(entity.getPosX(), entity.getPosY(), entity.getWidth(), entity.getHeight());
		}
	}

	public addEntity(entity: IEntity): void {
		this.entities.push(entity);
	}

	public destroyEntity(entity: IEntity): void {
		entity.destroy();

		this.entities = this.entities.filter((ent: IEntity): boolean => ent.id !== entity.id);
	}
}

