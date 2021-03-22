import Scene from "./engine/Scene";
import Entity from "./engine/Entity";

const scene: Scene = new Scene();

const player: Entity = new Entity(
	"Player",
	"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fvignette1.wikia.nocookie.net%2Fpixelpeople%2Fimages%2Fa%2Fa3%2FWizard2Female.png%2Frevision%2Flatest%3Fcb%3D20140918115845&f=1&nofb=1",
	{ width: 40, height: 50 },
	{ x: 10, y: 10 }
);

scene.addEntity(player);

document.addEventListener("keydown", (ev: KeyboardEvent): void => {
	if (ev.key === "s") {
		player.setPosY(player.getPosY() + 10);
	} else if (ev.key === "w") {
		player.setPosY(player.getPosY() - 10);
	} else if (ev.key === "d") {
		player.setPosX(player.getPosX() + 10);
	} else if (ev.key === "a") {
		player.setPosX(player.getPosX() - 10);
	}
});

const enemy: Entity = new Entity(
	"Enemy",
	"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fpixelpeople%2Fimages%2F9%2F96%2FZoologist2Male.png%2Frevision%2Flatest%3Fcb%3D20140918120503&f=1&nofb=1",
	{ width: 40, height: 50 },
	{ x: 60, y: 300 }
);

scene.addEntity(enemy);

setInterval((): void => {
	if (enemy.getPosX() > player.getPosX()) {
		enemy.setPosX(enemy.getPosX() - 10);
	} else if (enemy.getPosX() < player.getPosX()) {
		enemy.setPosX(enemy.getPosX() + 10);
	}

	if (enemy.getPosY() > player.getPosY()) {
		enemy.setPosY(enemy.getPosY() - 10);
	} else if (enemy.getPosY() < player.getPosY()) {
		enemy.setPosY(enemy.getPosY() + 10);
	}

	if (enemy.getPosY() === player.getPosY() && enemy.getPosX() === player.getPosX()) {
		scene.destroyEntity(enemy.id);
	}
}, 100);

