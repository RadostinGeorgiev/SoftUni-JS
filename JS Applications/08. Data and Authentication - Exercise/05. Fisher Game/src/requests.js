import { getUserData } from './utils.js';

const loginUrl = 'http://localhost:3030/users/login';
const registerUrl = 'http://localhost:3030/users/register';
const logoutUrl = 'http://localhost:3030/users/logout';

/**
 * --- function CRUD requests ---------------------------------------------------
 * --- return data or error as promise
 * @param {string} url
 * @param {object} options
 * @returns {promise}
 */
async function request(url, options) {
	if (options && options.body) {
		options.headers['Content-Type'] = 'application/json';
	}

    const userData = getUserData();
    if (userData) {
        options.headers['X-Authorization'] = userData.accessToken;
    }

	const response = await fetch(url, options);

	if (response.ok == false) {
		const error = await response.json();
		throw new Error(error.message);
	}

	const data = await response.json();

	return data;
}

//---- GET records ---------------------------------------------------------
async function get(url) {
    const options = {
		method: 'GET',
		headers: {},
	};

	try {
		const data = await request(url, options);

		return data;
	} catch (error) {
		alert(error.message);
	}
}

//---- POST record ---------------------------------------------------------
async function post(url, data) {
	const options = {
		method: 'POST',
        headers: {},
		body: JSON.stringify(data),
	};

	try {
		const result = await request(url, options);

		return result;
	} catch (error) {
		alert(error.message);
	}
}

//---- PUT record ----------------------------------------------------------
async function put(url, data) {
	const options = {
		method: 'PUT',
		headers: {},
		body: JSON.stringify(data),
	};

	try {
		const result = await request(url, options);

		return result;
	} catch (error) {
		alert(error.message);
	}
}

//---- DELETE record -------------------------------------------------------
async function del(url) {
	const options = {
		method: 'DELETE',
        headers: {},
	};

	try {
		const result = await request(url, options);

		return result;
	} catch (error) {
		alert(error.message);
	}
}

//---- LOGIN ---------------------------------------------------------
async function login(data) {
	try {
		const options = {
			method: 'POST',
            headers: {},
			body: JSON.stringify(data),
		};

		return await request(loginUrl, options);
	} catch (error) {
		throw new Error(error.message);
	}
}

//---- REGISTER ---------------------------------------------------------
async function register(data) {
	const options = {
		method: 'POST',
        headers: {},
		body: JSON.stringify(data),
	};

	try {
		const result = await request(registerUrl, options);

		return result;
	} catch (error) {
		alert(error.message);
	}
}

//---- LOGOUT ---------------------------------------------------------
async function logout(data) {
	const token = getUserData().accessToken;

	const options = {
		method: 'GET',
		headers: {
			'X-Authorization': token,
		},
	};

	try {
		const response = await fetch(logoutUrl, options);

		if (response.status != 204) {
			const error = await response.json();
			alert(error.message);

			throw new Error(error.message);
		}
	} catch (error) {
		alert(error.message);
	}
}

export { get, post, put, del, login, register, logout };
