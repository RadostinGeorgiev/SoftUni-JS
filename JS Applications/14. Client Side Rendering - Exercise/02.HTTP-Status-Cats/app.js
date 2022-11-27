import { render } from './node_modules/lit-html/lit-html.js';
import { cats } from "./catSeeder.js";
import { catsTemplate } from './templates.js';

const root = document.getElementById('allCats');
cats.forEach(i => i.details = false);

update();

function update() {
    render(catsTemplate(cats, onClick), root);
}

function onClick(item) {
    item.details = !item.details;

    update();
}