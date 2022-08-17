import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import { DATA_ATTRIBUTE } from './constants'
import render from "preact-render-to-string";
import { h } from 'preact';
import App from "./src/index"
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(),
  createHtmlPlugin({
    entry: 'src/main.tsx',
    inject: {
      data: {
        attr: DATA_ATTRIBUTE,
        injectScript: render(h(App, {}), {}, {pretty: true}),
      },
    },
  })
],
  build: {
    minify: false,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },
})
