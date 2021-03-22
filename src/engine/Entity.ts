import { v4 as uuid } from "uuid";

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

export default class Entity implements IEntity {
	public readonly id: string = uuid();

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

	public setName(name: string): void {
		this.props.name = name;
	}

	public getName(): string {
		return this.props.name;
	}

	public setDraw(draw: string): void {
		this.props.draw = draw;
	}

	public getDraw(): HTMLImageElement {
		const image: HTMLImageElement = new Image();

		image.src = this.props.draw;

		return image;
	}

	public setWidth(width: number): void {
		this.props.size.width = width;
	}

	public getWidth(): number {
		return this.props.size.width;
	}

	public setHeight(height: number): void {
		this.props.size.height = height;
	}

	public getHeight(): number {
		return this.props.size.height;
	}

	public setPosX(x: number): void {
		this.pos.x = x;
	}

	public getPosX(): number {
		return this.pos.x;
	}

	public setPosY(y: number): void {
		this.pos.y = y;
	}

	public getPosY(): number {
		return this.pos.y;
	}
}

