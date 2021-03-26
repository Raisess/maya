import IEntity from "./IEntity";

export type SceneProps = {
	width:  number;
	height: number;
};

export default interface IScene {
	getProps(): SceneProps;

	addEntity(entity: IEntity):     void;
	destroyEntity(entity: IEntity): void;
}

