import { IEntity } from "./Entity";

type SceneEntityPos = {
	x?: number;
	y?: number;
};

export interface ISceneEntity {
	update: (pos: SceneEntityPos) => void;
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
	}

	public addEntity(entity: IEntity): any {
		this.ctx.fillStyle = entity.getDraw();
	  this.ctx.fillRect(entity.pos.x, entity.pos.y, entity.props.size.width, entity.props.size.height);

		this.entities.push(entity);

		return {
			update: (pos: SceneEntityPos): void => {
				const name: string = entity.getName();

				this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

				for (let i: number = 0; i < this.entities.length; i++) {
					const ent: IEntity = this.entities[i];

					this.ctx.fillStyle = ent.getDraw();

					if (ent.getName() === name) {
						this.entities[i].pos.x = pos.x || ent.pos.x;
						this.entities[i].pos.y = pos.y || ent.pos.y;

		  			this.ctx.fillRect(this.entities[i].pos.x, this.entities[i].pos.y, ent.props.size.width, ent.props.size.height);
					} else {
		  			this.ctx.fillRect(ent.pos.x, ent.pos.y, ent.props.size.width, ent.props.size.height);
					}
				}
			}
		}
	}
}

