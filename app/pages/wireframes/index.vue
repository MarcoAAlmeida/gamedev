<script setup>
const navigationStore = useNavigationStore()
const {wireframesMenuItems} = storeToRefs(navigationStore)

const {reshuffle} = useGagariumStore()
const hand = reshuffle()

</script>

<template>
  <v-app id="inspire">
    <custom-navigation-drawer
        title="Fabulous Wireframes"
        color="pink-lighten-2"
    />

    <v-main>
      <v-row class="w-100" no-gutters>
        <v-col cols="12">
          <gaga-menu-list/>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>
