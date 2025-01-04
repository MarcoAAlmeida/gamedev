<script setup lang="ts">
const {reshuffle} = useGagariumStore()
const hand = reshuffle()

const angle = ref(0)

const tintHue = ref('#DD0000')

const filter = ref({ name: 'none', hint:'no filter applied', modifier: '' })

const availableFilters = ref([
  { name: 'none', hint:'no filter applied', modifier: '' },
  { name: 'blur', hint:'some blur', modifier: 'blur' },
  { name: 'grayscale', hint:'some blur', modifier: 'grayscale' },
  { name: 'tint', hint:'pick your tint', modifier: 'tint' },
])

const presetFilters = computed(() => {
  switch (filter.value.name) {
    default:
    case 'none':
      return { rotate: angle.value }
    case 'blur':
      return { blur: 7, rotate: angle.value }
    case 'grayscale':
      return { grayscale: 10, rotate: angle.value }
    case 'tint':
      return { tint: tintHue.value, rotate: angle.value }
  }

})
</script>

<template>
  <v-sheet
      border="sm"
      class="text-body-2 mx-0"
  >
    <v-container fluid>
      <v-row>
        <v-col md="3" xs="12">
          <v-select
              v-model="filter"
              :hint="`${filter.hint}`"
              :items="availableFilters"
              item-title="name"
              item-value="modifier"
              label="Select"
              persistent-hint
              return-object
              single-line
          ></v-select>

          <v-slider
              v-model="angle"
              :max="360"
              :step="10"
              class="ma-4"
              label="angle"
              hide-details
          >
            <template v-slot:append>
              <v-text-field
                  v-model="angle"
                  density="compact"
                  style="width: 80px"
                  type="number"
                  variant="outlined"
                  hide-details
              ></v-text-field>
            </template>
          </v-slider>

          <v-color-picker
              v-model="tintHue"
              v-show="filter.name==='tint'"
              show-swatches></v-color-picker>

          <nuxt-link to="web/nuxt/vuetify" target="_blank">
            <Icon class="ma-1" name="i-devicon:vuetify" size=".5em"/>
          </nuxt-link>
        </v-col>

        <v-col md="9" xs="12">
          <p class="mb-4">
            This is an example of how to use <a href="https://image.nuxt.com/providers/ipx">IPX</a> for rendering image effects
          </p>

          <ul class="ps-4 mb-6">
            <li>
              <a href="https://github.com/unjs/ipx/#modifiers" target="_blank">unjs modifiers</a>
            </li>
            <li>
              <a href="https://sharp.pixelplumbing.com/api-resize#resize" target="_blank">api-resize</a>
            </li>
            <li>
              <a href="https://sharp.pixelplumbing.com/api-colour#greyscale" target="_blank">Grayscale</a>
            </li>
          </ul>

          <nuxt-img
              preload
              class="ma-2"
              v-for="src in hand"
              :key="src"
              :src="src"
              sizes="5em sm:10vw"
              :modifiers="presetFilters"/>

          <v-btn
              class="text-none"
              href="https://image.nuxt.com/usage/use-image"
              target="_blank"
              color="info"
              rounded="0"
              variant="flat"
              block
          >
            <span class="hidden-sm-and-down">
              Explore useImage() and generate a quick image on the fly
            </span>

            <span class="hidden-md-and-up">
              Explore useImage()
            </span>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<style>
</style>
