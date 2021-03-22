import Canvas from "./Canvas";
import Entity from "./Entity";

const game: Canvas = new Canvas();

const player: Entity = new Entity(
	"Player",
	"blue",
	{ width: 30, height: 30 },
	{ x: 10, y: 10 },
	true
);

game.addEntity(player);

