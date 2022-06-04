function extractText() {
    document.getElementById('result').textContent = Array.from(document.getElementById('items').children)
        .map(x => x.textContent)
        .join('\n');
}