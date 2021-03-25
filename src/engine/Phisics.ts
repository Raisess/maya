import IEntity from "./interfaces/IEntity";

export default class Phisics {
	public static addGravity(entity: IEntity, floorDistance: number): void {
		const gravity:      number = 0.10;
		let   gravitySpeed: number = 0;

		setInterval((): void => {
			if ((Math.floor(entity.getPosY())) < (floorDistance - entity.getHeight())) {
				gravitySpeed += gravity;

				entity.setPosY(entity.getPosY() + gravitySpeed);
			} else {
				gravitySpeed = 0;
			}
		}, 20);
	}

	public static isColliding(entityX: IEntity, entityY: IEntity): boolean {
		const left:   [number, number] = [entityX.getPosX(), entityY.getPosX()];
		const right:  [number, number] = [entityX.getPosX() + entityX.getWidth(), entityY.getPosX() + entityY.getWidth()];
		const top:    [number, number] = [entityX.getPosY(), entityY.getPosY()];
		const bottom: [number, number] = [entityX.getPosY() + entityX.getHeight(), entityY.getPosY() + entityY.getHeight()];

		if ((bottom[0] < top[1]) ||
		   (top[0] > bottom[1])  ||
		   (right[0] < left[1])  ||
		   (left[0] > right[1])) {
			return false;
		}

		return true;
	}
}

