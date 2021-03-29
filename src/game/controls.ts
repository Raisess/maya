import Utils from "../engine/Utils";

import { player } from "./entities";

let direction: "RIGHT" | "LEFT" | null = null;

document.addEventListener("keydown", (ev: KeyboardEvent): void => {
	switch (ev.key) {
		case "d":
		case "l":
		case "ArrowRight":
			direction = "RIGHT";
			break;
		case "a":
		case "ArrowLeft":
			direction = "LEFT";
			break;
		default:
			break;
	}
});

Utils.loop((): void => {
	if (direction === "RIGHT") player.setPosX(player.getPosX() + 2);
	if (direction === "LEFT")  player.setPosX(player.getPosX() - 2);
});

