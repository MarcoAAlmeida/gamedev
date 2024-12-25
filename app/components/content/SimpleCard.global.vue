<script setup lang="ts">
interface Props {
  icon?: string
  title?: string
  description?: string
  url?: string
}

const {
  icon = 'i-streamline-emojis:crocodile',
  title = 'some title',
  description = 'some description',
  url = 'http://localhost:3000' } = defineProps<Props>()

const openInNewTab = (url: string) => {
  if (!url) return
  const newTab = window.open(url, '_blank')
  if (newTab) {
    newTab.focus()
  }
}
</script>

<template>
  <v-sheet
    class="ma-4 pa-2 text-center mx-auto"
    elevation="2"
    max-width="600"
    rounded="lg"
    width="100%"
  >
    <Icon
      :name="icon"
      size="6em"
    />

    <h2 class="text-h6 mb-4">
      {{ title }}
    </h2>

    <p class="mb-2 text-medium-emphasis text-body-1">
      {{ description }}
    </p>

    <v-divider class="mb-2" />

    <div>
      <v-btn
        class="text-none"
        color="primary"
        variant="flat"
        width="90"
        rounded
        @click="openInNewTab(url)"
      >
        go
      </v-btn>
    </div>
  </v-sheet>
</template>
