document.querySelectorAll('.product-item button').forEach((button) => {
    button.addEventListener('click', () => {
      alert('Product added to cart!');
    });
  });