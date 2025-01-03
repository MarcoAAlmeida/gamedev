<script setup>
const navigationStore = useNavigationStore()
const {wireframesMenuItems} = storeToRefs(navigationStore)

const gagariumStore = useGagariumStore()
const { gagarium } = storeToRefs(gagariumStore)

const hand = gagarium.value
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

</script>

<template>
  <v-app id="inspire">
    <custom-navigation-drawer
        title="Fabulous Wireframes"
        color="pink-lighten-2"
    />

    <v-main>
      <v-row class="w-100" no-gutters>
        <v-col
            cols="6"
        >
          <v-list lines="one">
            <v-list :items="wireframesMenuItems"/>
          </v-list>
        </v-col>
        <v-col cols="6">
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
        </v-col>
        <v-col
            cols="12"
        >
          <nuxt-img
            preload
            v-for="src in hand"
            :key="src"
            :src="src"
            sizes="100vw sm:50vw md:400px"/>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>
