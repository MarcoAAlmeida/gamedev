<script setup lang="ts">
interface Props {
  quote?: string
  url?: string
  author?: string
}

const {
  quote = 'The world has enough for everyone\'s need, but not enough for everyone\'s greed.',
  url = 'https://www.goodreads.com/quotes/427443-the-world-has-enough-for-everyone-s-need-but-not-enough',
  author = 'Mahatma Gandhi',
} = defineProps<Props>()

const openNewTab = (imgUrl) => {
  window.open(imgUrl, '_blank')
}
</script>

<template>
  <v-card
    class="ma-4 w-95 w-md-75 h-25"
    elevation="1"
    rounded="0"
  >
    <v-layout>
      <v-app-bar color="grey-lighten-3" elevation="1">
        <v-spacer />

        <v-btn
          v-tooltip="'open source in tab'"
          class="ma-2 bg-grey-lighten-2"
          icon
          size="x-small"
          @click="openNewTab(url)"
        >
          <Icon name="mdi-open-in-new" size="1.5em" />
        </v-btn>
      </v-app-bar>

      <v-main>
        <v-container>
          <v-row>
            <blockquote class="mx-2">
              {{ quote }}
            </blockquote>
          </v-row>
          <v-row class="justify-end">
            <p class="text-grey-darken-1 mx-2">
              <span class="text-grey-lighten-1">source: </span>{{ author }}
            </p>
          </v-row>
        </v-container>
      </v-main>
    </v-layout>
  </v-card>
</template>

<style>
</style>
