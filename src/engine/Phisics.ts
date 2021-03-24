import IEntity from "./interfaces/IEntity";

export default class Phisics {
	public static addGravity(entity: IEntity): void {
		const gravity:      number = 0.10;
		let   gravitySpeed: number = 0;

		setInterval((): void => {
			if ((Math.floor(entity.getPosY()) - 1) < (530 + (entity.getHeight() / 2))) {
				gravitySpeed += gravity;

				entity.setPosY(entity.getPosY() + gravitySpeed);
			} else {
				gravitySpeed = 0;
			}
		}, 20);
	}
}

