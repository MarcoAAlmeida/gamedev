<script setup>
const articleStore = useArticleStore()
const { featured } = storeToRefs(articleStore)

const links = ref([
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/' },
])

onMounted(() => {
  articleStore.reloadFeatured()
})
</script>

<template>
  <v-app>
    <CustomNavigationDrawer
      title="gameDev"
      color="green-darken-3"
    />

    <v-main fluid>
      <v-container
        class="mx-auto"
        max-width="500"
      >
        <v-row dense>
          <v-col
            v-for="card in featured"
            :key="card.title"
            :cols="card.flex"
          >
            <v-card
              :to="card.to"
              link
            >
              <v-card-title>
                {{ card.title }}
              </v-card-title>
              <v-img
                :src="card.meta.cover"
                class="align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
                cover
              />

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
          {{ link.name }}
        </v-btn>
        <v-col class="text-center mt-4" cols="12">
          {{ new Date().getFullYear() }} — <strong>GameDev</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>
