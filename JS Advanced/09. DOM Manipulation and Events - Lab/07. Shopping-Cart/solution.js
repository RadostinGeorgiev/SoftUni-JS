function solve() {
   document.querySelector('.shopping-cart').addEventListener('click', onAddClick);
   document.querySelector('.checkout').addEventListener('click', onCheckoutClick);
   const textArea = document.querySelector('textarea');
   const cart = [];

   function onAddClick({ target }) {
      if (target.className == 'add-product') {
         const product = target.parentElement.parentElement;
         const name = product.querySelector('.product-title').textContent;
         const money = Number(product.querySelector('.product-line-price').textContent);

         textArea.value += `Added ${name} for ${money.toFixed(2)} to the cart.\n`;
         cart.push({ name, money });
      }
   }

   function onCheckoutClick() {
      const list = [...new Set(cart.map(x => x.name))];
      const totalPrice = cart.reduce((a, b) => a + b.money, 0);

      textArea.value += `You bought ${list.join(', ')} for ${totalPrice.toFixed(2)}.`;

      document.querySelector('.shopping-cart').removeEventListener('click', onAddClick);
      document.querySelector('.checkout').removeEventListener('click', onCheckoutClick);
   }
}