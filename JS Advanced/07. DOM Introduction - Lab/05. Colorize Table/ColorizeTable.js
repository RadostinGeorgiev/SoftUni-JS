function colorize() {
    Array.from(document.querySelectorAll('tr:nth-child(even)'))
        .forEach(x => x.style.backgroundColor = 'Teal');
}