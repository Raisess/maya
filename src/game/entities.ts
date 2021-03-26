import Entity from "../engine/Entity";

export const bg: Entity = new Entity(
	"bg",
	"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Faa%2F46%2Fbe%2Faa46beaee67d41a7e5fb027b1ffca0f1.png&f=1&nofb=1",
	{ width: 1080, height: 720 },
	{ x: 0, y: 0 },
	"image"
);

export const player: Entity = new Entity(
	"Player",
	"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic.tvtropes.org%2Fpmwiki%2Fpub%2Fimages%2Fmaplestory-warrior_9070.png&f=1&nofb=1",
	{ width: 60, height: 90 },
	{ x: 10, y: 530 },
	"image"
);

export const block: Entity = new Entity(
	"block",
	"red",
	{ width: 30, height: 40 },
	{ x: 600, y: 10 },
	"solid"
);

export const text: Entity = new Entity(
	"",
	"blue 20px Arial",
	{ width: 0, height: 0 },
	{ x: 0, y: 0 },
	"text"
);

