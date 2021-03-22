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
const playerEntity: ISceneEntity = scene.addEntity(player);

document.addEventListener("keydown", (ev: KeyboardEvent): void => {
	if (ev.key === "s") {
		playerEntity.update({ y: player.pos.y + 10 });
	} else if (ev.key === "w") {
		playerEntity.update({ y: player.pos.y - 10 });
	} else if (ev.key === "d") {
		playerEntity.update({ x: player.pos.x + 10 });
	} else if (ev.key === "a") {
		playerEntity.update({ x: player.pos.x - 10 });
	}
});

const enemy: Entity = new Entity(
	"Enemy",
	"red",
	{ width: 30, height: 30 },
	{ x: 60, y: 10 }
);
const enemyEntity: ISceneEntity = scene.addEntity(enemy);

enemyEntity.update({ x: 60, y: 300 });

