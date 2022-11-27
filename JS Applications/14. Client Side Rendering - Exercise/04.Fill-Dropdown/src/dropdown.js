import { html, render } from './../node_modules/lit-html/lit-html.js'
import { get, post } from './api.js';

const host = 'http://localhost:3030';
const endpoints = {
    items: '/jsonstore/advanced/dropdown'
}

const menu = document.getElementById('menu');
const form = document.querySelector('form');
const input = document.getElementById('itemText');

form.addEventListener('submit', addItem);

const itemsTemplate = (items) => html`${items.map((i) => html`
<option value=${i._id}>
    ${i.text}
</option>`)}`;

update();

async function update() {
    const data = Object.values(await get(endpoints.items));

    render(itemsTemplate(data), menu);
}

async function addItem(event) {
    event.preventDefault();

    const newItem = input.value;

    const response = await post(endpoints.items, { text: newItem });
    if (response.ok) {
        update()
    };
}

export { host, endpoints }