function sumTable() {
    const rows = document.querySelectorAll('table tr');
    let sum = 0;

    for (let index = 1; index < rows.length - 1; index++) {
        sum += Number(rows[index].lastElementChild.textContent);
    }
    
    document.getElementById('sum').textContent = sum;
}