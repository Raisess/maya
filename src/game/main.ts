import Scene from "../engine/Scene";
import Entity from "../engine/Entity";
import Physics from "../engine/Physics";
import Utils from "../engine/Utils";

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
Physics.addGravity(player);

const block: Entity = new Entity(
	"block",
	"red",
	{ width: 30, height: 40 },
	{ x: 600, y: 10 },
	"solid"
);

scene.addEntity(block);
Physics.addGravity(block);

const text: Entity = new Entity(
	"",
	"blue 20px Arial",
	{ width: 0, height: 0 },
	{ x: 0, y: 0 },
	"text"
);

scene.addEntity(text);

const i: any = Utils.loop((): void => {
	if(Physics.isColliding(player, block)) {
		Utils.clearLoop(i);

		text.setPosX(player.getPosX());
		text.setPosY(player.getPosY());
		text.setName("picked up!");

		setTimeout((): void => {
			scene.destroyEntity(text);
		}, 700);

		scene.destroyEntity(block);
	}
});

let acc: number = 0;

Utils.onKeyboardEvent((ev: KeyboardEvent): void => {
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

	if (ev.key === "k" || ev.key === "j") {
		if (acc < 3) {
			acc++;
			const power: Entity = new Entity(
				"power",
				ev.key === "k" ? "blue" : "yellow",
				{ width: 30, height: 40 },
				{ x: -100, y: -100 },
				"solid"
			);

			scene.addEntity(power);
			power.setPosX(player.getPosX());
			power.setPosY(player.getPosY());

			const a: unknown = Utils.loop((): void => {
				power.setPosX(power.getPosX() + 10);

				if (power.getPosX() > (player.getPosX() + 300) || Physics.isColliding(power, block)) {
					scene.destroyEntity(power);
					Utils.clearLoop(a);
					acc--;
				}

				if (Physics.isColliding(power, block)) alert("a");
			});
		}
	}
});

