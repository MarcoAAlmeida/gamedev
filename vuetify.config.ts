// vuetify.config.ts
import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration'

export default defineVuetifyConfiguration({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          'background': '#FF00FF',
          'surface': '#AA0000',
          'surface-bright': '#FFFF00',
          'surface-light': '#EEEEEE',
          'surface-variant': '#424242',
          'on-surface': '#00FF00' },
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
