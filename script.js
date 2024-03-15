document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.item');
    const totalElement = document.getElementById('total');
  
    items.forEach(item => {
      const decrementButton = item.querySelector('.decrement');
      const incrementButton = item.querySelector('.increment');
      const quantityElement = item.querySelector('.quantity');
      const deleteButton = item.querySelector('.delete');
      const likeButton = item.querySelector('.like');
  
      decrementButton.addEventListener('click', function() {
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 1) {
          quantity--;
          quantityElement.textContent = quantity;
          updateTotal();
        }
      });
  
      incrementButton.addEventListener('click', function() {
        let quantity = parseInt(quantityElement.textContent);
        quantity++;
        quantityElement.textContent = quantity;
        updateTotal();
      });
  
      deleteButton.addEventListener('click', function() {
        item.remove();
        updateTotal();
      });
  
      likeButton.addEventListener('click', function() {
        likeButton.classList.toggle('liked');
      });
    });
  
    function updateTotal() {
      let total = 0;
      items.forEach(item => {
        const quantity = parseInt(item.querySelector('.quantity').textContent);
        const price = parseInt(item.querySelector('.item-price').textContent.slice(1));
        total += quantity * price;
      });
      totalElement.textContent = `Total: $${total}`;
    }
  });