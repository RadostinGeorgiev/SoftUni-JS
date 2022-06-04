function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const searchedText = document.getElementById('searchField');
      Array.from(document.querySelectorAll('tbody tr')).forEach(x => x.classList.remove('select'));

      Array.from(document.querySelectorAll('tbody td'))
         .filter(x => x.textContent.includes(searchedText.value))
         .map(x => x.parentElement.classList.add('select'));

      searchedText.value = '';
   }
}