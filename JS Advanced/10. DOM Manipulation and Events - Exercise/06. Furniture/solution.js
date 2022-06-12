function solve() {
  const items = [];

  const [generateButton, buyButton] = [...document.getElementsByTagName('button')];
  generateButton.addEventListener('click', onGenerateClick);
  buyButton.addEventListener('click', onBuyClick);

  function onGenerateClick({ target }) {
    const table = document.querySelector('.table tbody');

    JSON.parse(target.previousElementSibling.value)
      .forEach(f => table.appendChild(createTableRow(f)));
  }

  function onBuyClick({ target }) {
    const checkedRows = items.filter(x => x.isChecked());

    let totalPrice = checkedRows.reduce((a, b) => a + Number(b.item.price), 0);
    let averageDecFactor = (checkedRows.reduce((a, b) => a + Number(b.item.decFactor), 0) / checkedRows.length);

    const output = target.previousElementSibling;
    output.value = (`Bought furniture: ${checkedRows.map(r => r.item.name).join(', ')}\n`);
    output.value += (`Total price: ${totalPrice.toFixed(2)}\n`);
    output.value += (`Average decoration factor: ${averageDecFactor}`);
  }

  function createTableRow(item) {
    const row = document.createElement('tr');
    row.appendChild(createCell('img', item.img, 'src'));
    row.appendChild(createCell('p', item.name));
    row.appendChild(createCell('p', item.price));
    row.appendChild(createCell('p', item.decFactor));

    const cell = document.createElement('td');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    cell.appendChild(checkbox);
    row.appendChild(cell);

    items.push({ item, isChecked });

    function isChecked() { return checkbox.checked; };

    return row;
  }

  /**
   * --- createElements -------------------------------------------
   * @param {*} type: string 
   * @param {*} value: string 
   * @param {*} attr: string  
   * @returns 
   */
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