function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let fields = Array.from(document.querySelectorAll('tbody td'));
      const searchedText = document.querySelector('#searchField').value;

      const rows = Array.from(document.querySelectorAll('tbody tr'));
      rows.forEach(row => row.classList.remove('select'));

      fields.forEach(field => {
         if (field.textContent.includes(searchedText)) {
            field.parentElement.classList.add('select');
         }
      });
   }
}