window.addEventListener("load", solve);

function solve() {
  const inputs = {
    make: document.getElementById('make'),
    model: document.getElementById('model'),
    year: document.getElementById('year'),
    fuel: document.getElementById('fuel'),
    originalCost: document.getElementById('original-cost'),
    sellingPrice: document.getElementById('selling-price'),
  }

  const elements = {
    tableBody: document.getElementById('table-body'),
    ulElement: document.getElementById('cars-list'),
    profit: document.getElementById('profit'),
  }

  document.getElementById('publish').addEventListener('click', onPublishClick);

  let totalProfit = 0;

  function onPublishClick(event) {
    event.preventDefault();

    if ([...Object.values(inputs)].some(x => x.value == '') ||
      Number(inputs.originalCost.value) > Number(inputs.sellingPrice.value)) { return; }  //check for invalid fields

    const [make, model, year, fuel, originalCost, sellingPrice] =
      [...Object.values(inputs)].map(x => x.value); //read fields
    [...Object.values(inputs)].map(x => x.value = '');  //clear fields                                                        

    const row = createElement('tr', '', elements.tableBody, 'class', 'row');
    createElement('td', make, row);
    createElement('td', model, row);
    createElement('td', year, row);
    createElement('td', fuel, row);
    createElement('td', originalCost, row);
    createElement('td', sellingPrice, row);
    const buttonsCell = createElement('td', '', row);

    const editButton = createElement('button', 'Edit', buttonsCell, 'class', 'action-btn edit');
    editButton.addEventListener('click', onEditClick);

    const sellButton = createElement('button', 'Sell', buttonsCell, 'class', 'action-btn sell');
    sellButton.addEventListener('click', onSellClick);

    function onEditClick() {
      row.remove();

      const fields = [make, model, year, fuel, originalCost, sellingPrice];
      [...Object.values(inputs)].map((x, i) => x.value = fields[i]);  //set fields
    }

    function onSellClick() {
      row.remove();
      const profit = Number(sellingPrice) - Number(originalCost);
      totalProfit += profit;

      const li = createElement('li', '', elements.ulElement, 'class', 'each-list');
      createElement('span', `${make} ${model}`, li);
      createElement('span', `${year}`, li);
      createElement('span', `${profit}`, li);

      elements.profit.textContent = totalProfit.toFixed(2);
    }
  }


  /**
  * --- function for creation DOM elements ---------------------------------------
  * @param {string} type
  * @param {string} value 
  * @param {element} parent 
  * @param {string} attr  
  * @param {string} attrValue
  * @param {boolean} disabled
  * @returns HTML element
  */
  function createElement(type, value, parent, attr, attrValue, disabled) {
    const element = document.createElement(type);

    if (type == 'input') { element.setAttribute('type', 'text'); };
    if (value) { element.textContent = value; };
    if (attr) { element.setAttribute(attr, attrValue); };
    if (parent) { parent.appendChild(element); };
    if (disabled) { element.disabled = disabled; };

    return element;
  }
}