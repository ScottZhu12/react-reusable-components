import './code-editor.css';
import React, { useState, useRef } from 'react';
import MonacoEditor from '@monaco-editor/react';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import prettier from 'prettier';
import parser from 'prettier/parser-babel';

interface CodeEditorProps {
  initialValue: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ initialValue }) => {
  const [editorValue, setEditorValue] = useState(initialValue);
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor>();

  const onEditorMount = (editor: monaco.editor.IStandaloneCodeEditor) => {
    editor.getModel()?.updateOptions({ tabSize: 2 });
    editorRef.current = editor;
  };

  const onEditorChange = (value: string | undefined) => {
    // if value is undefined set input as an empty string
    setEditorValue(value ?? '');
  };

  const onFormatClick = () => {
    // get current value from editor
    const unformatted = editorRef.current?.getModel()?.getValue();

    // format the retrived value
    const formatted = prettier
      .format(unformatted ?? '', {
        parser: 'babel',
        plugins: [parser],
        useTabs: false,
        semi: true,
        singleQuote: true,
      })
      .replace(/\n$/, '');

    // set the formatted value back in the editor
    editorRef.current?.setValue(formatted);
  };

  return (
    <div className='editor-wrapper'>
      <button
        className='button button-format is-primary is-small'
        type='button'
        onClick={onFormatClick}
      >
        Format
      </button>
      <MonacoEditor
        defaultValue={initialValue}
        value={editorValue}
        defaultLanguage='javascript'
        onMount={onEditorMount}
        onChange={onEditorChange}
        height='500px'
        theme='vs-dark'
        options={{
          wordWrap: 'on',
          minimap: { enabled: false },
          showUnused: false,
          folding: false,
          lineNumbersMinChars: 3,
          fontSize: 16,
          scrollBeyondLastLine: false,
          automaticLayout: true,
        }}
      />
    </div>
  );
};

export default CodeEditor;
