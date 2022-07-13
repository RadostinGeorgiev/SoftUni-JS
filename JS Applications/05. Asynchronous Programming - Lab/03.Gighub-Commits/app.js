function loadCommits() {
	const username = document.getElementById('username').value;
	const repository = document.getElementById('repo').value;
	const url = `https://api.github.com/repos/${username}/${repository}/commits`;

	const ul = document.getElementById('commits');
	ul.innerHTML = '';

	fetch(url)
		.then((res) => validateResponse(res))
		.then((data) => data.forEach((x) => showCommitsLi(x)))
		.catch((error) => showErrorLi(error));

	function validateResponse(response) {
		if (response.ok == false) {
			throw new Error(`Error: ${response.status} (Not Found)`);
		}

		return response.json();
	}

	function showCommitsLi(r) {
		const li = document.createElement('li');
		li.textContent = `${r.commit.author.name}: ${r.commit.message}`;
		ul.appendChild(li);
	}

	function showErrorLi(error) {
		const li = document.createElement('li');
		li.textContent = error.message;
		ul.appendChild(li);
	}
}