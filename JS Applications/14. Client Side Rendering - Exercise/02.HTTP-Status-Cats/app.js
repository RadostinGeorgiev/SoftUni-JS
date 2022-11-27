import { render } from './node_modules/lit-html/lit-html.js';
import { cats } from "./catSeeder.js";
import { catsTemplate } from './templates.js';

const root = document.getElementById('allCats');

onRender();

function onRender() {
    render(catsTemplate(cats, onClick), root);
}

function onClick(item) {
    item.details = !item.details;

    onRender();
}