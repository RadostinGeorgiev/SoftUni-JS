function solve() {
    const formElement = document.querySelector('.addMails');

    document.querySelector('#add').addEventListener('click', onAddClick);
    document.querySelector('#reset').addEventListener('click', onResetClick);
    const ulElement = document.querySelector('#list');

    function onAddClick(ev) {
        ev.preventDefault();

        const titleElement = formElement.querySelector('#title');
        const recipientNameElement = formElement.querySelector('#recipientName');
        const messageElement = formElement.querySelector('#message');

        if (titleElement.value != '' &&
            recipientNameElement.value != '' &&
            messageElement.value != '') {

            const liElement = createElements('li', '', ulElement);
            createElements('h4', `Title: ${titleElement.value}`, liElement);
            createElements('h4', `Recipient Name: ${recipientNameElement.value}`, liElement);
            createElements('span', `${messageElement.value}`, liElement);

            const divElement = createElements('div', 'list-action', liElement, 'id');

            const buttonSend = createElements('button', 'Send', divElement);
            buttonSend.setAttribute('id', 'send');
            buttonSend.addEventListener('click', onSendClick);

            const buttonDelete = createElements('button', 'Delete', divElement);
            buttonDelete.setAttribute('id', 'delete');
            buttonDelete.addEventListener('click', onDeleteClick);

            titleElement.value = '';
            recipientNameElement.value = '';
            messageElement.value = '';
        }
    }

    function onSendClick(ev) {
        ev.preventDefault();

        const sourceLiElement = ev.target.parentElement.parentElement;

        const title = sourceLiElement.querySelector('h4:first-of-type').textContent
            .substring(7);
        const recipient = sourceLiElement.querySelector('h4:nth-of-type(2)').textContent
            .substring(16);

        const ulSentElement = document.querySelector('.sent-list');

        const liElement = createElements('li', '', ulSentElement);
        createElements('span', `To: ${recipient}`, liElement);
        createElements('span', `Title: ${title}`, liElement);

        const divElement = createElements('div', 'btn', liElement, 'class');

        const buttonDelete = createElements('button', 'Delete', divElement);
        buttonDelete.setAttribute('class', 'delete');
        buttonDelete.addEventListener('click', onMailDeleteClick);

        sourceLiElement.remove();
    }

    function onDeleteClick(ev) {
        ev.preventDefault();

        const sourceLiElement = ev.target.parentElement.parentElement;

        const title = sourceLiElement.querySelector('h4:first-of-type').textContent
            .substring(7);
        const recipient = sourceLiElement.querySelector('h4:nth-of-type(2)').textContent
            .substring(16);

        const ulDeleteElement = document.querySelector('.delete-list');

        const liElement = createElements('li', '', ulDeleteElement);
        createElements('span', `To: ${recipient}`, liElement);
        createElements('span', `Title: ${title}`, liElement);

        sourceLiElement.remove();
    }


    function onMailDeleteClick(ev) {
        ev.preventDefault();

        const sourceLiElement = ev.target.parentElement.parentElement;

        const recipient = sourceLiElement.querySelector('span:first-of-type').textContent
            .substring(4);
        const title = sourceLiElement.querySelector('span:nth-of-type(2)').textContent
            .substring(7);

        const ulDeleteElement = document.querySelector('.delete-list');

        const liElement = createElements('li', '', ulDeleteElement);
        createElements('span', `To: ${recipient}`, liElement);
        createElements('span', `Title: ${title}`, liElement);

        sourceLiElement.remove();
    }

    function onResetClick(ev) {
        ev.preventDefault();
        
        const divElement = ev.target.parentElement.parentElement;

        divElement.querySelector('#title').value = '';
        divElement.querySelector('#recipientName').value = '';
        divElement.querySelector('#message').value = '';
    }

    function createElements(type, value, parent, attr) {
        const element = document.createElement(type);

        if (type == 'button') { element.setAttribute('type', 'submit'); };
        attr
            ? element.setAttribute(attr, value)
            : element.textContent = value;

        parent
            ? parent.appendChild(element)
            : null;

        return element;
    }
}