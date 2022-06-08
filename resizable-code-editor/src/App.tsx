import React, { useEffect } from 'react';

import { bundle } from './bundler';
import CodeCell from './components/CodeCell';

const App: React.FC = () => {
  // start esbuild-wasm service
  useEffect(() => {
    bundle();
  }, []);

  return (
    <div className='app'>
      <CodeCell />
    </div>
  );
};

export default App;
