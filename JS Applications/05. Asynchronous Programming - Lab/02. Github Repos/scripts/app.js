async function loadRepos() {
	const username = document.getElementById('username').value;
	const url = `https://api.github.com/users/${username}/repos`;
	const ul = document.getElementById('repos');
	repos.innerHTML = '';

	try {
		const response = await fetch(url);

		if (response.ok == false) {
			throw new Error(`${response.status} "${response.statusText}"`);
		}

		const data = await response.json();

		for (const repo of data) {
			ul.innerHTML += `<li>
			<a href = "${repo.html_url}" target = "_blank">
				${repo.full_name}
			</a>
			</li>`;
		}
	} catch (error) {
		ul.innerHTML = `${error.message}`;
	}
}
