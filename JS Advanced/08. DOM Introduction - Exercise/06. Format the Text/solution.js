function solve() {
  const text = document.getElementById('input').value
    .split('.')
    .filter(x => x)
    .map(x => x.concat('.'));
  const output = document.getElementById('output');

  while (text.length) {
    const paragraph = document.createElement('p');
    paragraph.textContent = `${text.splice(0, 3).join(' ')}`;

    output.appendChild(paragraph);
  }
}