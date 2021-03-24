import IEntity from "./IEntity";

export type SceneProps = {
	width:  number;
	height: number;
};

export default interface IScene {
	addEntity(entity: IEntity):      void;
	destroyEntity(entityId: string): void;

	getProps(): SceneProps;
}

