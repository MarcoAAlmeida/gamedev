<script setup>
const navigationStore = useNavigationStore()
const {wireframesMenuItems} = storeToRefs(navigationStore)

const {reshuffle} = useGagariumStore()
const hand = reshuffle()

</script>

<template>
  <v-app id="inspire">
    <custom-navigation-drawer
        title="Fabulous Wireframes"
        color="pink-lighten-2"
    />

    <v-main>
      <v-row class="w-100" no-gutters>
        <v-col cols="12">
          <gaga-list/>
        </v-col>
        <v-col
            class="pa-2"
        >
          <v-sheet
              border="sm"
              class="text-body-2 mx-0"
          >
            <v-container fluid>
              <v-row>
                <v-col md="3" xs="12">
                  <v-img height="88" src="https://cdn.vuetifyjs.com/docs/images/graphics/img-placeholder.png"
                         cover></v-img>
                </v-col>

                <v-col md="9" xs="12">
                  <nuxt-img
                      preload
                      v-for="src in hand"
                      :key="src"
                      :src="src"
                      sizes="100vw sm:50vw md:400px"/>
                  <p class="mb-4">
                    This is part of our <a href="#">Most Comprehenseive Guide to Referral Programs</a> > <a href="#">Do
                    I Need A Referral Program?</a> section. You may enjoy other related articles:
                  </p>

                  <ul class="ps-4 mb-6">
                    <li>
                      <a href="#">5 Ways to See if Referral Programs Can Work for You</a>
                    </li>
                    <li>
                      <a href="#">The 6 Key Benefits of Referral Marketing</a>
                    </li>
                    <li>
                      <a href="#">Leading Indicators of Referral Program Success</a>
                    </li>
                    <li>
                      <a href="#">Debunking the Top 5 Worst Referral Program Myths</a>
                    </li>
                  </ul>

                  <v-btn
                      class="text-none"
                      color="info"
                      rounded="0"
                      variant="flat"
                      block
                  >
            <span class="hidden-sm-and-down">
              Explore our 38+ Referral Program Resources
            </span>

                    <span class="hidden-md-and-up">
              Explore Referral Resources
            </span>
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-sheet>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>
