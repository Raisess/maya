import IEntity from "./IEntity";

export default interface IScene {
	addEntity(entity: IEntity):      void;
	destroyEntity(entityId: string): void;
}

