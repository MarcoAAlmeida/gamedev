<script setup lang="ts">
const {reshuffle} = useGagariumStore()
const hand = reshuffle()

const navigationStore = useNavigationStore()
const {wireframesMenuItems} = storeToRefs(navigationStore)
</script>

<template>
  <v-list density="compact">
    <v-list-item
        v-for="(item, i) in wireframesMenuItems"
        :key="i"
        :value="item"
        :to="item.props?.to"
        :link="item.props?.link"
        color="primary"
    >
      <template v-slot:prepend>
        <v-avatar size="x-large">
          <nuxt-img
              preload
              :src="hand[i]"
              sizes="64px"/>
        </v-avatar>
      </template>

      <v-list-item-title v-text="item.title"></v-list-item-title>
    </v-list-item>
  </v-list>
</template>

<style>
</style>
