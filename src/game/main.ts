import Scene from "../engine/Scene";
import Physics from "../engine/Physics";
import Utils from "../engine/Utils";

import { player, blocks } from "./entities";

import { fps, item } from "./ui";

import playerControls from "./playerControls";

const scene: Scene = new Scene({ width: 1080, height: 720, background: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Faa%2F46%2Fbe%2Faa46beaee67d41a7e5fb027b1ffca0f1.png&f=1&nofb=1" });

playerControls(scene);

scene.addEntity(player);

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

	fps.innerHTML = "fps: " + Math.floor(1000 * (frames / totalTime));
});

// block loop
for (const block of blocks) {
	scene.addEntity(block);

	const loop: unknown = Utils.loop((): void => {
		if (Physics.isColliding(player, block)) {
			item.innerHTML     = "picked up: " + block.id;
			item.style.left    = player.getPosX() + "px";
			item.style.top     = (player.getPosY() - player.getHeight()) + "px";
			item.style.display = "";

			scene.destroyEntity(block);
			blocks.pop();

			setTimeout((): void => {
				item.style.display = "none";

				Utils.clearLoop(loop);
			}, 700);
		}
	});
}

