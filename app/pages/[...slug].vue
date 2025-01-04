<script setup lang="ts">
</script>

<template>
  <v-layout class="">
    <CustomNavigationDrawer
      title="Vuebook"
      color="green"
      to="/examples"
    />

    <v-main class="d-flex align-top justify-left">
      <ContentDoc v-slot="{ doc }" class="ma-2">
        <v-card
          class="mx-auto w-100"
          :subtitle="doc.description"
        >
          <template #prepend>
            <nuxt-link :href="doc.url" target="_blank">
              <icon :name="doc.icon" size="2em" class="ma-2" />
            </nuxt-link>
          </template>
          <template #title>
            <span class="font-weight-black">{{ doc.title }}</span>
          </template>
          <template #subtitle>
            <span class="">{{ doc.description }}</span>
          </template>

          <v-card-text>
            <ContentRenderer class="mx-2" :value="doc" />
          </v-card-text>
        </v-card>
      </ContentDoc>
    </v-main>
  </v-layout>
</template>

<style lang="css">
</style>
