<script setup>
const navigationStore = useNavigationStore()
const {wireframesMenuItems} = storeToRefs(navigationStore)

const gagariumStore = useGagariumStore()
const {gagarium} = storeToRefs(gagariumStore)


</script>

<template>
  <v-app id="inspire">
    <custom-navigation-drawer
        title="Fabulous Wireframes"
        color="pink-lighten-2"
    />

    <v-main>
      <v-row class="w-100" no-gutters>
        <v-col
            cols="2"
            sm="2"
        >
          <v-list lines="one">
            <v-list :items="wireframesMenuItems"/>
          </v-list>
        </v-col>
        <v-col
            cols="12"
            sm="8"
        >
          <nuxt-img
            preload
            v-for="src in gagarium"
            :key="src"
            :src="src"
            sizes="100vw sm:50vw md:400px"/>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>
