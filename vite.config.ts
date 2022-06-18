import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import Unocss from 'unocss/vite';
import ViteRsw from 'vite-plugin-rsw';

import unoOptions from './unocss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    ViteRsw(),
    Unocss(unoOptions),
    tsconfigPaths(),
    react(),
  ],
  esbuild: {
    // [vite] warning: Top-level "this" will be replaced with undefined since this file is an ECMAScript module
    // https://github.com/vitejs/vite/issues/8644
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  }
})
