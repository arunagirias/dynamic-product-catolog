import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { image, title, price, description } = product;

  return (
    <div className="card">
      <img src={image} alt={title} className="product-img" />
      <h2 className="title">{title}</h2>
      <p className="price">${price}</p>
      <p className="desc">{description.substring(0, 100)}...</p>
    </div>
  );
};

export default ProductCard;