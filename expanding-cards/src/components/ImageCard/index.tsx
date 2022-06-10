import React from 'react';

import { imageDataType } from '../../types';
import { useAppDispatch } from '../../app/hooks';
import { setActiveImage } from '../../features/imageSlice';

interface ImageCardProps {
  img: imageDataType;
}

const ImageCard: React.FC<ImageCardProps> = ({ img }) => {
  const dispatch = useAppDispatch();
  const { id, title, url, active } = img;

  const onCardClick = () => {
    dispatch(setActiveImage(id));
  };

  return (
    <div
      className={`image-card ${active ? 'active' : ''}`}
      onClick={onCardClick}
    >
      <div className='image-card__content'>
        <img src={url} alt={title} />
      </div>
      <h2>{title}</h2>
    </div>
  );
};

export default ImageCard;
