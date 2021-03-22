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

export interface IEntity {
	getName():   string;
	getDraw():   HTMLImageElement;
	getWidth():  number;
	getHeight(): number;

	setX(x: number): void;
	setY(y: number): void;

	getX(): number;
	getY(): number;
}

export default class Entity implements IEntity {
	private props: EntityProps = {
		name: "",
		draw: "",
		size: {
			width:  0,
			height: 0
		}
	};

	private pos: EntityPos = { x: 0, y: 0 };

	constructor(name: string, draw: string, size: EntitySize, initialPos: EntityPos) {
		this.props.name = name;
		this.props.draw = draw;
		this.props.size = size;

		this.pos.x = initialPos.x;
		this.pos.y = initialPos.y;
	}

	public getName(): string {
		return this.props.name;
	}

	public getDraw(): HTMLImageElement {
		const image: HTMLImageElement = new Image();

		image.src = this.props.draw;

		return image;
	}

	public getWidth(): number {
		return this.props.size.width;
	}

	public getHeight(): number {
		return this.props.size.height;
	}

	public setX(x: number): void {
		this.pos.x = x;
	}

	public getX(): number {
		return this.pos.x;
	}

	public setY(y: number): void {
		this.pos.y = y;
	}

	public getY(): number {
		return this.pos.y;
	}
}

