import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <h4>{product.title.substring(0, 25)}...</h4>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
