import { getAllMovies } from "./api/data.js";
import { showSection } from "./app.js";
import { createElement } from "./utils.js";
import { templateMovie } from "./templates.js";
import { showDetails } from "./details.js";

//---- get elements ------------------------------------------------------------
const listMovies = document.getElementById('movies-list');
const addButtonSection = document.getElementById('add-movie-button');

//---- attach event listeners --------------------------------------------------
listMovies.addEventListener('click', onMovieClick);

function showHome() {
    showSection('home-page');

    const userData = sessionStorage.getItem('userData');
    if (userData == null) {
        addButtonSection.style.display = 'none';
    } else {
        addButtonSection.style.display = 'inline-block';
    }

    getMovies();
}

async function getMovies() {
    const data = await getAllMovies();

    listMovies.replaceChildren(...data.map(templateMovie));
    //listMovies.replaceChildren(...data.map(el => createMovieCard(el)));
}

function createMovieCard(record) {
    const { _ownerId, title, description, img, _createdOn, _id } = record;

    const li = createElement('li', '', null, 'class', 'card mb-4');
    const image = createElement('img', '', li, 'src', img);
    image.className = 'card-img-top';
    image.alt = 'Card image cap';
    image.width = 400;

    const divTitle = createElement('div', '', li, 'class', 'card-body');
    createElement('h4', title, divTitle, 'class', 'card-title');

    const divButton = createElement('div', '', li, 'class', 'card-footer');
    const aRef = createElement('a', '', divButton);
    aRef.href = '#/details';
    const button = createElement('button', 'Details', aRef, 'class', 'btn btn-info');

    button.addEventListener('click', onDetailsClick);
    return li;

    function onDetailsClick(event) {
        showDetails(_id);
    }
}

function onMovieClick(event) {
    if (event.target.tagName == 'BUTTON') {
        showDetails(event.target.id);
    }
}

export { showHome }