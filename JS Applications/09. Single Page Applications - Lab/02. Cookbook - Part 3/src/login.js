import { onLoad } from "./app.js";
import { login } from "./requests.js";
import { clearFields, isEmptyField } from "./utils.js";

const main = document.querySelector('main');
const section = document.getElementById('login');

const form = document.querySelector('#login form');
form.addEventListener('submit', onSubmit);

section.remove();

function showLogin() {
    clearFields(form);
    main.replaceChildren(section);
}

async function onSubmit(event) {
    event.preventDefault();

    if (isEmptyField(form)) {
        alert('Please, fill all fields');
        return;
    }

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
        };
        sessionStorage.setItem('userData', JSON.stringify(userData));
        
        onLoad();
    } catch (err) {
        console.error(err.message);
    }
}

export { showLogin }