import { onLoad } from "./app.js";
import { login } from "./api.js";
import { isEmptyField } from "./utils.js";

//---- get elements ------------------------------------------------------------
const main = document.querySelector('main');
const section = document.getElementById('login');
const form = document.querySelector('#login form');

//---- attach event listeners --------------------------------------------------
form.addEventListener('submit', onSubmit);

section.remove();

function showLogin() {
    form.reset();
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
        alert(err.message);
    }
}

export { showLogin }