function search() {
   const searchedText = document.getElementById('searchText').value;
   let matches = 0;

   Array.from(document.getElementById('towns').children)
      .forEach(x => {
         if (x.textContent.includes(searchedText)) {
            x.style.fontWeight = 'bold';
            x.style.textDecoration = 'underline';
            matches++;
         } else {
            x.style.fontWeight = 'normal';
            x.style.textDecoration = 'none';
         }
      });

   document.getElementById('result').textContent = `${matches} matches found`;
}