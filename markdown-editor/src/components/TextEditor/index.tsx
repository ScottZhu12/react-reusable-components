import './text-editor.css';

import React, { useState, useEffect, useRef } from 'react';
import MDEditor from '@uiw/react-md-editor';

const TextEditor: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState<string | undefined>('Text Editor');
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const listener = (e: MouseEvent) => {
      // prevent toggling the editor from clicking inside of the editor
      if (ref.current && e.target && ref.current.contains(e.target as Node)) {
        return;
      }

      setEditing(false);
    };

    document.addEventListener('click', listener, { capture: true });

    return () => {
      document.removeEventListener('click', listener, { capture: true });
    };
  }, []);

  // click inside of the markdown editor, enable the editing mode
  if (editing) {
    return (
      <div className='text-editor' ref={ref}>
        <MDEditor value={value} onChange={setValue} />
      </div>
    );
  }

  // click outside of the markdown editor, enable the preview mode
  return (
    <div
      className='text-editor card'
      onClick={() => {
        setEditing(true);
      }}
    >
      <div className='card-content'>
        <MDEditor.Markdown source={value} />
      </div>
    </div>
  );
};

export default TextEditor;
