import { login } from './requests.js';
import { isEmptyField } from './utils.js';
window.addEventListener('DOMContentLoaded', init);

//---- get elements ------------------------------------------------------------
const form = document.querySelector('form');
const navButtons = {
	user: document.getElementById('user'),
	guest: document.getElementById('guest'),
};
const email = document.querySelector('nav .email span');

//---- attach event listeners --------------------------------------------------
form.addEventListener('submit', onSubmit);

//---- initializing the elements -----------------------------------------------
function init() {
	navButtons.user.style.display = 'none';
	email.textContent = 'guest';
}

async function onSubmit(event) {
	event.preventDefault();

	if (isEmptyField(form)) {
		alert('Please, fill all fields'); 
		return;
	}

	const formData = new FormData(event.target);
	const loginData = {
		"email": formData.get('email'),
		"password": formData.get('password'),
	};

	try {
		const result = await login(loginData);

		const userData = {
			email: result.email,
			id: result._id,
			accessToken: result.accessToken,
		};

		sessionStorage.setItem('userData', JSON.stringify(userData));
		window.location.replace('./index.html');

	} catch (error) {
		alert(error.message);
	}
}