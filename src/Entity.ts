export type EntityPos = {
	x: number;
	y: number;
};

export type EntitySize = {
	width:  number;
	height: number;
};

export type EntityProps = {
	name: string;
	draw: string;
	size: EntitySize;
};

export interface IEntity {
	props: EntityProps;
	pos:   EntityPos;

	getName(): string;
	getDraw(): string;
}

export default class Entity implements IEntity {
	public props: EntityProps = {
		name: "",
		draw: "",
		size: {
			width:  0,
			height: 0
		}
	};

	public pos: EntityPos = { x: 0, y: 0 };

	private playable: boolean;

	constructor(name: string, draw: string, size: EntitySize, initialPos: EntityPos, playable: boolean = false) {
		this.props.name = name;
		this.props.draw = draw;
		this.props.size = size;

		this.pos.x = initialPos.x;
		this.pos.y = initialPos.y;

		this.playable = playable;
	}

	public getName(): string {
		return this.props.name;
	}

	public getDraw(): string {
		return this.props.draw;
	}

	public move(pos: EntityPos): EntityPos {
		if (this.playable) {
			return pos;
		}

		throw new Error("Can't move this entity, 'cause: entity isn't playable.");
	}
}

