import IScene from "../engine/interfaces/IScene";

import Entity from "../engine/Entity";
import Utils from "../engine/Utils";

import { player } from "./entities";

export default function playerControls(scene: IScene) {
	let acc: number = 0;

	Utils.onKeyboardEvent((ev: KeyboardEvent): void => {
		switch (ev.key) {
			case "w":
				if (player.getPosY() === (650 - player.getHeight()))	player.setPosY(player.getPosY() - 100);
				break;
			case "d": player.setPosX(player.getPosX() + 10);
				break;
			case "a": player.setPosX(player.getPosX() - 10);
				break;
			case "Escape": window.location.reload();
				break;
			case "k":
				if (acc < 3) {
					acc++;
					const power: Entity = new Entity(
						"power",
						"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.freepngimg.com%2Fdownload%2Ffire%2F39-fire-transparent-png-image.png&f=1&nofb=1",
						{ width: 90, height: 100 },
						{ x: -100, y: -100 },
						"image"
					);

					scene.addEntity(power);
					power.setPosX(player.getPosX() + (player.getWidth() + 10));
					power.setPosY(player.getPosY() + ((player.getHeight() / 2) - 10));

					const a: unknown = Utils.loop((): void => {
						power.setPosX(power.getPosX() + 5);

						if (power.getPosX() > (player.getPosX() + 300)) {
							scene.destroyEntity(power);
							Utils.clearLoop(a);
							acc--;
						}
					});
				}
				break;
			default:
				break;
		}
	});
}

