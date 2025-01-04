<script setup lang="ts">
const { reshuffle } = useGagariumStore()
const hand = reshuffle()

const angle = ref(0)

const tintHue = ref('#DD0000')

const filter = ref({ name: 'none', hint: 'no filter applied', modifier: '' })

const availableFilters = ref([
  { name: 'none', hint: 'no filter applied', modifier: '' },
  { name: 'blur', hint: 'some blur', modifier: 'blur' },
  { name: 'grayscale', hint: 'some blur', modifier: 'grayscale' },
  { name: 'tint', hint: 'pick your tint', modifier: 'tint' },
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
    <v-card
        class="w-100"
        elevation="0"
        rounded="0"
    >
      <v-layout>
        <v-app-bar color="bg-grey-lighten-1" elevation="1">
          <h1 class="mx-2">Gagarium</h1>
          <v-spacer></v-spacer>

          <v-btn class="bg-grey-lighten-3" icon>
            <Icon name="unjs:changelogen" size="1.5em"/>
          </v-btn>

          <v-btn class="bg-grey-lighten-3" icon>
            <Icon name="unjs:magic-regexp" size="1.5em"/>
          </v-btn>
        </v-app-bar>

        <v-main>

          <v-alert
              title="Not working as expected"
              type="error"
          >
            <template v-slot:text>
              <p>in localhost, images are being rotated, but not when I deploy to NuxtHub.</p>
              <v-img max-width="20em" class="ma-2" src="~/assets/images/20250104154517.png" />
              <p>there is a <a class="text-amber" href="https://github.com/nuxt/image/issues/1061" target="_blank">a known issue with IPX and Cloudfare </a></p>
            </template>
          </v-alert>

          <v-sheet
              border="sm"
              class="text-body-2 mx-0"
          >
            <v-container fluid>
              <v-row>
                <v-col cols="12" />

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
                      v-for="src in hand"
                      :key="src"
                      preload
                      class="ma-2"
                      :src="src"
                      sizes="5em sm:10vw"
                      :modifiers="{ rotate: 90 }"
                  />

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

        </v-main>
      </v-layout>
    </v-card>

</template>

<style>
</style>
