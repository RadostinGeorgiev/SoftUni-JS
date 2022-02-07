function generateReport() {
    let checkedCols = Array.from(document.querySelectorAll('thead th input'));
    let dataRows = Array.from(document.querySelectorAll('tbody tr'));

    let checkedColumns = [];
    for (let col = 0; col < checkedCols.length; col++) {
        if (checkedCols[col].checked) {
            checkedColumns.push(col);
        }
    }

    let output = [];
    for (const row of dataRows) {
        let object = {};

        for (let i = 0; i < row.children.length; i++) {
            if (checkedColumns.some(x => x == i)) {
                object[checkedCols[i].name] = row.children[i].textContent;
            }
        }

        output.push(object);
    }

    document.querySelector('#output').value = JSON.stringify(output, '', 2);
}