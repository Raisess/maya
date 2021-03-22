import { IEntity } from "./Entity";

export default class Canvas {
	private readonly canvas: HTMLCanvasElement = (document.getElementById("gameCanvas")! as HTMLCanvasElement);

	private ctx: CanvasRenderingContext2D = this.canvas.getContext("2d")!;

	constructor() {
		this.ctx.font = "30px Arial";
	}

	public addEntity(entity: IEntity): void {
		this.ctx.fillText(entity.getDraw(), entity.pos.x, entity.pos.y);
	}
}

