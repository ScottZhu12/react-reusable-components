import React from 'react';

import CodeEditor from './components/code-editor';

const App: React.FC = () => {
  return (
    <div className='app'>
      <CodeEditor initialValue='' />
    </div>
  );
};

export default App;
