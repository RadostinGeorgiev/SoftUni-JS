import { notify } from "../notify.js";

const host = 'http://localhost:3030';

const endpoints = {
	login: '/users/login',
	register: '/users/register',
	logout: '/users/logout'
}

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

	const userData = JSON.parse(sessionStorage.getItem('userData'));
	if (userData != null) {
		options.headers['X-Authorization'] = userData.accessToken;
	}

	try {
		const response = await fetch(host + url, options);

		if (response.ok !== true) {
			if (response.status == 403) {
				sessionStorage.removeItem('userData');
			}

			const error = await response.json();
			throw new Error(error.message);
		}

		if (response.status == 204) {
			return response;
		} else {
			return response.json();
		}

	} catch (error) {
		// alert(error.message);
		notify(error.message);
		throw error;
	}

}

const get = request.bind(null, 'GET');
const post = request.bind(null, 'POST');
const put = request.bind(null, 'PUT');
const del = request.bind(null, 'DELETE');
const register = request.bind(null, 'POST', endpoints.register);
const login = request.bind(null, 'POST', endpoints.login);
const logout = request.bind(null, 'GET', endpoints.logout);

export { get, post, put, del, register, login, logout }