import IEntity from "./IEntity";

export type SceneSize = {
	width:  number;
	height: number;
};

export type SceneProps = {
	readonly currentEntities: Array<IEntity>;

	size: SceneSize;
};

export default interface IScene {
	addEntity(entity: IEntity):      void;
	destroyEntity(entityId: string): void;

	getProps(): SceneProps;
}

