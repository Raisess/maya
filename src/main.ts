import Canvas from "./Canvas";
import Entity from "./Entity";

const game: Canvas = new Canvas();

const player: Entity = new Entity(
	"Player",
	"*o*",
	{ x: 10, y: 30 },
	true
);

game.addEntity(player);

