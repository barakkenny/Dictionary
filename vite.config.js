import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

//https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA(
      { 
        registerType: 'autoUpdate',
        manifest: {
          name: 'Dictionary App',
          short_name: 'Dictionary App',
          description: 'My Awesome App description',
          theme_color: '#ffffff',
          icons: [
            {
              "src": "/android-chrome-192x192.png",
              "sizes": "192x192",
              "type": "image/png"
            },
            {
              "src": "/android-chrome-512x512.png",
              "sizes": "512x512",
              "type": "image/png"
            }
          ]
        }
      })
  ],
  // base: './',
})

// {
//   "name": "Dictionary App",
//   "short_name": "Dictionary App",
//   "theme_color": "#ffffff",
//   "background_color": "#ffffff",
//   "display": "standalone",
//   "scope": "/",
//   "start_url": "/",
//   "icons": [
//     {
//       "src": "/android-chrome-192x192.png",
//       "sizes": "192x192",
//       "type": "image/png"
//     },
//     {
//       "src": "/android-chrome-512x512.png",
//       "sizes": "512x512",
//       "type": "image/png"
//     }
//   ]
// }