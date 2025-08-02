// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    pages: true,
    modules: [
        'nuxt-icon',
        'nuxt-lodash',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/supabase',
        '@nuxtjs/google-fonts'
    ],
    runtimeConfig: {
        public: {
          stripePk: process.env.STRIPE_PK_KEY
        }
    },
    googleFonts: {
      families: {
        'Khmer': true,
        'Noto Sans Khmer': {
          wght: [100, 300, 400, 700], 
        },
      },
      display: 'swap',
    },
    app: {
        head: {
          script: [
            { src: 'https://js.stripe.com/v3/', defer: true }
          ],
        }
      }
})
