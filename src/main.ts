import Scene from "./engine/Scene";
import Entity from "./engine/Entity";
import Phisics from "./engine/Phisics";

const scene: Scene = new Scene({ width: 1080, height: 720 });

const bg: Entity = new Entity(
	"bg",
	"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpm1.narvii.com%2F6904%2F1ef7b698643b1eaf072414fa53df8977dda263e0r1-1919-1081v2_hq.jpg&f=1&nofb=1",
	{ width: 1080, height: 720 },
	{ x: 0, y: 0 },
	"image"
);

scene.addEntity(bg);

const player: Entity = new Entity(
	"Player",
	"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fvignette1.wikia.nocookie.net%2Fpixelpeople%2Fimages%2Fa%2Fa3%2FWizard2Female.png%2Frevision%2Flatest%3Fcb%3D20140918115845&f=1&nofb=1",
	{ width: 40, height: 50 },
	{ x: 10, y: 530 },
	"image"
);

scene.addEntity(player);
Phisics.addGravity(player, 600);

const block: Entity = new Entity(
	"block",
	"red",
	{ width: 30, height: 40 },
	{ x: 600, y: 10 },
	"solid"
);

scene.addEntity(block);
Phisics.addGravity(block, 600);

const text: Entity = new Entity(
	"",
	"blue 20px Arial",
	{ width: 0, height: 0 },
	{ x: 0, y: 0 },
	"text"
);

scene.addEntity(text);

const i: any = setInterval((): void => {
	if(Phisics.isColliding(player, block)) {
		clearInterval(i);
		text.setPosX(player.getPosX());
		text.setPosY(player.getPosY());
		text.setName("picked up!");

		setTimeout((): void => {
			scene.destroyEntity(text);
		}, 700);

		scene.destroyEntity(block);
	}
}, 20);

scene.onEvent("keydown", (ev: KeyboardEvent): void => {
	switch (ev.key) {
		case "w": player.setPosY(player.getPosY() - 100);
			break;
		case "d": player.setPosX(player.getPosX() + 10);
			break;
		case "a": player.setPosX(player.getPosX() - 10);
			break;
		default:
			break;
	}
});

