import { IEntity } from "./Entity";

export interface ICanvas {
	addEntity(entity: IEntity): void;
}

export default class Canvas {
	private readonly canvas: HTMLCanvasElement = (document.getElementById("gameCanvas")! as HTMLCanvasElement);

	private ctx: CanvasRenderingContext2D = this.canvas.getContext("2d")!;

	public addEntity(entity: IEntity): void {
		this.ctx.fillStyle = entity.getDraw();
	  this.ctx.fillRect(entity.pos.x, entity.pos.y, entity.props.size.width, entity.props.size.height);
	}
}

