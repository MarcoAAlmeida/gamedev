// vuetify.config.ts
import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration'

const isDarkMode = import.meta.client && window.matchMedia('(prefers-color-scheme: dark)').matches

export default defineVuetifyConfiguration({
  theme: {
    defaultTheme: isDarkMode ? 'dark' : 'light',
    themes: {
      light: {
        dark: false,
      },
      dark: {
        dark: true,
      },
    },
  },
  icons: {
    defaultSet: 'unocss-mdi',
  },
})
