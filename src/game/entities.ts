import Entity from "../engine/Entity";

export const player: Entity = new Entity(
	"player",
	"red",
	{ width: 20, height: 35 },
	{ x: 0, y: 0 },
	"solid",
	false
);

