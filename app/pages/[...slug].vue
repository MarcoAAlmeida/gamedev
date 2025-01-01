<script setup lang="ts">
</script>

<template>
  <v-layout class="">
    <CustomNavigationDrawer
        title="Vuetify Notebook"
        color="green"
        to="/examples"
    />

    <v-main class="d-flex align-top justify-left">
      <ContentDoc class="ma-2" v-slot="{ doc }">

        <v-card
            class="mx-auto w-100"
            :subtitle="doc.description"
        >
          <template v-slot:prepend>
            <nuxt-link :href="doc.url" target="_blank">
              <icon :name="doc.icon" size="2em" class="ma-2" />
            </nuxt-link>
          </template>
          <template v-slot:title>
            <span class="font-weight-black">{{ doc.title }}</span>
          </template>
          <template v-slot:subtitle>
            <span class="">{{ doc.description }}</span>
          </template>

          <v-card-text>
            <ContentRenderer class="mx-2" :value="doc"/>
          </v-card-text>
        </v-card>
      </ContentDoc>
    </v-main>
  </v-layout>
</template>

<style lang="css">
</style>
