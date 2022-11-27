import { html, render } from './node_modules/lit-html/lit-html.js';
import { ifDefined } from './node_modules/lit-html/directives/if-defined.js';
import { towns } from "./towns.js";

const root = document.getElementById('towns');

document.querySelector('button').addEventListener('click', search);

const townsTemplate = (towns) => html`
   <ul id="list">
      ${towns.map((t) => html`<li class=${ifDefined(t.class)}>${t.name}</li>`)}
   </ul>`;

let allTowns = towns.map(x => ({ name: x }));
render(townsTemplate(allTowns), root);

function search() {
   const searchedText = document.getElementById('searchText').value;

   allTowns = towns.map(x => ({ name: x }))
   const matched = allTowns.filter(x => x.name.includes(searchedText));
   matched.forEach(x => x.class = 'active');

   render(townsTemplate(allTowns), root);

   document.getElementById('result').textContent = `${matched.length} matches found`;
}