export type EntitySize = {
	width:  number;
	height: number;
};

export type EntityProps = {
	name: string;
	draw: string;
	size: EntitySize;
};

export type EntityPos = {
	x: number;
	y: number;
};

export type EntityType = "image" | "text" | "solid";

export default interface IEntity {
	id:   string;
	type: EntityType;

	setName(name: string): void;
	setDraw(draw: string): void;

	getName(): string;
	getDraw(): HTMLImageElement | string;

	setWidth(width: number):   void;
	setHeight(height: number): void;

	getWidth():  number;
	getHeight(): number;

	setPosX(x: number): void;
	setPosY(y: number): void;

	getPosX(): number;
	getPosY(): number;

	destroy(): void;
}

