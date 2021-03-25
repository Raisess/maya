import IEntity from "./IEntity";

export type SceneProps = {
	width:  number;
	height: number;
};

interface KeyboardEventCallback {
	(ev: KeyboardEvent): void;
}

export default interface IScene {
	addEntity(entity: IEntity):     void;
	destroyEntity(entity: IEntity): void;

	onKeyboardEvent(callback: KeyboardEventCallback): void;

	getProps(): SceneProps;
}

