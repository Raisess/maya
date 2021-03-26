interface IKeyboardEventCallback {
	(ev: KeyboardEvent): void;
}

export default class Utils {
	public static loop(callback: Function): unknown {
		return setInterval((): void => {
			callback();
		}, 20);
	}

	public static clearLoop(loop: unknown): void {
		clearInterval((loop as number | undefined));
	}

	public static onKeyboardEvent(callback: IKeyboardEventCallback): void {
		window.addEventListener("keydown", (ev: KeyboardEvent): void => {
			ev.preventDefault();

			callback(ev);
		});
	}
}

