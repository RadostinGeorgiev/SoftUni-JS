import { get } from "./requests.js";
import { furnitureTemplate } from "./templates.js";

const url = '/data/furniture';
const table = document.querySelector('tbody');

window.addEventListener('DOMContentLoaded', onLoad);

async function onLoad() {
	const data = await get(url);
  table.replaceChildren(...data.map(furnitureTemplate));
}