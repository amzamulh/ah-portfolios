/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import path from 'node:path';
import { fileURLToPath } from 'node:url';
/**
 * Those for storybook
 */
// import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
// import { playwright } from '@vitest/browser-playwright';
// const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));


const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@ah/anzamhui': path.resolve(__dirname, 'ahui/src'),
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    include: [
      'src/test/**/*.{test,spec}.{ts,tsx}',  // Your Button.test.tsx location
      'test/**/*.{test,spec}.{ts,tsx}',      // Alternative test folder
      'tests/**/*.{test,spec}.{ts,tsx}',
      'ahui/**/*.{test,spec}.{ts,tsx}'      // Another alternative
    ],
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/.{idea,git,cache,output,temp}/**',
      '**/*.stories.{ts,tsx}',  // Exclude storybook files
      '**/.storybook/**'
    ],
    setupFiles: './src/test/setup.ts',
    // projects: [{
    //   extends: true,
    //   plugins: [
    //   storybookTest({
    //     configDir: path.join(dirname, '.storybook')
    //   })],
    //   test: {
    //     name: 'storybook',
    //     browser: {
    //       enabled: true,
    //       headless: true,
    //       provider: playwright({}),
    //       instances: [{
    //         browser: 'chromium'
    //       }]
    //     },
    //     setupFiles: ['.storybook/vitest.setup.ts']
    //   }
    // }]
  }
});

