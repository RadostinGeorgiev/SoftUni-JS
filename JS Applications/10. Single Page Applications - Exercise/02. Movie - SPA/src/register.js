import { showSection, onLoad } from "./app.js";
import { register } from "./api/api.js";
import { isEmptyField } from "./utils.js";

//---- get elements ------------------------------------------------------------
const form = document.getElementById('register-form');

//---- attach event listeners --------------------------------------------------
form.addEventListener('submit', onSubmit);

// section.remove();

function showRegister() {
    form.reset();
    showSection('form-sign-up');
}

async function onSubmit(event) {
    event.preventDefault();

	if (isEmptyField(form)) {
		alert('Please, fill all fields');
		return;
	}

    const formData = new FormData(event.target);
    const fields = Object.fromEntries(formData.entries());

    if (fields.password != fields.repeatPassword) {
        alert('Passwords don\'t match');
        return;
    }

    const data = {
        email: fields.email,
        password: fields.password,
    };

    try {
        const result = await register(data);

        const userData = {
            id: result._id,
            accessToken: result.accessToken,
            email: result.email,
        };
        sessionStorage.setItem('userData', JSON.stringify(userData));

        onLoad();
    } catch (err) {
        alert(err.message);
    }
}

export { showRegister }