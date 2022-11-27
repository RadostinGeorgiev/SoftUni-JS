import { html } from './node_modules/lit-html/lit-html.js';

const catCardTemplate = (i, onClick) => html`
    <li>
        <img src="./images/${i.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
        <div class="info">
            <button class="showBtn" @click=${()=> onClick(i)}>${i.details ? 'Hide status code' : 'Show status code'}</button>
            ${i.details ? html`
            <div class="status" id=${i.id}>
                <h4>Status Code: ${i.statusCode}</h4>
                <p>${i.statusMessage}</p>
            </div>` : null}
        </div>
    </li>`;

const catsTemplate = (items, onClick) => html`
<ul>
    ${items.map(i => catCardTemplate(i, onClick))}
</ul>`;

export {catsTemplate}