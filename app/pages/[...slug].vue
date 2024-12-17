<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar title="Notebook" />

    <v-navigation-drawer>
      <v-list>
        <v-list-item title="testing basic layout">
          <v-icon
            color="red-darken-2"
            icon="mdi-account-circle"
            size="large"
          />
          <v-icon
            color="green-darken-2"
            icon="mdi-home"
            size="large"
          />
          <v-icon
            color="blue-darken-2"
            icon="mdi-message-text"
            size="large"
          />
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="d-flex align-top justify-left" style="min-height: 300px;">
      <ContentDoc />
    </v-main>
  </v-layout>
</template>
