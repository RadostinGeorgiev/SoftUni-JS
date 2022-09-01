import { get, post, put, del, logout, login } from './requests.js';
import { catchTemplate } from './templates.js';
import { getUserData } from './utils.js';

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
window.addEventListener('DOMContentLoaded', onLoad);
buttons.logout.addEventListener('click', onLogoutClick);
buttons.load.addEventListener('click', onLoadClick);
buttons.add.addEventListener('click', onAddClick);

const catchesUrl = 'http://localhost:3030/data/catches';
let userData = getUserData();

//---- initializing the elements -----------------------------------------------
function onLoad() {
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

async function onLogoutClick() {
	try {
		const result = await logout(JSON.parse(sessionStorage.userData));

		sessionStorage.removeItem('userData');
		window.location = './index.html';
	} catch (error) {
		alert(error.message);
	}
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

	const data = getFormValues(form);

	try {
		const result = await post(catchesUrl, data);
		onLoadClick();
	} catch (error) {
		alert(error.message);
	}
}

function getFormValues(form) {
	const angler = form.querySelector('.angler').value;
	const weight = form.querySelector('.weight').value;
	const species = form.querySelector('.species').value;
	const location = form.querySelector('.location').value;
	const bait = form.querySelector('.bait').value;
	const captureTime = form.querySelector('.captureTime').value;

	const data = { angler, weight, species, location, bait, captureTime };
	return data;
}
