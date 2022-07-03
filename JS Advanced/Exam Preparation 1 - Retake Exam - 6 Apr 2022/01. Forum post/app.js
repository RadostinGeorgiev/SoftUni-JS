window.addEventListener("load", solve);

function solve() {
  const inputs = {
    title: document.getElementById('post-title'),
    category: document.getElementById('post-category'),
    content: document.getElementById('post-content'),
  }

  const lists = {
    review: document.getElementById('review-list'),
    published: document.getElementById('published-list'),
  }

  document.getElementById('publish-btn').addEventListener('click', onPublishClick);
  document.getElementById('clear-btn').addEventListener('click', onClearClick);

  function onPublishClick(event) {
    event.preventDefault();

    if ([...Object.values(inputs)].some(x => x.value == '')) { return; };

    const title = inputs.title.value;
    const category = inputs.category.value;
    const content = inputs.content.value;

    inputs.title.value = '';
    inputs.category.value = '';
    inputs.content.value = '';

    const li = createElement('li', '', lists.review, 'class', 'rpost');
    const article = createElement('article', '', li);
    createElement('h4', `${title}`, article);
    createElement('p', `Category: ${category}`, article);
    createElement('p', `Content: ${content}`, article);

    const editButton = createElement('button', 'Edit', li, 'class', 'action-btn edit');
    editButton.addEventListener('click', onEditClick);
    const approveButton = createElement('button', 'Approve', li, 'class', 'action-btn approve');
    approveButton.addEventListener('click', onApproveClick);

    function onEditClick() {
      inputs.title.value = title;
      inputs.category.value = category;
      inputs.content.value = content;

      li.remove();
    }

    function onApproveClick() {
      lists.published.appendChild(li);
      
      editButton.remove();
      approveButton.remove();
    }
  }

  function onClearClick() {
    lists.published.innerHTML = '';
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