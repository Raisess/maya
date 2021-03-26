import Scene from "../engine/Scene";
import Physics from "../engine/Physics";
import Utils from "../engine/Utils";

import { player, block, text } from "./entities";

import { fps } from "./ui/fpsUI";

import playerControls from "./playerControls";

const scene: Scene = new Scene({ width: 1080, height: 720, background: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Faa%2F46%2Fbe%2Faa46beaee67d41a7e5fb027b1ffca0f1.png&f=1&nofb=1" });

playerControls(scene);

scene.addEntity(player);
Physics.addGravity(player);

scene.addEntity(block);
Physics.addGravity(block);

scene.addEntity(text);

// fps init
let lastTime:  number = performance.now();
let delta:     number = 0;
let frames:    number = 0;
let totalTime: number = 0;

// fps loop
Utils.loop((): void => {
	let now: number = performance.now();

  delta      = now-lastTime;
  lastTime   = now;
  totalTime += delta;
  frames++;

	fps.innerHTML = "fps: " + (1000 * frames / totalTime).toFixed(2);
});

// block loop
const loop: unknown = Utils.loop((): void => {
	if (Physics.isColliding(player, block)) {
		text.setPosX(player.getPosX());
		text.setPosY(player.getPosY());
		text.setName("picked up!");

		setTimeout((): void => {
			console.log(player);
			scene.destroyEntity(text);

			Utils.clearLoop(loop);
		}, 700);

		scene.destroyEntity(block);
	}
});

