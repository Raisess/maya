import Entity from "../engine/Entity";

export const player: Entity = new Entity(
	"Player",
	"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic.tvtropes.org%2Fpmwiki%2Fpub%2Fimages%2Fmaplestory-warrior_9070.png&f=1&nofb=1",
	{ width: 60, height: 90 },
	{ x: 10, y: 530 },
	"image"
);

export const blocks: Array<Entity> = [
	new Entity(
		"block",
		"red",
		{ width: 30, height: 40 },
		{ x: 600, y: 10 },
		"solid"
	),
	new Entity(
		"block2",
		"green",
		{ width: 30, height: 40 },
		{ x: 700, y: 10 },
		"solid"
	)
];

