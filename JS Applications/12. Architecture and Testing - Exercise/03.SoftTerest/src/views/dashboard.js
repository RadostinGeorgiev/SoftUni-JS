import { getAllItems } from '../api/data.js';

//---- get elements ------------------------------------------------------------
const section = document.getElementById('dashboard-holder');

//---- attach event listeners --------------------------------------------------
section.addEventListener('click', onDetailsClick);

section.remove();

let ctx = null;

export function showDashboardPage(ctxExt) {
    ctx = ctxExt;
    ctx.showSection(section);
    loadIdeas();
}

//---- read ideas & fill dashboard with idea cards -----------------------------
async function loadIdeas() {
    const ideas = await getAllItems();

    if (ideas.length == 0) {
        const h = document.createElement('h1');
        h.textContent = 'No ideas yet! Be the first one :)';
        section.replaceChildren(h);
    } else {
        const fragment = document.createDocumentFragment();
        ideas.map(createIdeaCard).forEach(i => fragment.appendChild(i));

        section.replaceChildren(fragment);
    }
}

//---- create card for idea ----------------------------------------------------
function createIdeaCard(idea) {
    const element = document.createElement('div');
    element.className = 'card overflow-hidden current-card details';
    element.style.width = '20rem';
    element.style.height = '18rem';
    element.innerHTML = `
        <div class="card-body">
            <p class="card-text">${idea.title}</p>
        </div>
        <img class="card-image" src="${idea.img}" alt="Card image cap">
        <a data-id=${idea._id} class="btn" href="">Details</a>`;

    return element;
}

function onDetailsClick(event) {
    if (event.target.tagName == 'A') {
        const id = event.target.dataset.id;
        event.preventDefault();

    //---- redirect to details page --------------------------------------------
        ctx.goTo('details', id);
    }
}