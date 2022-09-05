import { login, register } from './requests.js';
import { isEmptyField } from './utils.js';

const registerForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');

registerForm.addEventListener('submit', onRegisterClick);
loginForm.addEventListener('submit', onLoginClick);

async function onRegisterClick(event) {
	event.preventDefault();

	if (isEmptyField(registerForm)) {
		// alert('Please, fill all fields');
		return;
	}

	const formData = new FormData(event.target);
	const data = {
		email: formData.get('email'),
		password: formData.get('password'),
	};
	const repass = formData.get('rePass');

	if (repass != data.password) {
		// alert("Passwords don't match");
		return;
	}

	try {
		const result = await register(data);

		const userData = {
			email: result.email,
			id: result._id,
			accessToken: result.accessToken,
		};

		sessionStorage.setItem('userData', JSON.stringify(userData));
		window.location = './homeLogged.html';
	} catch (error) {
		alert(error.message);
	}
}

async function onLoginClick(event) {
	event.preventDefault();

	if (isEmptyField(loginForm)) {
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
		window.location = './homeLogged.html';

	} catch (error) {
		alert(error.message);
	}
}