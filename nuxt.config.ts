// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // https://nuxt.com/modules
  modules: ['@nuxthub/core', '@nuxt/eslint', '@nuxt/content', 'vuetify-nuxt-module', 'vuetify-nuxt-module', '@unocss/nuxt', '@nuxt/icon'],
  components: {
    global: true,
    dirs: ['~/components'],
  },
  // https://devtools.nuxt.com
  devtools: { enabled: true },
  css: ['@mdi/font/css/materialdesignicons.css'],
  // Env variables - https://nuxt.com/docs/getting-started/configuration#environment-variables-and-private-tokens
  runtimeConfig: {
    public: {
      // Can be overridden by NUXT_PUBLIC_HELLO_TEXT environment variable
      helloText: 'Hello from the Edge 👋',
    },
  },
  // https://nuxt.com/docs/getting-started/upgrade#testing-nuxt-4
  future: { compatibilityVersion: 4 },
  compatibilityDate: '2024-07-30',

  // https://hub.nuxt.com/docs/getting-started/installation#options
  hub: {},

  // https://eslint.nuxt.com
  eslint: {
    config: {
      stylistic: {
        quotes: 'single',
      },
    },
  },
  vuetify: {
    moduleOptions: {
      disableVuetifyStyles: false,
    },
    vuetifyOptions: {
      icons: {
        defaultSet: 'unocss-mdi',
      },
    },
  },
})
