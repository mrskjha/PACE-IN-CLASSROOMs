// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite'; // Import defineConfig
import react from '@vitejs/plugin-react';
import path from 'path'; // If you need path for aliasing

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      three: path.resolve(__dirname, 'node_modules/three'), // Add alias for three
    },
  },
});
