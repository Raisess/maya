import Scene from "../engine/Scene";
import Entity from "../engine/Entity";
import Physics from "../engine/Physics";
import Utils from "../engine/Utils";

import { points } from "./ui";
import { player } from "./entities";

import "./controls";

const scene: Scene = new Scene({ width: 800, height: 720, background: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.wallpapersafari.com%2F82%2F13%2F81ZF6o.jpg&f=1&nofb=1" });

// center player on scene
player.setPosX(400 - player.getWidth());
player.setPosY((720 / 2) - (player.getHeight() / 2));

scene.addEntity(player);

type Direction = "LEFT" | "RIGHT";

// meteors generator
let meteors: Array<[Entity, Direction]> = [];

for (let i: number = 0; i < 20; i++) {
	meteors.push([
		new Entity(
			"meteor",
			"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipart-library.com%2Fimages_k%2Fasteroid-transparent%2Fasteroid-transparent-5.png&f=1&nofb=1",
			{ width: 20, height: 35 },
			{ x: Math.round(Math.random() * 800), y: Math.round(Math.random() * 720) },
			"image",
			false
		),
		Math.round(Math.random()) === 0 ? "LEFT" : "RIGHT"
	]);
}

for (const meteorCouple of meteors) {
	const meteor: Entity = meteorCouple[0];

	scene.addEntity(meteor);

	Physics.addGravity(meteor, 0.05, 720, (): void => {
		meteor.setPosY(0 - meteor.getHeight());
	});
}

// game loop
let pointsCount: number = 0;

const gameLoop: unknown = Utils.loop((): void => {
	points.innerHTML = "Points: " + Math.floor(pointsCount);

	pointsCount += 0.1;

	for (const meteorCouple of meteors) {
		const meteor:    Entity    = meteorCouple[0];
		const direction: Direction = meteorCouple[1];

		// movement meteor
		if (direction === "RIGHT") {
			meteor.setPosX(meteor.getPosX() + 0.5);
		} else {
			meteor.setPosX(meteor.getPosX() - 0.5);
		}

		// teleport meteor when touch scene borders
		if (meteor.getPosX() > (800 + player.getWidth())) meteor.setPosX(0 - player.getWidth());
		if (meteor.getPosX() < (0 - player.getWidth())) meteor.setPosX(800 - player.getWidth());


		// check player/meteor collision
		if (Physics.isColliding(player, meteor)) {
			Utils.clearLoop(gameLoop);

			alert("F, your score was: " + Math.floor(pointsCount));
			window.location.reload();
		}
	}

	// teleport player when touch scene borders
	if (player.getPosX() > (800 + player.getWidth())) player.setPosX(0 - player.getWidth());
	if (player.getPosX() < (0 - player.getWidth()))   player.setPosX(800 - player.getWidth());
});

