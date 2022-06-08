import * as esbuild from 'esbuild-wasm';

import { unpkgPathPlugin } from '../plugins/unpkg-path-plugin';
import { fetchPlugin } from '../plugins/fetch-plugin';

interface BuildResult {
  code: string;
  error: string;
}

// initialize and start the esbuild-wasm service when the app is started
// try-catch block ensures the service is initialized once only
export const bundle = () => {
  try {
    esbuild.build({});
  } catch (err) {
    if (err instanceof Error && err.message.includes('initialize')) {
      esbuild.initialize({
        worker: true,
        wasmURL: 'https://unpkg.com/esbuild-wasm/esbuild.wasm',
      });
    } else {
      throw err;
    }
  }
};

// esbuild.build: transpile and bundle the code
export const bundledOutput = async (rawCode: string): Promise<BuildResult> => {
  return esbuild
    .build({
      entryPoints: ['index.js'],
      bundle: true,
      write: false,
      plugins: [unpkgPathPlugin(), fetchPlugin(rawCode)],
      define: {
        'process.env.NODE_ENV': `'production'`,
        global: 'window',
      },
    })
    .then((result): BuildResult => {
      return {
        code: result.outputFiles[0].text,
        error: '',
      };
    })
    .catch((err) => {
      return {
        code: '',
        error: err.message,
      };
    });
};
