import UIElement from "../engine/UIElement";

export const fps: HTMLElement = new UIElement("h1").getElement();

fps.style.top    = "-10px";
fps.style.left   = "10px";
fps.style.cursor = "pointer";
fps.style.color  = "white";

fps.onclick = (): void => {
	if (fps.style.color === "white") {
		fps.style.color = "red";
	} else {
		fps.style.color = "white";
	}
}

export const item: HTMLElement = new UIElement("p").getElement();

item.style.color   = "blue";
item.style.display = "none";

