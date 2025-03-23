<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('docs').path(route.path).first()
})
</script>

<template>
  <v-layout class="">
    <CustomNavigationDrawer
      title="gamedev"
      color="green-darken-3"
      to="/"
    />

    <v-main class="d-flex align-top justify-left">
      <v-card
        class="mx-auto w-100"
      >
        <v-card-text>
          <v-img :src="page?.meta.cover" height="18em" />
          <ContentRenderer v-if="page" :value="page" />
        </v-card-text>
      </v-card>
    </v-main>
  </v-layout>
</template>

<style lang="css">
</style>
