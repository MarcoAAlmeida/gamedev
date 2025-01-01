<script setup lang="ts">
</script>

<template>
  <v-layout class="rounded rounded-md">
    <CustomNavigationDrawer
      title="Vuetify Notebook"
      color="green"
      to="/examples"
    />

    <v-main class="d-flex align-top justify-left">
      <v-sheet
        class="d-flex flex-wrap mx-auto px-4"
        elevation="2"
        width="100%"
      >
        <ContentDoc class="ma-2" />
      </v-sheet>
    </v-main>
  </v-layout>
</template>

<style lang="css">
</style>
