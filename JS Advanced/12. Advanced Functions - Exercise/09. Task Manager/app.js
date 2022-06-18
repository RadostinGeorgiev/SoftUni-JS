function solve() {
    const inputs = {
        task: document.getElementById('task'),
        description: document.getElementById('description'),
        date: document.getElementById('date'),
    };

    const sections = {
        open: document.querySelector('.orange').parentElement.nextElementSibling,
        inProgress: document.querySelector('.yellow').parentElement.nextElementSibling,
        complete: document.querySelector('.green').parentElement.nextElementSibling,
    };

    document.getElementById('add').addEventListener('click', onAddClick);

    function onAddClick(ev) {
        ev.preventDefault();

        let task = inputs.task.value;
        let description = inputs.description.value;
        let date = inputs.date.value;

        let article, div, startButton, deleteButton, finishButton;

        if (task && description && date) {
            article = createElement('article', '', sections.open);
            createElement('h3', task, article);
            createElement('p', `Description: ${description}`, article);
            createElement('p', `Due Date: ${date}`, article);

            div = createElement('div', '', article, 'flex');

            startButton = createElement('button', 'Start', div, 'green');
            startButton.addEventListener('click', onStartClick);

            deleteButton = createElement('button', 'Delete', div, 'red');
            deleteButton.addEventListener('click', onDeleteClick);

            finishButton = createElement('button', 'Finish', '', 'orange');
            finishButton.addEventListener('click', onFinishClick);

            Object.values(inputs).forEach(x => x.value = '');
        }

        function onStartClick() {
            sections.inProgress.appendChild(article);
            startButton.remove();
            div.appendChild(finishButton);
        }

        function onDeleteClick() {
            article.remove();
        }

        function onFinishClick() {
            sections.complete.appendChild(article);
            div.remove();
        }
    }

    /**
    * --- createElement -------------------------------------------
    * @param {*} type: string 
    * @param {*} value: string 
    * @param {*} attr: string  
    * @returns element
    */
    function createElement(type, value, parent, className) {
        const element = document.createElement(type);
        element.textContent = value;

        if (className) { element.className = className; }

        if (parent) { parent.appendChild(element); }

        return element;
    }
}