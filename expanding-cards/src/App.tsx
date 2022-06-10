import React, { useEffect } from 'react';

import ImageList from './components/ImageList';
import { useAppDispatch } from './app/hooks';
import { fetchImages } from './features/imageSlice';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  return (
    <div className='app'>
      <ImageList />
    </div>
  );
};

export default App;
