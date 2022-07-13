const saveCartItems = (cartList) => {
localStorage.setItem('cartItems', cartList);
};

saveCartItems('<ol><li>Item</li></ol>');

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
