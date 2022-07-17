async function onLogOutClick() {
	const url = 'http://localhost:3030/users/logout';

	const options = {
		method: 'GET',
		headers: {
			'X-Authorization': sessionStorage.accessToken,
		},
	};

	await fetch(url, options);
	sessionStorage.removeItem('accessToken');

	window.location = 'index.html';
}