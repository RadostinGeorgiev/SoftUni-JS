function solve() {
  const [generateButton, buyButton] = [...document.getElementsByTagName('button')];

  generateButton.addEventListener('click', onGenerateClick);
  buyButton.addEventListener('click', onBuyClick);

  function onGenerateClick({target}) {
    const table = document.querySelector('.table tbody');

    JSON.parse(target.previousElementSibling.value)
      .forEach(f => table.appendChild(createTableRow(f)));
  }

  function onBuyClick({target}) {
    const output = target.previousElementSibling;

    const checkedRows = [...document.querySelectorAll('[type=checkbox]:checked')]
      .map(x => x.parentElement.parentElement)
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

  function createTableRow(item) {
    const row = document.createElement('tr');
    row.appendChild(createCell('img', item.img, 'src'));
    row.appendChild(createCell('p', item.name));
    row.appendChild(createCell('p', item.price));
    row.appendChild(createCell('p', item.decFactor));
    row.appendChild(createCell('input', 'checkbox', 'type'));

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