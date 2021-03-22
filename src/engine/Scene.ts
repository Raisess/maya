import { IEntity } from "./Entity";

type SceneEntityPos = {
	x?: number;
	y?: number;
};

export interface ISceneEntity {
	update:  (pos: SceneEntityPos) => void;
	destroy: ()                    => void;
}

export interface IScene {
	addEntity(entity: IEntity): ISceneEntity;
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
		}, 100);
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

	public addEntity(entity: IEntity): any {
		this.entities.push(entity);
	  this.ctx.drawImage(entity.getDraw(), entity.getX(), entity.getY(), entity.getWidth(), entity.getHeight());

		const name: string = entity.getName();

		return {
			update: (pos: SceneEntityPos): void => {
				this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

				for (let i: number = 0; i < this.entities.length; i++) {
					if (this.entities[i] !== undefined) {
						const ent: IEntity = this.entities[i];

						if (ent.getName() === name) {
							this.ctx.drawImage(ent.getDraw(), pos.x || ent.getX(), pos.y || ent.getY(), ent.getWidth(), ent.getHeight());
						} else {
							this.ctx.drawImage(ent.getDraw(), ent.getX(), ent.getY(), ent.getWidth(), ent.getHeight());
						}
					}
				}
			},
			destroy: (): void => {
				for (let i: number = 0; i < this.entities.length; i++) {
					if (this.entities[i].getName() === name) delete this.entities[i];
				}
			}
		}
	}
}

