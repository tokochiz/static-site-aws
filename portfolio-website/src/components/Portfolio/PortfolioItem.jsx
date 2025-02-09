import React from 'react';

const PortfolioItem = ({ image, title, id, onClick }) => {
  return (
    <div className="overflow-hidden rounded-lg shadow-lg">
      <img 
        src={image} 
        alt={title}
        className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
      />
      <h3 className="p-4 text-lg font-semibold">{title}</h3>
    </div>
  );
};

export default PortfolioItem;
