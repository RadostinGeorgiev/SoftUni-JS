import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { contacts } from './contacts.js';

let contactTemplate = (data, onDetailsClick) => html`<div class="contact card">
    <div>
        <i class="far fa-user-circle gravatar"></i>
    </div>
    <div class="info">
        <h2>Name: ${data.name}</h2>
        <button @click=${()=> onDetailsClick(data)} class="detailsBtn">${data.details ? 'Hide' : 'Details'}</button>
        <div class="details" id=${data.id} style="display: ${data.details ? 'block' : 'none'}">
            <p>Phone number: ${data.phoneNumber}</p>
            <p>Email: ${data.email}</p>
        </div>
    </div>
</div>`;

const container = document.getElementById('contacts');

onRender();

function onRender() {
    render(contacts.map(c => contactTemplate(c, onDetailsClick)), container);
}

function onDetailsClick(person) {
    person.details = !person.details;

    onRender();
}