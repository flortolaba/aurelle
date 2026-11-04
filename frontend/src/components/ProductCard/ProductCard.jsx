import React from 'react';

const ProductCard = ({ product }) => {
  const { title, category, price, image, badge } = product;

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={image} alt={title} />
        {badge && <span className="product-badge">{badge}</span>}
      </div>
      <div className="product-info">
        <span className="product-category">{category}</span>
        <h3 className="product-title">{title}</h3>
        <p className="product-price">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;