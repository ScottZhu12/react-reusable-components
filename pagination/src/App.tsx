import React from 'react';

import Paginate from './components/Paginate';

// Example items, to simulate fetching from another resources.
export const items = Array.from(Array(50).keys());

const App: React.FC = () => {
  return (
    <div className='app'>
      <Paginate itemsPerPage={4} />
    </div>
  );
};

export default App;
