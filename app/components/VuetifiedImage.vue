<script setup lang="ts">
interface CustomVuetifiedImageProps {
  src?: string
}

const {
  src = 'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
} = defineProps<CustomVuetifiedImageProps>()
</script>

<template>
  <v-img
    :width="300"
    aspect-ratio="16/9"
    cover
    :src="src"
  />
</template>
