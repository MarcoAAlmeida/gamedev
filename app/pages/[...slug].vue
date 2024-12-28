<script setup lang="ts">
import { useTheme } from 'vuetify'

const navStore = useNavigationStore()

const { menuItems } = storeToRefs(navStore)

const theme = useTheme()

const toggleTheme = () => {
  theme.global.name.value = theme.global.name.value === 'light' ? 'dark' : 'light'
}

const drawer = ref(false)

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

    <v-navigation-drawer
      v-model="drawer"
      temporary
    >
      <v-list>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :title="item.title"
          :to="item.to"
        />
      </v-list>

      <template #append>
        <div class="pa-2">
          <v-btn-group
            variant="outlined"
            divided
          >
            <v-btn icon="mdi-theme-light-dark" @click="toggleTheme" />
            <v-btn icon="mdi-view-dashboard" href="https://admin.hub.nuxt.com/marco-a-almeida/" target="_blank" />
          </v-btn-group>
        </div>
      </template>
    </v-navigation-drawer>

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
