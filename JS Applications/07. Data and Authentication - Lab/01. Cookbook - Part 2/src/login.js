document.querySelector('form').addEventListener('submit', onSubmit);
const url = 'http://localhost:3030/users/login';

async function onSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);

	const user = {
		email: formData.get('email'),
		password: formData.get('password'),
	};      
    
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