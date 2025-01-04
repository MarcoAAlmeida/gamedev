---
title: 'vuetify'
description: 'popular UI library for Vuejs'
icon: 'i-devicon:vuetify'
url: 'https://vuetifyjs.com/en/components/all/#containment'
---

>  Vuetify is a collection of pre-made components paired with powerful features such dynamic themes, global defaults, application layouts, and more. 

- [Vuetify](https://vuetifyjs.com/en/)
- [Vuetify features](https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides)
- [Vuetify navigation drawer](https://vuetifyjs.com/en/components/navigation-drawers/#bottom-drawer)
- [Vuetify wireframe](https://vuetifyjs.com/en/getting-started/wireframes/#examples)
- [Grids](https://vuetifyjs.com/en/components/grids/)
- [V-col](https://vuetifyjs.com/en/api/v-col/)
- [Selects](https://vuetifyjs.com/en/components/selects/#usage)
- [Menus](https://vuetifyjs.com/en/components/menus/#usage)
- [Sheets](https://vuetifyjs.com/en/components/sheets/#anatomy)
- [Breakpoints](https://vuetifyjs.com/en/features/display-and-platform/#breakpoints-and-thresholds)
- [Avatars](https://vuetifyjs.com/en/components/avatars/#anatomy)
- [Borders](https://vuetifyjs.com/en/styles/borders/#theme-colors)

The [vuetify-nuxt-module](https://nuxt.vuetifyjs.com/) is used to integrate Vuetify into [Nuxt](/nuxt).

[Nuxt Images](https://content.nuxt.com/usage/markdown#images)

## Vuetify Documentation


## SASS customization

```{css}
@use 'vuetify' with (
    $font-size-root: .9em,
    $body-font-family: 'Playwrite AU VIC Guides'
);
```

Added head links for Google Fonts at `nuxt.config.ts`
```{json}
  app: {
    head: {
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Playwrite+AU+VIC+Guides&family=Quicksand:wght@300..700&display=swap',
        },
      ],

```

color configurations handled at `vuetify.config.ts` (for a particularly ugly combination):
```
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
```

:ScreenshotThumbnail{ title='some wacky color schemes for Vuetify theme' src='/screenshots/20241226211920.png' style='ma-4 w-33 h-25'}
