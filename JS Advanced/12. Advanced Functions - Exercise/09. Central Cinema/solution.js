function solve() {
    const onScreenButton = document.querySelector('#container button');
    onScreenButton.addEventListener('click', onScreenClick);

    const clearButton = document.querySelector('#archive button');
    clearButton.addEventListener('click', onClearClick);

    const inputName = document.querySelector('input[placeholder=Name]');
    const inputHall = document.querySelector('input[placeholder=Hall]');
    const inputTicketPrice = document.querySelector('input[placeholder="Ticket Price"]');

    const archiveSection = document.querySelector('#archive ul');

    function onScreenClick(ev) {
        ev.preventDefault();

        let nameMovie = inputName.value;
        let hallMovie = inputHall.value;
        let priceMovie = inputTicketPrice.value;

        if (nameMovie && hallMovie &&
            priceMovie && !isNaN(Number(priceMovie))) {

            const li = document.createElement('li');

            let span = document.createElement('span');
            span.textContent = nameMovie;

            let hallStrong = document.createElement('strong');
            hallStrong.textContent = `Hall: ${hallMovie}`;

            let div = document.createElement('div');

            let priceStrong = document.createElement('strong');
            priceStrong.textContent = Number(priceMovie).toFixed(2);

            let input = document.createElement('input');
            input.setAttribute('placeholder', 'Tickets Sold');

            let button = document.createElement('button');
            button.textContent = 'Archive';
            button.addEventListener('click', onArchiveClick);

            div.appendChild(priceStrong);
            div.appendChild(input);
            div.appendChild(button);

            li.appendChild(span);
            li.appendChild(hallStrong);

            li.appendChild(div);

            const moviesSection = document.querySelector('#movies ul');
            moviesSection.appendChild(li);

            inputName.value = '';
            inputHall.value = '';
            inputTicketPrice.value = '';
        }



        function onArchiveClick(ev) {
            const liMovie = ev.target.parentElement.parentElement;
            const inputCount = liMovie.querySelector('div input');
            let count = inputCount.value;

            if (count && !isNaN(Number(count))) {

                const li = document.createElement('li');

                let span = document.createElement('span');
                const nameMovie = liMovie.querySelector('span');
                span.textContent = nameMovie.textContent;  

                let priceStrong = document.createElement('strong');
                count = Number(inputCount.value);
                const priceMovie = liMovie.querySelector('div strong');
                let price = Number(priceMovie.textContent);
                let totalPrice = price * count;
                priceStrong.textContent = `Total amount: ${totalPrice.toFixed(2)}`;

                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.addEventListener('click', onDeleteClick);
                
                li.appendChild(span);
                li.appendChild(priceStrong);
                li.appendChild(deleteButton);

                archiveSection.appendChild(li);

                liMovie.remove();
            }
        }
    }

    function onDeleteClick(ev) {
        liMovie = ev.target.parentElement;
        liMovie.remove();
    }

    function onClearClick(ev) {
        Array.from(archiveSection.querySelectorAll('li'))
            .forEach(v => v.remove());
    }
}