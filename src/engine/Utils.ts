interface IKeyboardEventCallback {
	(ev: KeyboardEvent): void;
}

export default class Utils {
	public static loop(callback: Function): unknown {
		const lastTime: number = new Date().getTime();
		let   delta:    number = 0;

		return setInterval((): void => {
			const now: number = new Date().getTime();

			delta = now - lastTime;

			callback();
		}, 50 * delta);
	}

	public static clearLoop(loop: unknown): void {
		clearInterval((loop as number | undefined));
	}

	public static onKeyboardEvent(callback: IKeyboardEventCallback): void {
		document.addEventListener("keydown", (ev: KeyboardEvent): void => {
			ev.preventDefault();

			callback(ev);
		});
	}
}

