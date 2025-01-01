<script setup>
import { useListPages } from '@/composables/useListPages'

const examplePages = useListPages('examples')

const links = ref([
  'Home',
  'About Us',
  'Team',
  'Services',
  'Blog',
  'Contact Us',
])

const examplesGaga = computed(() => examplePages.map(item => (
  { ...item,
    flex: 12,
    title: item.name,
    to: item.path,
    src: 'https://ladygaganow.net/uploads/monthly_2021_09/1-9-09_Meeno_016.jpg.a5c56653769a34b95655559678a49cac.jpg' })))
</script>

<template>
  <v-app>
    <CustomNavigationDrawer
      title="Vuetify Notebook"
      color="orange-darken-3"
    />

    <v-main fluid>
      <v-container
        class="mx-auto"
        max-width="500"
      >
        <v-row dense>
          <v-col
            v-for="card in examplesGaga"
            :key="card.title"
            :cols="card.flex"
          >
            <v-card
              :to="card.to"
              link
            >
              <v-img
                :src="card.src"
                class="align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
                cover
              >
                <v-card-title class="text-white" v-text="card.title" />
              </v-img>

              <v-card-actions>
                <v-spacer />

                <v-btn
                  color="medium-emphasis"
                  icon="mdi-heart"
                  size="small"
                />

                <v-btn
                  color="medium-emphasis"
                  icon="mdi-bookmark"
                  size="small"
                />

                <v-btn
                  color="medium-emphasis"
                  icon="mdi-share-variant"
                  size="small"
                />
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer class="bg-grey-lighten-1">
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in links"
          :key="link"
          class="mx-2"
          color="white"
          rounded="xl"
          variant="text"
        >
          {{ link }}
        </v-btn>
        <v-col class="text-center mt-4" cols="12">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>
