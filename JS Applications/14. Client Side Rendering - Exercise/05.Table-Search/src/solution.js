import { html, render } from './../node_modules/lit-html/lit-html.js';
import { ifDefined } from './../node_modules/lit-html/directives/if-defined.js';
import { get } from './api.js';

const host = 'http://localhost:3030';
const endpoints = {
   items: '/jsonstore/advanced/table'
}

const rowTemplate = (i) => html`
<tr class=${ifDefined(i.class)}>
   <td>${i.firstName} ${i.lastName}</td>
   <td>${i.email}</td>
   <td>${i.course}</td>
</tr>`;

const tableBody = document.querySelector('tbody');
const searchField = document.getElementById('searchField');

document.getElementById('searchBtn').addEventListener('click', onClick);

let data;

init();

async function init() {
   data = Object.values(await get(endpoints.items));

   update();
}

function update() {
   render(data.map(rowTemplate), tableBody);
}

function onClick() {
   const searchedText = searchField.value.toLowerCase();

   let records = data.map(x => Object.assign({}, x));
   records.filter(x =>
      x.class = Object.values(x).some(x => searchedText && x.toLowerCase().includes(searchedText))).
      forEach(x => x.class = 'select');

   render(records.map(rowTemplate), tableBody);
   searchField.value = '';
}

export { host, endpoints }