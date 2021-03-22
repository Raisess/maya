export default class Canvas {
	private readonly canvas: any = document.getElementById("gameCanvas")!;

	private ctx: any = this.canvas.getContext("2d");

	constructor() {
		this.ctx.font = "30px Arial";
		this.ctx.fillText("Hello World", 10, 50);

		console.log("yo");
	}
}

