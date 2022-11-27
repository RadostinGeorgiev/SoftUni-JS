import { html, render } from './../../node_modules/lit-html/lit-html.js';

const listTemplate = (towns) => html`
<ul>
    ${towns.map((town) => html`<li>${town}</li>`)}
</ul>`;

const root = document.getElementById('root');
const form = document.querySelector('form');

form.addEventListener('submit', onSubmit)

function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const names = formData.get('towns').split(', ').map(x => x.trim());
    
    render(listTemplate(names), root);
}