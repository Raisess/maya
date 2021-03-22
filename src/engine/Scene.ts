import { IEntity } from "./Entity";

export interface IScene {
	addEntity(entity: IEntity): void;
}

export default class Scene implements IScene {
	private readonly canvas: HTMLCanvasElement = (document.getElementById("gameCanvas")! as HTMLCanvasElement);

	private ctx: CanvasRenderingContext2D = this.canvas.getContext("2d")!;

	private entities: Array<IEntity> = [];

	constructor() {
		// clear scene when starts
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

		// update scene in every 100ms
		setInterval((): void => {
			this.update();
		}, 10);
	}

	private update(): void {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

		for (let i: number = 0; i < this.entities.length; i++) {
			if (this.entities[i] !== undefined) {
				const ent: IEntity = this.entities[i];

				this.ctx.drawImage(ent.getDraw(), ent.getX(), ent.getY(), ent.getWidth(), ent.getHeight());
			}
		}
	}

	public addEntity(entity: IEntity): void {
		this.entities.push(entity);
		this.ctx.drawImage(entity.getDraw(), entity.getX(), entity.getY(), entity.getWidth(), entity.getHeight());
	}
}

