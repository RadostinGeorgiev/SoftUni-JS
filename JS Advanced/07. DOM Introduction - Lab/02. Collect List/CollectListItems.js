function extractText() {
    const elements = document.querySelectorAll('#items li');

    const result = [];
    for (const element of Array.from(elements)) {
        result.push(element.textContent);
    }

    document.getElementById('result').textContent = result.join('\n');
}