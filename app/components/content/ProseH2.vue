<template>
  <h2 :id="props.id">
    <slot />
  </h2>
</template>

<script setup lang="ts">
const props = defineProps<{ id?: string }>()
</script>
