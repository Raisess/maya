import Scene from "../engine/Scene";
import Entity from "../engine/Entity";
import Physics from "../engine/Physics";
import Utils from "../engine/Utils";

import { bg, player, block, text } from "./entities";

import { fps } from "./ui/fpsUI";

const scene: Scene = new Scene({ width: 1080, height: 720 });

scene.addEntity(bg);

scene.addEntity(player);
Physics.addGravity(player);

scene.addEntity(block);
Physics.addGravity(block);

scene.addEntity(text);

let lastTime:  number = performance.now();
let delta:     number = 0;
let frames:    number = 0;
let totalTime: number = 0;

Utils.loop((): void => {
	let now: number = performance.now();

  delta      = now-lastTime;
  lastTime   = now;
  totalTime += delta;
  frames++;

	fps.innerHTML = "fps: " + (1000 * frames / totalTime).toFixed(2);

	if(Physics.isColliding(player, block)) {
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

