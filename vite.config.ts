import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import viteImagemin from '@vheemstra/vite-plugin-imagemin'
import imageminMozjpeg from 'imagemin-mozjpeg'
import imageminPngquant from 'imagemin-pngquant'
import imageminWebp from 'imagemin-webp'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    react(),
    viteImagemin({
      plugins: {
        jpg: imageminMozjpeg({ quality: 80 }),
        png: imageminPngquant({ quality: [0.7, 0.9] }),
      },
      // Automatically generates a .webp copy of every jpg/png
      makeWebp: {
        plugins: {
          jpg: imageminWebp({ quality: 80 }),
          png: imageminWebp({ quality: 80 }),
        },
      },
    }),
  ],
})