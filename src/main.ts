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

const enemy: Entity = new Entity(
	"Enemy",
	"red",
	{ width: 30, height: 30 },
	{ x: 60, y: 10 }
);

const playerEntity: any = game.addEntity(player);

playerEntity.update({ x: 10, y: 100 });

game.addEntity(enemy);

