import { login } from './requests.js';
import { isEmptyField } from './utils.js';

const form = document.querySelector('form');
form.addEventListener('submit', onSubmit);
window.onload = init();

function init() {
	document.getElementById('user').style.display = 'none';
	document.querySelector('nav .email span').textContent = 'guest';
}

async function onSubmit(event) {
	event.preventDefault();

	if (isEmptyField(form)) {
		alert('Please, fill all fields');
		return;
	}

	const formData = new FormData(event.target);
	const data = {
		email: formData.get('email'),
		password: formData.get('password'),
	};

	try {
		const result = await login(data);

		const userData = {
			email: result.email,
			id: result._id,
			accessToken: result.accessToken,
		};

		sessionStorage.setItem('userData', JSON.stringify(userData));
		window.location.href = './index.html';

	} catch (error) {
		alert(error.message);
	}
}