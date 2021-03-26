import Scene from "../engine/Scene";
import Physics from "../engine/Physics";
import Utils from "../engine/Utils";

import { bg, player, block, text } from "./entities";

import { fps } from "./ui/fpsUI";

import playerControls from "./playerControls";

const scene: Scene = new Scene({ width: 1080, height: 720 });

playerControls(scene);

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

