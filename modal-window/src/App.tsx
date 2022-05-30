import React from 'react';

import Modal from './components/Modal';
import { useAppSelector, useAppDispatch } from './app/hooks';
import { modalChanged } from './features/modalSlice';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector((state) => state.modal.show);

  const onBtnClick = () => {
    dispatch(modalChanged(true));
  };

  return (
    <div className='app'>
      <h1>modalShown</h1>
      <button type='button' onClick={onBtnClick}>
        Toggle Modal
      </button>
      {isModalOpen && <Modal />}
    </div>
  );
};

export default App;
