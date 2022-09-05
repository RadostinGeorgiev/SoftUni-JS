import { getUserData, clearUserData } from './utils.js';

const host = 'http://localhost:3030';
const loginUrl = '/users/login';
const registerUrl = '/users/register';
const logoutUrl = '/users/logout';

/**
 * --- function CRUD requests ---------------------------------------------------
 * --- return data or error as promise
 * @param {string} url
 * @param {object} options
 * @returns {promise}
 */
async function request(method, url, data) {
	const options = {
		method: method,
		headers: {}
	};

	if (data != undefined) {
		options.headers['Content-Type'] = 'application/json';
		options.body = JSON.stringify(data);
	}

	const userData = getUserData();
	if (userData) {
		options.headers['X-Authorization'] = userData.accessToken;
	}

	const response = await fetch(host + url, options);

	if (response.ok !== true) {
		if (response.status == 403) {
			clearUserData();
		}

		const error = await response.json();
		throw new Error(error.message);
	}

	if (response.status == 204) {
		return response;
	} else {
		return response.json();
	}
}

const get = request.bind(null, 'GET');
const post = request.bind(null, 'POST');
const register = request.bind(null, 'POST', registerUrl);
const login = request.bind(null, 'POST', loginUrl);
const logout = request.bind(null, 'GET', logoutUrl);

export { get, post, register, login, logout };