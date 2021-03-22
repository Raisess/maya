import { IEntity, EntityPos } from "./Entity";

interface ICanvasEntity {
	update: (pos: EntityPos) => void;
}

export interface ICanvas {
	addEntity(entity: IEntity): ICanvasEntity;
}

export default class Canvas {
	private readonly canvas: HTMLCanvasElement = (document.getElementById("gameCanvas")! as HTMLCanvasElement);

	private ctx: CanvasRenderingContext2D = this.canvas.getContext("2d")!;

	public addEntity(entity: IEntity): any {
		this.ctx.fillStyle = entity.getDraw();
	  this.ctx.fillRect(entity.pos.x, entity.pos.y, entity.props.size.width, entity.props.size.height);

		return {
			update: (pos: EntityPos): void => {
				this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

				this.ctx.fillStyle = entity.getDraw();
	  		this.ctx.fillRect(pos.x, pos.y, entity.props.size.width, entity.props.size.height);
			}
		}
	}
}

