<script setup lang="ts">
const drawer = ref(false)

const items = ref([
  {
    title: 'Changelog',
    to: 'changelog',
  },
  {
    title: 'Resources',
    to: 'resources',
  },
  {
    title: 'Stack',
    to: 'stack',
  },
])

const resetDrawer = () => {
  drawer.value = !drawer.value
}

onMounted(() => {
  drawer.value = false
})
</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar :elevation="1">
      <template #prepend>
        <v-app-bar-nav-icon color="black" @click.stop="resetDrawer" />
      </template>

      <v-app-bar-title>
        <nuxt-link class="text-decoration-none text-black" to="/">
          Notebook
        </nuxt-link>
      </v-app-bar-title>
    </v-app-bar>

    <v-navigation-drawer v-model:model-value="drawer">
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :title="item.title"
          :to="item.to"
        />
      </v-list>
    </v-navigation-drawer>

    <v-main class="d-flex align-top justify-left">
      <ContentDoc class="ma-6" />
    </v-main>
  </v-layout>
</template>

<style lang="css">
table td, table th {
    padding: 10px; /* Adjust as needed */
}
</style>
