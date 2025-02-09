import React from 'react';

const PortfolioDetail = ({ image, title, onClose, onNext, onPrev }) => {
  return (
    <div className="portfolio-detail">
      <button onClick={onClose}>Close</button>
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <div>
        <button onClick={onPrev}>Prev</button>
        <button onClick={onNext}>Next</button>
      </div>
    </div>
  );
};

export default PortfolioDetail;
