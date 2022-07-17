document.querySelector('form').addEventListener('submit', onSubmit);
url = 'http://localhost:3030/users/register';

async function onSubmit(event) {
	event.preventDefault();

	const formData = new FormData(event.target);
	const user = {
		email: formData.get('email'),
		password: formData.get('password'),
	};
    const rePass = formData.get('rePass');

	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(user),
	};

	if ([...formData.values()].some((x) => x == '')) {
		throw new Error('Please fill all values');
	}

	if (user.password != rePass) {
		throw new Error("The passwords don't match");
	}

	try {
		const response = await fetch(url, options);

		if (response.ok == false) {
			const error = await response.json();
			throw new Error(error.message);
		}

		const data = await response.json();

		sessionStorage.setItem('accessToken', data.accessToken);
		window.location = 'index.html';
	} catch (error) {
		alert(error.message);
	}
}