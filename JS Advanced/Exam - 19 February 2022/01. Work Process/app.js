function solve() {
    const inputs = Array.from(document.querySelectorAll('#signup input'));
    const [
        firstNameElement,
        lastNameElement,
        emailElement,
        dateOfBirthElement,
        positionElement,
        salaryElement,
    ] = inputs;

    const messageElement = document.querySelector('#sum');
    document.querySelector('#add-worker').addEventListener('click', onClick);

    let budget = 0;

    function onClick(ev) {
        ev.preventDefault();

        if (inputs.every(el => el.value)) {

            const table = document.querySelector('#tbody');
            table.appendChild(createRow());
            budget += Number(salaryElement.value);
            inputs.forEach(el => el.value = '');

            messageElement.textContent = budget.toFixed(2);
        }
    }

    function createRow() {
        const row = createElements('tr');

        createElements('td', firstNameElement.value, row);
        createElements('td', lastNameElement.value, row);
        createElements('td', emailElement.value, row);
        createElements('td', dateOfBirthElement.value, row);
        createElements('td', positionElement.value, row);
        createElements('td', salaryElement.value, row);

        const cellAction = createElements('td', '', row);

        const buttonFired = createElements('button', 'Fired', cellAction);
        buttonFired.classList.add('fired');
        buttonFired.addEventListener('click', onFiredClick);

        const buttonEdit = createElements('button', 'Edit', cellAction);
        buttonEdit.classList.add('edit');
        buttonEdit.addEventListener('click', onEditClick);

        return row;
    }

    function onEditClick(ev) {
        const currentRow = ev.target.parentElement.parentElement;
        const cells = currentRow.querySelectorAll('td');

        inputs.forEach((el, idx) => el.value = cells[idx].textContent);

        budget -= Number(cells[5].textContent);
        messageElement.textContent = budget.toFixed(2);

        currentRow.remove();
    }

    function onFiredClick(ev) {
        const currentRow = ev.target.parentElement.parentElement;
        const cells = currentRow.querySelectorAll('td');

        budget -= Number(cells[5].textContent);
        messageElement.textContent = budget.toFixed(2);

        currentRow.remove();
    }

    /**
     * --- createElements -------------------------------------------
     * @param {*} type: string 
     * @param {*} value: string 
     * @param {*} parent: string 
     * @param {*} attr: string  
     * @returns 
     */
    function createElements(type, value, parent, attr) {
        const element = document.createElement(type);

        attr
            ? element.setAttribute(attr, value)
            : element.textContent = value;

        parent
            ? parent.appendChild(element)
            : null;

        return element;
    }
}
solve()