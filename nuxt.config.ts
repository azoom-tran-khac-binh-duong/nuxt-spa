// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  ssr: false,
  devtools: { enabled: true },
  vite: {
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
  }
})
