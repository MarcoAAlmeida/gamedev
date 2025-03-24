<script setup lang="ts">
interface CustomYouTubeLiteProps {
  videoId?: string
}

const {
  videoId = 'sHM7zIX5Lzo',
} = defineProps<CustomYouTubeLiteProps>()
</script>

<template>
  <lite-youtube class="ma-4" :videoid="videoId" />
</template>
