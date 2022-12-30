import { getMovieById, editMovieById } from "./api/data.js";
import { showSection } from "./app.js";
import { showDetails } from "./details.js";
import { isEmptyField } from "./utils.js";

//---- get elements ------------------------------------------------------------
const form = document.querySelector('#edit-movie form');

//---- attach event listeners --------------------------------------------------
form.addEventListener('submit', onSubmit);

function showEdit(id) {
    showSection('edit-movie');

    getMovie(id);
}


async function getMovie(id) {
    const { _ownerId, title, description, img, _createdOn, _id } = await getMovieById(id);

    form.elements['title'].value = title;
    form.elements['description'].value = description;
    form.elements['img'].value = img;
    form.id = id;
}

async function onSubmit(event) {
    event.preventDefault();

    if (isEmptyField(form)) {
        alert('Please fill all fields');
        return;
    }

    const data = getFormValues(form);

    const userData = sessionStorage.getItem('userData');
    if (userData == null) {
        onLoad();
    }

    try {
        await editMovieById(data, form.id);
        showDetails(form.id);
    } catch (err) {
        alert(err.message);
    }
}

function getFormValues(form) {
    const formData = new FormData(form);

    const title = formData.get('title');
    const description = formData.get('description');
    const img = formData.get('img');

    const data = { title, description, img };

    return data;
}

export { showEdit }