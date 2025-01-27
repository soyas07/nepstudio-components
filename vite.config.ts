import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts'; // Import the plugin
import path from 'path';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineConfig({
  plugins: [
    react(),
    cssInjectedByJsPlugin(),
    dts({
      insertTypesEntry: true, // Add `types` entry in package.json
      tsconfigPath: path.resolve(__dirname, 'tsconfig.build.json'), // Path to your tsconfig
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'), // Entry point for the library
      name: 'nepstudio-components',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        assetFileNames: '[name].[ext]', // Ensures CSS and other assets are named correctly
      },
    },
    cssCodeSplit: false, // Ensure that CSS is split and extracted during build
  },
});
