import { v4 as uuid } from "uuid";

import IEntity, { EntityType, EntityProps, EntityPos, EntitySize } from "./interfaces/IEntity";
import Physics from "./Physics";

export default class Entity implements IEntity {
	public readonly id:   string = uuid();
	public readonly type: EntityType;
	
	private props: EntityProps = {
		name: "",
		draw: "",
		size: {
			width:  0,
			height: 0
		}
	};

	private pos: EntityPos = { x: 0, y: 0 };

	constructor(name: string, draw: string, size: EntitySize, pos: EntityPos, type: EntityType, gravity?: boolean) {
		this.props.name = name;
		this.props.draw = draw;
		this.props.size = size;

		this.pos  = pos;
		this.type = type;

		if (gravity === true || gravity === undefined) {
			Physics.addGravity(this);
		}
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

	public getDraw(): HTMLImageElement | string {
		if (this.type === "image") {
			const image: HTMLImageElement = new Image();

			image.src = this.props.draw;

			return image;
		}

		return this.props.draw;
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

	public destroy(): void {
		this.props.size.width  = 0;
		this.props.size.height = 0;

		this.pos.x = -1000;
		this.pos.y = -1000;
	}
}

