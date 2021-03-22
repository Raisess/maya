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
	pos:   EntityPos;

	getName():   string;
	getDraw():   HTMLImageElement;
	getWidth():  number;
	getHeight(): number;
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

	public pos: EntityPos = { x: 0, y: 0 };

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
}

