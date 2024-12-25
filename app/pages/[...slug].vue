<script setup lang="ts">
import { useTheme } from 'vuetify'

const theme = useTheme()

const toggleTheme = () => {
  theme.global.name.value = theme.global.name.value === 'light' ? 'dark' : 'light'
}

const toggleLabel = computed(() => theme.global.name.value === 'light' ? 'dark' : 'light')

const drawer = ref(false)

const items = ref([
  {
    title: 'Home',
    to: '/',
  },
  {
    title: 'Changelog',
    to: 'changelog',
  },
  {
    title: 'Resources',
    to: 'resources',
  },
  {
    title: 'Cloudfare',
    to: 'cloudfare',
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
        <v-app-bar-nav-icon @click.stop="resetDrawer" />
      </template>

      <v-app-bar-title>
        Notebook
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
        <v-list-item @click="toggleTheme">
          <v-chip
            class="ma-2"
            label
          >
            <Icon name="ic:sharp-dark-mode" class="ma-1" />
            <span class="ma-1">{{ toggleLabel }}</span>
          </v-chip>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="d-flex align-top justify-left">
      <ContentDoc class="ma-8" />
    </v-main>
  </v-layout>
</template>

<style lang="css">
table td, table th {
    padding: 10px; /* Adjust as needed */
}
</style>
