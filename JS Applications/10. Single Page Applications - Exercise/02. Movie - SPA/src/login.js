import { showSection, onLoad } from "./app.js";
import { login } from "./api/api.js";
import { isEmptyField } from "./utils.js";

//---- get elements ------------------------------------------------------------
const form = document.getElementById('login-form');

//---- attach event listeners --------------------------------------------------
form.addEventListener('submit', onSubmit);

// section.remove();

function showLogin() {
    form.reset();
    showSection('form-login');
}

async function onSubmit(event) {
    event.preventDefault();

    if (isEmptyField(form)) {
        alert('Please, fill all fields');
        return;
    }

    //---- read form fields ----------------------------------------------------
    const formData = new FormData(event.target);
    const fields = Object.fromEntries(formData.entries());

    const data = {
        email: fields.email,
        password: fields.password,
    };

    try {
        const result = await login(data);

        const userData = {
            id: result._id,
            accessToken: result.accessToken,
            email: result.email,
        };
        sessionStorage.setItem('userData', JSON.stringify(userData));
    } catch (err) {
        console.error(err.message);
        form.reset();
    }

    onLoad();
}

export { showLogin }