function solve() {
    const inputs = {
        recipient: document.getElementById('recipientName'),
        title: document.getElementById('title'),
        message: document.getElementById('message'),
    }

    const lists = {
        listMails: document.querySelector('#list'),
        sentMails: document.querySelector('.sent-list'),
        deletedMails: document.querySelector('.delete-list'),
    }

    const buttons = {
        add: document.getElementById('add'),
        reset: document.getElementById('reset'),
    }
    buttons.add.addEventListener('click', onAddClick);
    buttons.reset.addEventListener('click', onResetClick);

    function clearFields() {
        inputs.recipient.value = '';
        inputs.title.value = '';
        inputs.message.value = '';
    }

    function onAddClick(event) {
        event.preventDefault();

        if ([...Object.values(inputs)].some(x => x.value == '')) { return; }

        const recipient = inputs.recipient.value;
        const title = inputs.title.value;
        const message = inputs.message.value;

        clearFields();

        const li = createElement('li', '', lists.listMails);
        createElement('h4', `Title: ${title}`, li);
        createElement('h4', `Recipient Name: ${recipient}`, li);
        createElement('span', `${message}`, li);

        const div = createElement('div', '', li, 'id', 'list-action');
        const sendButton = createElement('button', 'Send', div, 'type', 'submit');
        sendButton.id = 'send';
        sendButton.addEventListener('click', onSendClick);
        const deleteButton = createElement('button', 'Delete', div, 'type', 'submit');
        deleteButton.id = 'delete';
        deleteButton.addEventListener('click', onDeleteClick);


        function onSendClick(event) {
            event.preventDefault();
            event.target.parentElement.parentElement.remove();

            const liSent = createElement('li', '', lists.sentMails);
            createElement('span', `To: ${recipient}`, liSent);
            createElement('span', `Title: ${title}`, liSent);

            const divSent = createElement('div', '', liSent, 'class', 'btn');

            const deleteButton = createElement('button', 'Delete', divSent, 'type', 'submit');
            deleteButton.className = 'delete';
            deleteButton.addEventListener('click', onDeleteClick);
        }

        function onDeleteClick(event) {
            event.preventDefault();
            event.target.parentElement.parentElement.remove();

            const liDelete = createElement('li', '', lists.deletedMails);
            createElement('span', `To: ${recipient}`, liDelete);
            createElement('span', `Title: ${title}`, liDelete);

        }

    }

    function onResetClick(event) {
        event.preventDefault();
        clearFields();
    }

    /**
    * --- function for creation DOM elements ---------------------------------------
    * @param {string} type
    * @param {string} value 
    * @param {element} parent 
    * @param {string} attr  
    * @param {string} attrValue
    * @param {boolean} disabled
    * @returns HTML element
    */
    function createElement(type, value, parent, attr, attrValue, disabled) {
        const element = document.createElement(type);

        if (type == 'input') { element.setAttribute('type', 'text'); };
        if (value) { element.textContent = value; };
        if (attr) { element.setAttribute(attr, attrValue); };
        if (parent) { parent.appendChild(element); };
        if (disabled) { element.disabled = disabled; };

        return element;
    }
}

solve()