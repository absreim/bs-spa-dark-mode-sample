import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // Optional: Silence specific Sass deprecation warnings
        silenceDeprecations: [
          "import",
          "color-functions",
        ],
        // Optional: Use quietDeps to silence all warnings from files within node_modules
        quietDeps: true,
      },
    },
  },
});
