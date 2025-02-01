// src/components/Portfolio/PortfolioGrid.jsx
import React, { useState, useEffect } from 'react';
import PortfolioItem from './PortfolioItem';
import { S3_IMAGES, PROJECTS } from '../../utils/constants';

const PortfolioGrid = () => {
  const [randomizedImages, setRandomizedImages] = useState([]);

  useEffect(() => {
    // 画像配列をシャッフル
    const shuffleImages = () => {
      const shuffled = [...S3_IMAGES].sort(() => Math.random() - 0.5);
      setRandomizedImages(shuffled);
    };

    shuffleImages();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {PROJECTS.map((project, index) => (
        <PortfolioItem
          key={project.id}
          image={randomizedImages[index] || "/api/placeholder/400/300"}
          title={project.title}
        />
      ))}
    </div>
  );
};

export default PortfolioGrid;