import Scene, { ISceneEntity } from "./Scene";
import Entity from "./Entity";

const scene: Scene = new Scene();

const player: Entity = new Entity(
	"Player",
	"blue",
	{ width: 30, height: 30 },
	{ x: 10, y: 10 },
	true
);

const enemy: Entity = new Entity(
	"Enemy",
	"red",
	{ width: 30, height: 30 },
	{ x: 60, y: 10 }
);

const playerEntity: ISceneEntity = scene.addEntity(player);

playerEntity.update({ x: 10, y: 100 });

const enemyEntity: ISceneEntity = scene.addEntity(enemy);

enemyEntity.update({ x: 60, y: 300 });

