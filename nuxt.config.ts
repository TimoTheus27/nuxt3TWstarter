import { defineNuxtConfig } from 'nuxt'
import eslintPlugin from 'vite-plugin-eslint'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {}
        }
      }
    }
  },
  css: ['~/assets/styles/tailwind.css'],
  modules: [
    './modules/socket.js'
  ],
  typescript: {
    strict: true,
    typeCheck: true
  },
  vite: {
    plugins: [
      eslintPlugin()
    ]
  }
})
