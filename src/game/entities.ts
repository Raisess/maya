import Entity from "../engine/Entity";

export const player: Entity = new Entity(
	"player",
	"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fvignette3.wikia.nocookie.net%2Ffallout%2Fimages%2F2%2F25%2FRocket_souvenir.png%2Frevision%2Flatest%3Fcb%3D20120702211350&f=1&nofb=1",
	{ width: 30, height: 80 },
	{ x: 0, y: 0 },
	"image",
	false
);

