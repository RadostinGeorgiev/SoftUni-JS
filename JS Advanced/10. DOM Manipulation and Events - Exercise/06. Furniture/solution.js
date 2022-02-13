function solve() {
  const [generateButton, buyButton] = Array.from(document.querySelectorAll('button'));

  generateButton.addEventListener('click', onClickGenerate);
  buyButton.addEventListener('click', onClickBuy);

  function onClickGenerate(ev) {
    const table = document.querySelector('.table tbody');
    const input = ev.target.previousElementSibling;
    JSON.parse(input.value)
      .map(i => createRow(i))
      .forEach(r => table.appendChild(r));

    function createRow(item) {
      const row = document.createElement('tr');

      row.appendChild(createCell('img', item.img, 'src'));
      row.appendChild(createCell('p', item.name));
      row.appendChild(createCell('p', item.price));
      row.appendChild(createCell('p', item.decFactor));
      row.appendChild(createCell('input', 'checkbox', 'type'));

      return row;
    }

    function createCell(type, value, attr) {
      const cell = document.createElement('td');
      const element = document.createElement(type);

      attr
        ? element.setAttribute(attr, value)
        : element.textContent = value;

      cell.appendChild(element);

      return cell;
    }
  }

  function onClickBuy(ev) {
    const output = ev.target.previousElementSibling;

    const checkedRows = Array.from(document.querySelectorAll('[type=checkbox]:checked'))
      .map(c => c.parentElement.parentElement)
      .map(r => ({
        name: r.children[1].textContent,
        price: Number(r.children[2].textContent),
        decFactor: Number(r.children[3].textContent),
      }));

    let totalPrice = checkedRows.map(r => r.price).reduce((a, b) => a + b);
    let averageDecFactor = (checkedRows.map(r => r.decFactor).reduce((a, b) => a + b)) / checkedRows.length;

    output.value = (`Bought furniture: ${checkedRows.map(r => r.name).join(', ')}\n`);
    output.value += (`Total price: ${totalPrice.toFixed(2)}\n`);
    output.value += (`Average decoration factor: ${averageDecFactor}`);
  }
}