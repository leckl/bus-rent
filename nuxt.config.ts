// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  ssr: true,
  vite: {
    server: {
      hmr: {
        overlay: false // Отключает WebSocket-соединение для HMR
      },
    },
    plugins: [
      tailwindcss(),
    ],
  },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        }
      ]
    }
  },
  nitro: {
    preset: 'node-server',
  },
})
