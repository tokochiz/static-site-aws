import React, { useState, useEffect } from 'react';
import PortfolioItem from './PortfolioItem';
import PortfolioDetail from './PortfolioDetail';
import { S3_IMAGES, PROJECTS } from '../../utils/constants';

const PortfolioGrid = () => {
  const [randomizedImages, setRandomizedImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // 画像配列をシャッフル
    const shuffleImages = () => {
      const shuffled = [...S3_IMAGES].sort(() => Math.random() - 0.5);
      setRandomizedImages(shuffled);
    };

    shuffleImages();
  }, []);

  const handleImageClick = (index) => {
    setSelectedImage(randomizedImages[index]);
    setCurrentIndex(index);
  };

  const handleCloseDetail = () => {
    setSelectedImage(null);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % randomizedImages.length);
    setSelectedImage(randomizedImages[(currentIndex + 1) % randomizedImages.length]);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + randomizedImages.length) % randomizedImages.length);
    setSelectedImage(randomizedImages[(currentIndex - 1 + randomizedImages.length) % randomizedImages.length]);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, index) => (
          <PortfolioItem
            key={project.id}
            image={randomizedImages[index] || "/api/placeholder/400/300"}
            title={project.title}
            onClick={() => handleImageClick(index)} // IDを渡す
          />
        ))}
      </div>
      {selectedImage && (
        <PortfolioDetail
          image={selectedImage}
          title={PROJECTS[currentIndex].title}
          onClose={handleCloseDetail}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </>
  );
};

export default PortfolioGrid;
