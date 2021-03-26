import UIElement from "../engine/UIElement";

export const fps: HTMLElement = new UIElement("h1").getElement();

fps.style.top = "-10px";
fps.style.left = "10px";
fps.style.color = "white";

export const item: HTMLElement = new UIElement("h1").getElement();

item.style.top     = "30px";
item.style.left    = "10px";
item.style.color   = "white";
item.style.display = "none";

