function solve() {
   document.querySelector('.shopping-cart').addEventListener('click', onClick);
   const output = document.querySelector('textarea');
   document.querySelector('.checkout').addEventListener('click', onCheckOut);

   const shoppingCart = [];

   function onClick({ target }) {
      if (target.tagName === 'BUTTON' && target.classList.contains('add-product')) {

         let product = target.parentNode.parentNode;
         let name = product.querySelector('.product-title').textContent;
         let money = product.querySelector('.product-line-price').textContent;
         output.value += `Added ${name} for ${money} to the cart.\n`;

         shoppingCart.push({ name, money })
      }
   }

   function onCheckOut() {
      const products = new Set();
      shoppingCart.forEach(p => products.add(p.name));

      const totalPrice = shoppingCart.map(p => Number(p.money)).reduce((t, c) => t + c, 0);
      output.value += `You bought ${[...products.keys()].join(', ')} for ${totalPrice.toFixed(2)}.`;

      Array.from(document.querySelectorAll('button')).forEach(b => b.disabled = true);
   }
}