<script setup>
import { useListPages } from '@/composables/useListPages'

const examplePages = useListPages('examples')

const icons = ref([
  'mdi-facebook',
  'mdi-twitter',
  'mdi-linkedin',
  'mdi-instagram',
])

const gagarium = ref([
  'https://ladygaganow.net/uploads/monthly_2021_09/1-9-09_Meeno_016.jpg.a5c56653769a34b95655559678a49cac.jpg',
  'https://i.pinimg.com/564x/ef/07/c9/ef07c973cdba91a55fa7ed11b72c2a3f.jpg',
  'https://nexus.radio/wp-content/uploads/2021/11/telephone-lady-gaga.jpg',
])

const examplesGaga = computed(() => examplePages.map((item, i) => (
  { ...item,
    flex: 12,
    title: item.name,
    to: item.path,
    src: gagarium.value[i % gagarium.value.length] })))
</script>

<template>
  <v-app>
    <CustomNavigationDrawer
      title="Gagagame"
      color="pink-darken-4"
      to="/examples"
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

    <v-footer
      class="bg-indigo-lighten-1 text-center d-flex flex-column"
    >
      <div>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          :icon="icon"
          class="mx-4"
          variant="text"
        />
      </div>

      <div class="pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </div>

      <v-divider />

      <div>
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </div>
    </v-footer>
  </v-app>
</template>
