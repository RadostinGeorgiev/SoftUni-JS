function sumTable() {
    document.getElementById('sum').textContent = Array.from(document.querySelector('table')
        .querySelectorAll('tr'))
        .slice(1, -1)
        .reduce((a, b) => a + Number(b.lastChild.textContent), 0)
}