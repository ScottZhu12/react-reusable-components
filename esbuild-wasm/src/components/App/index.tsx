import React, { useState, useEffect } from 'react';
import * as esbuild from 'esbuild-wasm';

const App: React.FC = () => {
  const [input, setInput] = useState('');
  const [code, setCode] = useState('');

  useEffect(() => {
    try {
      esbuild.build({});
    } catch (err) {
      if (err instanceof Error && err.message.includes('initialize')) {
        esbuild.initialize({
          worker: false,
        });
      }
    }
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const onClick = () => {
    setCode('');
  };

  return (
    <>
      <textarea value={input} onChange={onChange}></textarea>
      <button onClick={onClick}>Submit</button>
      <pre>{code}</pre>
    </>
  );
};

export default App;
