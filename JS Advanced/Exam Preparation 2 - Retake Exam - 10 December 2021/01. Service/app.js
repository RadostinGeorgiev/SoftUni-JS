window.addEventListener("load", solve);

function solve() {
  const inputs = {
    product: document.getElementById('type-product'),
    description: document.getElementById('description'),
    clientName: document.getElementById('client-name'),
    phone: document.getElementById('client-phone'),
  }

  const sections = {
    receivedOrder: document.getElementById('received-orders'),
    completedOrder: document.getElementById('completed-orders'),
  }

  const buttons = {
    send: document.querySelector('#right button'),
    clear: document.querySelector('.clear-btn'),
  }

  let div;

  buttons.send.addEventListener('click', onSendClick);
  buttons.clear.addEventListener('click', onClearClick);

  function onSendClick(ev) {
    ev.preventDefault();

    if ([...Object.values(inputs)].map(x => x.value).some(x => x == '')) {
      return;
    };

    let product = inputs.product.value;
    let description = inputs.description.value;
    let clientName = inputs.clientName.value;
    let phone = inputs.phone.value;

    inputs.description.value = '';
    inputs.clientName.value = '';
    inputs.phone.value = '';

    const div = createElement('div', '', sections.receivedOrder, 'class', 'container');
    createElement('h2', `Product type for repair: ${product}`, div);
    createElement('h3', `Client information: ${clientName}, ${phone}`, div);
    createElement('h4', `Description of the problem: ${description}`, div);
    
    const startButton = createElement('button', 'Start repair', div, 'class', 'start-btn');
    startButton.addEventListener('click', onStartRepairClick);
    const finishButton = createElement('button', 'Finish repair', div, 'class', 'finish-btn', true);
    finishButton.addEventListener('click', onFinishRepairClick);

    function onStartRepairClick() {
      startButton.disabled = true;
      finishButton.disabled = false;
    }

    function onFinishRepairClick() {
      sections.completedOrder.appendChild(div);
      startButton.remove();
      finishButton.remove();
    }
  }

  function onClearClick() {
    [...sections.completedOrder.querySelectorAll('.container')].forEach(x => x.remove());
  }

  /**
  * --- function for creation DOM elements ---------------------------------------
  * @param {string} type
  * @param {string} value 
  * @param {element} parent 
  * @param {string} attr  
  * @param {string} attrValue
  * @param {boolean} disabled
  * @returns element
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