import Scene, { ISceneEntity } from "./engine/Scene";
import Entity from "./engine/Entity";

const scene: Scene = new Scene();

const player: Entity = new Entity(
	"Player",
	"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fvignette1.wikia.nocookie.net%2Fpixelpeople%2Fimages%2Fa%2Fa3%2FWizard2Female.png%2Frevision%2Flatest%3Fcb%3D20140918115845&f=1&nofb=1",
	{ width: 40, height: 50 },
	{ x: 10, y: 10 }
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
	"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fpixelpeople%2Fimages%2F9%2F96%2FZoologist2Male.png%2Frevision%2Flatest%3Fcb%3D20140918120503&f=1&nofb=1",
	{ width: 40, height: 50 },
	{ x: 60, y: 10 }
);
const enemyEntity: ISceneEntity = scene.addEntity(enemy);

enemyEntity.update({ x: 60, y: 300 });

