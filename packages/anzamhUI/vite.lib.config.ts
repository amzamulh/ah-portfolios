import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import tailwindcss from '@tailwindcss/vite'
import { resolve } from "path";
import { glob } from 'glob';

interface Entries {
  [key: string]: string;
}

const entries = glob.sync('ahui/src/**/index.ts').reduce<Entries>((acc, file) => {
  const name = file
    .replace('ahui/src/', '')
    .replace('/index.ts', '')
    .replace('index.ts', 'index');
  acc[name === '' ? 'index' : name] = resolve(__dirname, file);
  return acc;
}, {});

export default defineConfig({
  plugins: [
    react(),
     tailwindcss(),
    dts({
      entryRoot: "ahui/src",
      tsconfigPath: "./tsconfig.lib.json",
      outDir: "dist",
      insertTypesEntry: true
    })
  ],
  build: {
    lib: {
      entry: entries,
      formats: ["es", "cjs"],
      fileName: (format, entryName) => {
        if (entryName === 'index') {
          return `index.${format === 'es' ? 'js' : 'cjs'}`;
        }
        return `${entryName}.${format === 'es' ? 'js' : 'cjs'}`;
      }
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        exports: 'named',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    },
    sourcemap: true,
    minify: false,
    emptyOutDir: true
  }
});