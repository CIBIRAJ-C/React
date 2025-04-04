import React, { useEffect, useState } from 'react';
import ProductCard from './Components/ProductCard';
import Cart from './Components/Cart';
import './index.css';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=6')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(product => product.id !== id));
  };

  return (
    <div className="container">
      <h1>🛍️ CIBI_SHOP</h1>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <Cart cartItems={cart} removeFromCart={removeFromCart} />
    </div>
  );
}

export default App;
