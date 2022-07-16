async function lockedProfile() {
	const main = document.getElementById('main');
	main.replaceChildren();

	const url = 'http://localhost:3030/jsonstore/advanced/profiles';
	//---- get users info ----------------------------------------------------
	const users = await getRequest(url);

	//---- fill profile cards for each user ----------------------------------
	[...Object.values(users)].forEach((user, idx) => {
		createProfileCard(user, idx + 1);
	});
}

function createProfileCard(data, id) {
	const { _id, username, email, age } = data;

	//---- create structure of profile cards ----------------------------------
	const wrap = document.createElement('div');
	wrap.className = 'profile';
	wrap.innerHTML = `				
        <img src="./iconProfile2.png" class="userIcon" />
        <label>Lock</label>
        <input type="radio" name="user${id}Locked" value="lock" checked>
        <label>Unlock</label>
        <input type="radio" name="user${id}Locked" value="unlock"><br>
        <hr>
        <label>Username</label>
        <input type="text" name="user${id}Username" value="${username}" disabled readonly />
        <div class="user1Username">
            <hr>
            <label>Email:</label>
            <input type="email" name="user${id}Email" value="${email}" disabled readonly />
            <label>Age:</label>
            <input type="text" name="user${id}Age" value="${age}" disabled readonly />
        </div>`;

	main.appendChild(wrap);
	//---- Hide detailed info ------------------------------------------------
	wrap.querySelector('div').classList.add('hiddenInfo');

	//---- attach button with event ------------------------------------------
	const button = document.createElement('button');
	button.textContent = 'Show more';
	button.addEventListener('click', onToggleInfo);
	wrap.appendChild(button);
}

function onToggleInfo({ target }) {
    //---- Get hidden elements -----------------------------------------------
    const divProfileElement = target.parentElement;
	const hiddenDiv = divProfileElement.querySelector('div');
	const radioButton = divProfileElement.querySelector('[type=radio]:checked');
    
	if (radioButton.value == 'unlock') {
        const button = target;
        
        //---- Toggle info ---------------------------------------------------
		if (button.textContent == 'Show more') {
			button.textContent = 'Hide it';
			hiddenDiv.classList.remove('hiddenInfo');
		} else {
			button.textContent = 'Show more';
			hiddenDiv.classList.add('hiddenInfo');
		}
	}
}

/**
 * --- function for create GetRequest ----------------------------------------
 * @param {string} url
 * @returns {promise}
 */
async function getRequest(url) {
	const response = await fetch(url);

	if (response.status != 200) {
		throw new Error('Error');
	}

	return response.json();
}