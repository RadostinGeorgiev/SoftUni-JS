import { get, post, put, del, logout } from './requests.js';
import { catchTemplate } from './templates.js';
import { isEmptyField, getUserData } from './utils.js';
window.addEventListener('DOMContentLoaded', init);	//window.onload = init();

//---- get elements ------------------------------------------------------------
const buttons = {
	logout: document.getElementById('logout'),
	load: document.querySelector('.load'),
	add: document.querySelector('.add'),
};

const catches = document.getElementById('catches');
catches.addEventListener('click', onButtonsClick);
catches.replaceChildren();

const homeView = document.getElementById('home-view');
const messageP = document.createElement('p');
messageP.textContent = 'Click to get catches';
messageP.style.textAlign = 'center';
homeView.insertAdjacentElement('afterbegin', messageP);

//---- attach event listeners --------------------------------------------------
buttons.logout.addEventListener('click', onLogoutClick);
buttons.load.addEventListener('click', onLoadClick);
buttons.add.addEventListener('click', onAddClick);

const catchesUrl = '/data/catches';
let userData = getUserData();

//---- initializing the elements -----------------------------------------------
function init() {
	const navButtons = {
		user: document.getElementById('user'),
		guest: document.getElementById('guest'),
	};
	const email = document.querySelector('nav .email span');

	if (sessionStorage.userData) {
		navButtons.user.style.display = 'inline-block';
		navButtons.guest.style.display = 'none';

		userData = getUserData();
		email.textContent = userData.email;

		buttons.add.disabled = false;
	} else {
		navButtons.user.style.display = 'none';
		navButtons.guest.style.display = 'inline-block';

		userData = undefined;
		email.textContent = 'guest';
	}
}

function onLogoutClick() {
	logout();

	sessionStorage.removeItem('userData');
	window.location.href = './index.html';
}

async function onLoadClick() {
	messageP.remove();

	try {
		const data = await get(catchesUrl);
		const result = [...data]
			.map(x => {
				const isAuthor = userData ? userData.id == x._ownerId : false;
				return catchTemplate(x, isAuthor);
			});
		catches.replaceChildren(...result);
	} catch (error) {
		alert(error.message);
	}
}

async function onButtonsClick(event) {
	if (event.target.tagName == 'BUTTON') {
		const button = event.target;
		const form = button.parentElement;

		const id = button.getAttribute('data-id');
		let result;

		try {
			switch (button.className) {
				case 'update':
					const data = getFormValues(form);

					result = await put(catchesUrl + `/${id}`, data);
					break;
				case 'delete':
					result = await del(catchesUrl + `/${id}`);
					break;
			}

			onLoadClick();
		} catch (error) {
			alert(error.message);
		}
	}
}

async function onAddClick(event) {
	event.preventDefault();

	const button = event.target;
	const form = button.parentElement;

    if (isEmptyField(form)) {
		// alert('Please, fill all fields');
		return;
	}

	const data = getFormValues(form);

	try {
		const result = await post(catchesUrl, data);
		onLoadClick();
	} catch (error) {
		alert(error.message);
	}
}

function getFormValues(form) {
	const formData = new FormData(form);

	const angler = formData.get('angler');
	const weight = formData.get('weight');
	const species = formData.get('species');
	const location = formData.get('location');
	const bait = formData.get('bait');
	const captureTime = formData.get('captureTime');

	const data = { angler, weight, species, location, bait, captureTime };

	return data;
}
