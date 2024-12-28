// vuetify.config.ts
import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration'

export default defineVuetifyConfiguration({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          background: '#FFFFFF',
          surface: '#FFFFFF',
          anchor: '#8c9eff' },
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
