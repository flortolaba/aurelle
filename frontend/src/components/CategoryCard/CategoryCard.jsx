import React from 'react';

const CategoryCard = ({ category }) => {
  const { name, image, badge } = category;

  return (
    <div className="category-card">
      <div className="category-image-wrapper">
        <img src={image} alt={name} className="category-image" />
        {badge && <span className="badge">{badge}</span>}
      </div>
      <div className="category-footer">
        <span className="category-name">{name}</span>
      </div>
    </div>
  );
};

export default CategoryCard;