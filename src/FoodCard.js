import React from 'react';

const FoodCard = ({ name, price }) => {
  return (
    <div className="food-card">
      <h3>{name}</h3>
      <p>Price: Rs. {price}</p>
    </div>
  );
};

export default FoodCard;
