import IEntity from "./IEntity";

export type SceneProps = {
	width:  number;
	height: number;
};

export default interface IScene {
	addEntity(entity: IEntity):     void;
	destroyEntity(entity: IEntity): void;

	onEvent(event: string, callback: Function): void;

	getProps(): SceneProps;
}

