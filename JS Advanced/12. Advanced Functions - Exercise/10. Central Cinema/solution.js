function solve() {
    document.querySelector('#container button').addEventListener('click', onScreenClick);
    document.querySelector('#archive button').addEventListener('click', onClearClick);

    const sections = {
        addMovie: document.querySelector('#add-new'),
        onScreen: document.querySelector('#movies ul'),
        archive: document.querySelector('#archive ul'),
    }

    function onScreenClick(event) {
        event.preventDefault();

        const inputs = [...sections.addMovie.getElementsByTagName('input')];
        const input = {
            name: inputs[0].value,
            hall: inputs[1].value,
            price: inputs[2].value,
        };

        let li, sold;

        if (inputs.every(i => i.value) && !isNaN(Number(input.price))) {
            inputs.forEach(x => x.value = '');

            li = createElement('li', '', sections.onScreen);
            createElement('span', input.name, li);
            createElement('strong', `Hall: ${input.hall}`, li);

            const div = createElement('div', '', li);
            createElement('strong', `${Number(input.price).toFixed(2)}`, div);
            sold = createElement('input', 'Tickets Sold', div, 'placeholder');

            const button = createElement('button', 'Archive', div);
            button.addEventListener('click', onArchiveClick);
        };

        function onArchiveClick() {
            const soldTickets = Number(sold.value);

            if (sold.value && !isNaN(Number(soldTickets))) {
                li.remove();

                const total = Number(input.price) * soldTickets;
                li = createElement('li', '', sections.archive);
                createElement('span', input.name, li);
                createElement('strong', `Total amount: ${total.toFixed(2)}`, li);

                const buttonDelete = createElement('button', 'Delete', li);
                buttonDelete.addEventListener('click', onDeleteClick);
            }
        }

        function onDeleteClick({ target }) {
            target.parentElement.remove();
        }
    }

    function onClearClick({ target }) {
        [...sections.archive.getElementsByTagName('li')]
            .forEach(x => x.remove());
    }

    /**
    * --- createElement -------------------------------------------
    * @param {*} type: string 
    * @param {*} value: string 
    * @param {*} attr: string  
    * @returns element
    */
    function createElement(type, value, parent, attr) {
        const element = document.createElement(type);

        attr
            ? element.setAttribute(attr, value)
            : element.textContent = value;

        if (parent) { parent.appendChild(element); }

        return element;
    }
}