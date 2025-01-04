<script setup lang="ts">
interface Props {
  src?: string
  title?: string
}

const {
  title = 'some title',
  src = '/screenshots/20250104154517.png',
} = defineProps<Props>()


const openNewTab = (imgUrl) => {
  window.open(imgUrl, '_blank');
}

</script>

<template>
  <v-card
      class="ma-4 w-33 h-25"
      elevation="1"
      rounded="0"
  >
    <v-layout>
      <v-app-bar color="grey-lighten-3" elevation="1">
        <p class="mx-5 text-grey"> {{ title }}</p>
        <v-spacer></v-spacer>

        <v-btn v-tooltip="'open in new tab'" class="ma-2 bg-grey-lighten-2" icon size="x-small"
               @click="openNewTab(src)">
          <Icon name="mdi-open-in-new" size="1.5em"/>
        </v-btn>
      </v-app-bar>

      <v-main>
        <v-img :src="src"/>
      </v-main>
    </v-layout>
  </v-card>

</template>

<style>
</style>
