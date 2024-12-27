---
title: 'vuetify'
description: 'popular UI library for Vuejs'
icon: 'i-devicon:vuetify'
url: 'https://vuetifyjs.com/en/components/all/#containment'
---

# Vuetify

For [a gente introduction](https://vuetifyjs.com/en/introduction/why-vuetify/#what-is-vuetify3f)

>  Vuetify is a collection of pre-made components paired with powerful features such dynamic themes, global defaults, application layouts, and more. 

1. [Vuetify](https://vuetifyjs.com/en/)
2. [Vuetify features](https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides)
3. [Vuetify navigation drawer](https://vuetifyjs.com/en/components/navigation-drawers/#bottom-drawer)
4. [Vuetify wireframe](https://vuetifyjs.com/en/getting-started/wireframes/#examples)

The [vuetify-nuxt-module](https://nuxt.vuetifyjs.com/) is used to integrate Vuetify into [Nuxt](/nuxt).

[Nuxt Images](https://content.nuxt.com/usage/markdown#images)

## SASS customization

```
@use 'vuetify' with (
    $font-size-root: .9em,
    $body-font-family: 'Playwrite AU VIC Guides'
);
```


```
@use 'vuetify' with (
    $font-size-root: .9em,
    $body-font-family: 'Playwrite AU VIC Guides'
);
```

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


![my image](/img/2024-12-26_211920.png)


::simpleCard{:icon='icon' :title='title' :description='description' :url='url'}
::
