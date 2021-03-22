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

				this.ctx.drawImage(ent.getDraw(), ent.pos.x, ent.pos.y, ent.props.size.width, ent.props.size.height);
			}
		}
	}

	public addEntity(entity: IEntity): any {
	  this.ctx.drawImage(entity.getDraw(), entity.pos.x, entity.pos.y, entity.props.size.width, entity.props.size.height);

		this.entities.push(entity);

		const name: string = entity.getName();

		return {
			update: (pos: SceneEntityPos): void => {
				this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

				for (let i: number = 0; i < this.entities.length; i++) {
					if (this.entities[i] !== undefined) {
						const ent: IEntity = this.entities[i];

						if (ent.getName() === name) {
							this.entities[i].pos.x = pos.x || ent.pos.x;
							this.entities[i].pos.y = pos.y || ent.pos.y;

							this.ctx.drawImage(ent.getDraw(), this.entities[i].pos.x, this.entities[i].pos.y, ent.props.size.width, ent.props.size.height);
						} else {
							this.ctx.drawImage(ent.getDraw(), ent.pos.x, ent.pos.y, ent.props.size.width, ent.props.size.height);
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

