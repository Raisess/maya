import IScene from "../engine/interfaces/IScene";

import Entity from "../engine/Entity";
import Physics from "../engine/Physics";
import Utils from "../engine/Utils";

import { player, block } from "./entities";

export default function playerControls(scene: IScene) {
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
				power.setPosY(player.getPosY() + ((player.getHeight() / 2) - 10));

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
}

