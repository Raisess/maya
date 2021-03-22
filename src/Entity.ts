export type EntityPos = {
	x: number;
	y: number;
};

export type EntityProps = {
	name: string;
	draw: string;
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
		draw: ""
	};

	public pos: EntityPos = { x: 0, y: 0 };

	private playable: boolean;

	constructor(name: string, draw: string, initialPos: EntityPos, playable: boolean = false) {
		this.props.name = name;
		this.props.draw = draw;

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
}

