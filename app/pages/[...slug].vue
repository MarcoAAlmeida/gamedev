<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar :elevation="1">
      <template #prepend>
        <nuxt-link to="/">
          <v-app-bar-nav-icon color="black" />
        </nuxt-link>
      </template>

      <v-app-bar-title>Notebook</v-app-bar-title>
    </v-app-bar>

    <v-navigation-drawer>
      <v-list>
        <v-list-item title="testing basic layout">
          <v-icon color="red-darken-2" icon="mdi-account-circle" size="large" />
          <v-icon color="green-darken-2" icon="mdi-home" size="large" />
        </v-list-item>
        <v-list-item title="stack">
          <v-icon icon="i-logos:vue" />
          <v-icon icon="i-logos:nuxt-icon" />
          <v-icon icon="i-logos:vuetifyjs" />
          <v-icon icon="i-logos:unocss" />
        </v-list-item>
        <v-list-item title="built with">
          <Icon name="uil:github" style="color: black" size="1.2em" />
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="d-flex align-top justify-left py1 px10" style="min-height: 300px;">
      <ContentDoc />
    </v-main>
  </v-layout>
</template>
