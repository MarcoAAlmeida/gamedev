<template>
  <v-app id="inspire">
    <custom-navigation-drawer
      title="Fabulous Wireframes"
      color="pink-lighten-2"
    />

    <v-main>
      <v-list lines="one">
        <v-list :items="items" />
      </v-list>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'

const items = ref([
  {
    title: 'baseline',
    value: 1,
    props: {
      prependIcon: 'mdi-page-layout-body',
      to: '/wireframes/baseline',
    },
  },
  {
    title: 'constrained',
    value: 1,
    props: {
      prependIcon: 'mdi-page-layout-body',
      to: '/wireframes/constrained',
    },
  },
  {
    title: 'discord',
    value: 1,
    props: {
      prependIcon: 'mdi-page-layout-body',
      to: '/wireframes/discord',
    },
  },
  {
    title: 'extended-toolbar',
    value: 1,
    props: {
      prependIcon: 'mdi-page-layout-body',
      to: '/wireframes/extended-toolbar',
    },
  },
  {
    title: 'side-navigation',
    value: 1,
    props: {
      prependIcon: 'mdi-page-layout-body',
      to: '/wireframes/side-navigation',
    },
  },
  {
    title: 'steam',
    value: 1,
    props: {
      prependIcon: 'mdi-page-layout-body',
      to: '/wireframes/steam',
    },
  },
  {
    title: 'system-bar',
    value: 1,
    props: {
      prependIcon: 'mdi-page-layout-body',
      to: '/wireframes/system-bar',
    },
  },
  {
    title: 'three-column',
    value: 1,
    props: {
      prependIcon: 'mdi-page-layout-body',
      to: '/wireframes/three-column',
    },
  },
])
</script>
