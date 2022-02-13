function create(words) {

   words.forEach(w => {
      const divElement = document.createElement('div');
      const pElement = document.createElement('p');
      pElement.style.display = 'none';
      pElement.textContent = w;
      divElement.appendChild(pElement);

      divElement.addEventListener('click', (ev) => {
         ev.target.querySelector('p').style.display = 'block'});

      document.querySelector('#content').appendChild(divElement);
   });
}