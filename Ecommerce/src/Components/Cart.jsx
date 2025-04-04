import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div className="cart-section">
      <h2>🛒 Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <span>{item.title.substring(0, 20)}...</span>
            <span>${item.price}</span>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
