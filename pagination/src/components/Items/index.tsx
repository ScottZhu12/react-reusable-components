import React from 'react';

interface ItemsProps {
  currentItems: number[];
}

const Items: React.FC<ItemsProps> = ({ currentItems }) => {
  return (
    <div className='items'>
      {currentItems &&
        currentItems.length > 0 &&
        currentItems.map((item) => {
          return (
            <div>
              <h3>Item #{item}</h3>
            </div>
          );
        })}
    </div>
  );
};

export default Items;
