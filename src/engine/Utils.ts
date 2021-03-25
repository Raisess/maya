export default class Utils {
	public static loop(callback: Function): unknown {
		return setInterval((): void => {
			callback();
		}, 20);
	}

	public static clearLoop(loop: unknown): void {
		clearInterval((loop as number | undefined));
	}
}

