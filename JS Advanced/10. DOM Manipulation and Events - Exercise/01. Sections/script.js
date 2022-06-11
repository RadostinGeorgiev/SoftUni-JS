function create(words) {
   const output = document.getElementById('content');

   words.forEach(w => {
      const divElement = document.createElement('div');

      const pElement = document.createElement('p');
      pElement.textContent = w;
      pElement.style.display = 'none';
      divElement.appendChild(pElement);

      divElement.addEventListener('click', () => pElement.style.display = 'block')

      output.appendChild(divElement);
   });
}