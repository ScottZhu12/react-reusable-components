import React from 'react';

import { useAppDispatch } from '../../app/hooks';
import { modalChanged } from '../../features/modalSlice';

const Modal: React.FC = () => {
  const dispatch = useAppDispatch();

  const onBtnClick = () => {
    dispatch(modalChanged(false));
  };

  return (
    <div className='modal-container' onClick={onBtnClick}>
      <div className='modal-content' onClick={(e) => e.stopPropagation()}>
        <h2>I'm a modal window</h2>
        <button type='button' onClick={onBtnClick}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
