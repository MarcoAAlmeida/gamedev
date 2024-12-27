// vuetify.config.ts
import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration'

export default defineVuetifyConfiguration({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          surface: '#EEEEEE' },
      },
      dark: {
        dark: true,
        colors: {
          background: '#00FFFF',
        },
      },
    },
  },
  icons: {
    defaultSet: 'unocss-mdi',
  },
})
