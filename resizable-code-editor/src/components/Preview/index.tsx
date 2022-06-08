import './preview.css';

import React, { useRef, useEffect } from 'react';

interface PreviewProps {
  code: string;
  err: string;
}

// html file will be used in iframe to render contents
const html = `
<html>
<head>
<style>
html {background-color: white;}
</style>
</head>
<body>
  <div id="root"></div>
  <script>
  const handleError = (err) => {
    const root = document.querySelector('#root');
    root.innerHTML = '<div style="color: red;"><h4>Runtime Error</h4>' + err + '</div>'
    console.error(err);
  };

  // handle async error during runtime
  window.addEventListener('error', (event) => {
    event.preventDefault();
    handleError(event.error);
  });

  // handle sync error during runtime
  window.addEventListener('message', (event) => {
    try {
      eval(event.data);
    } catch (err) {
      handleError(err);   
    }
  }, false);
  </script>
</body>
</html>
`;

const Preview: React.FC<PreviewProps> = ({ code, err }) => {
  const iframe = useRef<any>();

  useEffect(() => {
    // reset iframe html before user executing new code
    iframe.current.srcdoc = html;

    // enable the communication between parent window and the iframe
    setTimeout(() => {
      iframe.current.contentWindow.postMessage(code, '*');
    }, 50);
  }, [code]);

  return (
    <div className='preview-wrapper'>
      <iframe
        ref={iframe}
        sandbox='allow-scripts'
        srcDoc={html}
        title='preview'
      ></iframe>
      {
        // handle bundling error
        err && <div className='preview-error'>{err}</div>
      }
    </div>
  );
};

export default Preview;
