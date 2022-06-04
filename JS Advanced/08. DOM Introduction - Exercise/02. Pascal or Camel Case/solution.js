function solve() {
  const actions = {
    'Camel Case': () => text = text[0].toLowerCase() + text.slice(1),
    'Pascal Case': () => text,
    'default': () => 'Error!',
  }

  let text = document.getElementById('text').value
    .toLowerCase()
    .split(' ')
    .map(x => x = x[0].toUpperCase() + x.slice(1))
    .join('');
  const convention = document.getElementById('naming-convention').value;

  document.getElementById('result').textContent = (actions[convention] || actions['default'])();
}