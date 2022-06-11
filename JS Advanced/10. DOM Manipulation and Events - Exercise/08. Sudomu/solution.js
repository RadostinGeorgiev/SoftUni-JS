function solve() {
    const [checkButton, clearButton] = [...document.querySelectorAll('button')];

    checkButton.addEventListener('click', onCheckClick);
    clearButton.addEventListener('click', onClearClick);

    const table = document.querySelector('table');
    const result = document.querySelector('#check p');
    const fields = [...document.querySelectorAll('input[type=number]')];


    function onCheckClick(ev) {

        if (isFilled() && isInRange() && isNoDuplicatesInRow() && isNoDuplicatesInColumn()) {
            result.textContent = 'You solve it! Congratulations!';
            result.style.color = 'green';
            table.style.border = '2px solid green';

        } else {
            result.textContent = 'NOP! You are not done yet...';
            result.style.color = 'red';
            table.style.border = '2px solid red';
        }


        function isFilled() {
            return fields.every(f => f.value);
        }

        function isInRange() {
            return fields.every(f => f.value >= 1 && f.value <= 3);
        }

        function isNoDuplicatesInRow() {
            return [...document.querySelectorAll('tbody tr')]
                .map(row => new Set([...row.querySelectorAll('input[type=number]')]
                    .map(c => c.value)))
                .map(set => set.size == 3)
                .every(b => b);
        }

        function isNoDuplicatesInColumn() {
            let byRows = [...document.querySelectorAll('tbody tr')]
                .map(row => [...row.querySelectorAll('input[type=number]')]
                    .map(c => c.value));

            let byCols = byRows[0].map((col, i) => byRows.map(row => row[i]));

            return byCols.map(col => new Set(col))
                .map(set => set.size == 3)
                .every(b => b);
        }
    };

    function onClearClick(ev) {
        fields.forEach(c => c.value = '');
        result.textContent = '';
        table.style.border = 'none';
    };
}