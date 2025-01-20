// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  ssr: false,
  devtools: { enabled: true },

  nitro: {
    compressPublicAssets: true,
  },

  vite: {
    build: {
      modulePreload: false,
    },
    $client: {
      build: {
        rollupOptions: {
          output: {
            chunkFileNames: '_nuxt/[name]-[hash].js',
            assetFileNames: '_nuxt/[name]-[hash][extname]',
            entryFileNames: '_nuxt/[name]-[hash].js'
          }
        }
      }
    }
  },

  modules: ['nuxt-vitalizer'],
  vitalizer: {
    disableStylesheets: 'entry',
    disablePrefetchLinks: true,
    disablePreloadLinks: true,
  },
})