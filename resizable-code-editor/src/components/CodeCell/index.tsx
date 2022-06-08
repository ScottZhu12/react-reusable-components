import './code-cell.css';

import React, { useState, useEffect } from 'react';

import { bundledOutput } from '../../bundler';
import CodeEditor from '../CodeEditor';
import Preview from '../Preview';
import Resizable from '../Resizable';

const CodeCell: React.FC = () => {
  const [input, setInput] = useState('');
  const [err, setErr] = useState('');
  const [code, setCode] = useState('');

  // generate transpiled and bundled code in a debounced manner
  useEffect(() => {
    const timer = setTimeout(async () => {
      const { code, error } = await bundledOutput(input);
      setCode(code);
      setErr(error);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    // make the code cell resizable in vertical direction
    <Resizable direction='vertical'>
      <div className='code-cell'>
        <Resizable direction='horizontal'>
          <CodeEditor
            initialValue='const a = 1;'
            onChange={(value) => setInput(value)}
          />
        </Resizable>
        <Preview code={code} err={err} />
      </div>
    </Resizable>
  );
};

export default CodeCell;
