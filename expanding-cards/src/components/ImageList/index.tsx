import React from 'react';

import { useAppSelector } from '../../app/hooks';
import ImageCard from '../ImageCard';

const ImageList: React.FC = () => {
  const data = useAppSelector((state) => state.image.data);

  if (!data || data.length === 0) {
    return <h1>Loading...</h1>;
  }

  const renderedList = data.map((img) => {
    return <ImageCard key={img.id} img={img} />;
  });

  return <div className='image-list'>{renderedList}</div>;
};

export default ImageList;
