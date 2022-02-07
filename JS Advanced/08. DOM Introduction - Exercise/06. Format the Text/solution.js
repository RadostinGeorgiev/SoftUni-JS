function solve() {
  let text = document.querySelector('#input').value
    .split('.')
    .filter((el) => el)
    .map((el) => el.trim().concat('.'));
  let output = document.querySelector('#output');

  const paragraphs = Math.ceil(text.length / 3);

  for (let index = 0; index < paragraphs; index++) {
    let paragraph = document.createElement('p');
    let innerText = document.createTextNode(`${text.splice(0, 3).join(' ')}`);
    paragraph.appendChild(innerText);

    output.appendChild(paragraph);
  }
}