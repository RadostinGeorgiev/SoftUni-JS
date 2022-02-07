function solve() {
  const words = document.getElementById('text').value;
  const naming = document.getElementById('naming-convention').value;

  function changeCase(input) {
    return input.toLowerCase()
      .split(' ')
      .map(el => el[0].toUpperCase() + el.slice(1))
      .join('');
  }

  let result = changeCase(words);

  if (naming === 'Camel Case') {
    result = result[0].toLowerCase() + result.slice(1);
  } else if (naming === 'Pascal Case') {
  } else {
    result = 'Error!';
  }

  document.getElementById('result').textContent = result;
}