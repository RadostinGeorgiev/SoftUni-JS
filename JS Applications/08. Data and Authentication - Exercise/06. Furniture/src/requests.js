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

// //---- PUT record ----------------------------------------------------------
// async function put(url, data) {
// 	const options = {
// 		method: 'PUT',
// 		headers: {},
// 		body: JSON.stringify(data),
// 	};

// 	try {
// 		const result = await request(url, options);

// 		return result;
// 	} catch (error) {
// 		alert(error.message);
// 	}
// }

// //---- DELETE record -------------------------------------------------------
// async function del(url) {
// 	const options = {
// 		method: 'DELETE',
// 		headers: {},
// 	};

// 	try {
// 		const result = await request(url, options);

// 		return result;
// 	} catch (error) {
// 		alert(error.message);
// 	}
// }

// //---- LOGOUT ---------------------------------------------------------
// async function logout(data) {
// 	const token = getUserData().accessToken;

// 	const options = {
// 		method: 'GET',
// 		headers: {
// 			'X-Authorization': token,
// 		},
// 	};

// 	try {
// 		const response = await fetch(logoutUrl, options);

// 		if (response.status != 204) {
// 			const error = await response.json();
// 			alert(error.message);

// 			throw new Error(error.message);
// 		}
// 	} catch (error) {
// 		alert(error.message);
// 	}
// }

const get = request.bind(null, 'GET');
const post = request.bind(null, 'POST');
const register = request.bind(null, 'POST', registerUrl);
const login = request.bind(null, 'POST', loginUrl);
const logout = request.bind(null, 'GET', logoutUrl);

export { get, post, register, login, logout };
//export { get, post, put, del, login, register, logout };
