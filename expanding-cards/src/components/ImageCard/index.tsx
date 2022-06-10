import React from 'react';

import { imageDataType } from '../../types';

interface ImageCardProps {
  img: imageDataType;
}

const ImageCard: React.FC<ImageCardProps> = ({ img }) => {
  const { title, url, active } = img;

  return (
    <div className={`image-card ${active ? 'active' : ''}`}>
      <div className='image-card__content'>
        <img src={url} alt={title} />
      </div>
      <h2>{title}</h2>
    </div>
  );
};

export default ImageCard;
