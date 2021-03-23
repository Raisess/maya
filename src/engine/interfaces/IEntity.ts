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

export default interface IEntity {
	id: string;

	setName(name: string): void;
	setDraw(draw: string): void;

	getName(): string;
	getDraw(): HTMLImageElement;

	setWidth(width: number):   void;
	setHeight(height: number): void;

	getWidth():  number;
	getHeight(): number;

	setPosX(x: number): void;
	setPosY(y: number): void;

	getPosX(): number;
	getPosY(): number;
}
