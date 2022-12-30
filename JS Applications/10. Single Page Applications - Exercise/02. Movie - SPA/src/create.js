import { createMovie } from "./api/data.js";
import { onLoad, showSection } from "./app.js";
import { isEmptyField } from "./utils.js";

//---- get elements ------------------------------------------------------------
const form = document.getElementById('add-movie-form');

//---- attach event listeners --------------------------------------------------
form.addEventListener('submit', onSubmit);

function showCreate() {
    showSection('add-movie');
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
        await createMovie(data);

        onLoad();
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

export { showCreate }