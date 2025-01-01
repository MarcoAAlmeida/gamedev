<script setup lang="ts">

interface Props {
  title?: string
  to?: string
  color?: string
  route?: string
}

const navigationStore = useNavigationStore()
const { currentRouteMenuItems } = storeToRefs(navigationStore)

const {
  title = 'some title',
  to = '/',
  color = 'pink',
} = defineProps<Props>()

const drawer = ref(false)

const resetDrawer = () => {
  drawer.value = !drawer.value
}

onMounted(() => {
  drawer.value = false
})

const theme = useTheme()

const toggleTheme = () => {
  theme.global.name.value = theme.global.name.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <v-app-bar app :elevation="0" :color="color">
    <template #prepend>
      <v-app-bar-nav-icon @click.stop="resetDrawer" />
    </template>

    <v-app-bar-title :to="to" link>
      {{ title }}
    </v-app-bar-title>
    <v-spacer />

    <v-btn icon="mdi-magnify" />
  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
    temporary
  >
    <v-list :items="currentRouteMenuItems" />

    <template #prepend>
      <v-list>
        <v-list-item
          prepend-avatar="https://media.licdn.com/dms/image/v2/C4E03AQGdwW8RIsYb4g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1516657994044?e=1740614400&v=beta&t=wJosF5afL6B05xpD_Bc2K3ZjNkOSAa49nOiMYi6Nv6M"
          subtitle="marcoalmeida.dev.br"
          title="Marco Almeida"
          href="https://www.linkedin.com/in/marcoaasilva/"
          target="_blank"
        >
          <template #append>
            <icon name="i-logos:linkedin-icon" size=".2em" />
          </template>
        </v-list-item>
      </v-list>

      <v-divider />
    </template>

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
</template>

<style>
</style>
