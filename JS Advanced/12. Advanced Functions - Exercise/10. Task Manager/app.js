function solve() {
    document.querySelector('#add').addEventListener('click', onAddClick);

    function onAddClick(ev) {
        ev.preventDefault();

        const taskInput = document.querySelector('#task');
        const descriptionInput = document.querySelector('#description');
        const dateInput = document.querySelector('#date');

        let task = taskInput.value;
        let description = descriptionInput.value;
        let date = dateInput.value;

        if (task && description && date) {
            const article = document.createElement('article');
            
            const h3 = document.createElement('h3');
            h3.textContent = taskInput.value;
            article.appendChild(h3);
            
            const pDescription = document.createElement('p');
            pDescription.textContent = `Description: ${description}`;
            article.appendChild(pDescription);

            const pDate = document.createElement('p');
            pDate.textContent = `Due Date: ${date}`;
            article.appendChild(pDate);

            const div = document.createElement('div');
            div.classList.add('flex');

            const startButton = document.createElement('button');
            startButton.textContent = 'Start';
            startButton.classList.add('green');
            startButton.addEventListener('click', onStartClick);
            div.appendChild(startButton);

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('red');
            deleteButton.addEventListener('click', onDeleteClick);
            div.appendChild(deleteButton);

            article.appendChild(div);

            const openSection = document.querySelector('.orange').parentElement.parentElement;
            const openSectionArticleDiv = openSection.querySelector('div:nth-of-type(2)');       
            openSectionArticleDiv.appendChild(article);

            taskInput.value = '';
            descriptionInput.value = '';
            dateInput.value = '';
        }

    }

    function onStartClick(ev) {
        const task = ev.target.parentElement.parentElement;

        const inProgressArticleDiv = document.querySelector('#in-progress');
        inProgressArticleDiv.appendChild(task);
        
        const finishButton = document.createElement('button');
        finishButton.textContent = 'Finish';
        finishButton.classList.add('orange');
        finishButton.addEventListener('click', onFinishClick);
        task.querySelector('div').appendChild(finishButton);
        
        ev.target.remove();
    }

    function onDeleteClick(ev) {
        const task = ev.target.parentElement.parentElement;
        task.remove();
    }

    function onFinishClick(ev) {
        const task = ev.target.parentElement.parentElement;
        
        const completeSection = document.querySelector('.green').parentElement.parentElement;
        const completedArticleDiv = completeSection.querySelector('div:nth-of-type(2)');
        
        completedArticleDiv.appendChild(task);
        task.querySelector('div').remove();
    }
}