import IScene from "./interfaces/IScene";
import IEntity from "./interfaces/IEntity";

export default class Scene implements IScene {
	private readonly canvas: HTMLCanvasElement        = (document.getElementById("gameCanvas")! as HTMLCanvasElement);
	private readonly ctx:    CanvasRenderingContext2D = this.canvas.getContext("2d")!;

	private entities: Array<IEntity> = [];

	constructor(updateTime: number = 10) {
		// clear scene when starts
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

		// update scene in every 100ms
		setInterval((): void => {
			this.update();
		}, updateTime);
	}

	private update(): void {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

		for (let i: number = 0; i < this.entities.length; i++) {
			if (this.entities[i] !== undefined) {
				const entity: IEntity = this.entities[i];

				this.ctx.drawImage(entity.getDraw(), entity.getPosX(), entity.getPosY(), entity.getWidth(), entity.getHeight());
			}
		}
	}

	public addEntity(entity: IEntity): void {
		this.entities.push(entity);
		this.ctx.drawImage(entity.getDraw(), entity.getPosX(), entity.getPosY(), entity.getWidth(), entity.getHeight());
	}

	public destroyEntity(entityId: string): void {
		for (let i: number = 0; i < this.entities.length; i++) {
			if (this.entities[i] !== undefined) {
				if (this.entities[i].id === entityId) delete this.entities[i];
			}
		}
	}
}

