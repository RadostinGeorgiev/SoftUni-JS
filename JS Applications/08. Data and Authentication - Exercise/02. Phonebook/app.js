function attachEvents() {
    const url = 'http://localhost:3030/jsonstore/phonebook';

    //---- get elements ------------------------------------------------------------
    const inputs = {
        person: document.getElementById('person'),
        phone: document.getElementById('phone'),
    };

    const buttons = {
        load: document.getElementById('btnLoad'),
        create: document.getElementById('btnCreate'),
    };

    //---- attach button events ----------------------------------------------------
    buttons.load.addEventListener('click', onLoadClick);
    buttons.create.addEventListener('click', onCreateClick);

    //---- fill ul with loaded phones ----------------------------------------------
    async function onLoadClick() {
        const ul = document.getElementById('phonebook');

        //---- GET records ---------------------------------------------------------
        const response = await fetch(url);
        const data = await response.json();

        ul.replaceChildren(...Object.values(data).map(p => createLi(p.person, p.phone, p._id)));
    }

    //---- read input fields & create phone record ---------------------------------
    async function onCreateClick() {
        if ([...Object.values(inputs)].every((x) => x.value.trim() != '')) {
            const data = {
                person: inputs.person.value,
                phone: inputs.phone.value,
            };

            //---- POST record -----------------------------------------------------
            const options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            };

            const response = await fetch(url, options);

            inputs.person.value = '';
            inputs.phone.value = '';
            onLoadClick();
        } else {
            alert('Please, fill all values!');
        }
    }

    //---- create li & button for phone --------------------------------------------
    function createLi(person, phone, id) {
        const li = document.createElement('li');
        li.textContent = `${person}: ${phone}`;

        const buttonDelete = document.createElement('button');
        buttonDelete.textContent = 'Delete';
        li.appendChild(buttonDelete);

        buttonDelete.addEventListener('click', async () => {
            //---- DELETE records --------------------------------------------------
            const options = {
                method: 'DELETE'
            };

            li.remove();
            const response = await fetch(url + `/${id}`, options);
        });

        return li;
    }
}

attachEvents();