export default class UIElement {
	private element: HTMLElement;

	constructor(type: string) {
		this.element = (document.createElement(type) as HTMLElement);

		this.element.style.position = "absolute";

		document.body.insertBefore(this.element, document.querySelector("noscript"));
	}

	public getElement(): HTMLElement {
		return this.element;
	}
}

