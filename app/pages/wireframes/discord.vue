<script setup lang="ts">
const {reshuffle} = useGagariumStore()
const hand = reshuffle()

</script>

<template>
  <v-app id="inspire">
    <v-system-bar color="pink">
      <v-spacer />

      <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>
    </v-system-bar>

    <v-navigation-drawer
      color="pink-lighten-2"
      rail
    >
      <nuxt-link to="/wireframes">
        <v-avatar color="info" class="ma-2">
          <Icon name="unjs:changelogen" size="4em"/>
        </v-avatar>
      </nuxt-link>

      <v-divider class="mx-3 my-5" />

      <v-avatar
        v-for="n in 10"
        :key="n"
        :image="hand[n % hand.length]"
        class="d-block text-center mx-auto mb-4"
        color="grey-lighten-1"
        size="28"
      />
    </v-navigation-drawer>

    <v-navigation-drawer width="244">
      <v-sheet
        class="border-xl pa-1"
        color="yellow"
        height="128"
        width="100%"
      >
        Except for left-most, all these sidebars are not displayed in mobile
      </v-sheet>

      <nuxt-img src="/img/a8efef27-77bf-46a8-ba02-f785dfde6e01.jpg" class="ma-2" width="150"/>
    </v-navigation-drawer>

    <v-app-bar
      class="px-3"
      color="purple-darken-2"
      height="72"
      flat
    >
      <v-spacer />

      <v-responsive max-width="156">
        <v-text-field
          label="yippee ki yay!"
          bg-color="grey-lighten-3"
          density="compact"
          rounded="pill"
          flat
          hide-details
        />
      </v-responsive>
    </v-app-bar>

    <v-main>
      <v-sheet
          border="sm"
          class="text-body-2 mx-0"
      >
        <v-container fluid>
          <v-row>
            <v-col md="3" xs="12">
              <v-select
                  label="filter"
                  :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
              ></v-select>
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
                  sizes="5em sm:10vw"/>

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

    <v-navigation-drawer location="right">
      <gaga-list/>
    </v-navigation-drawer>

    <v-footer
      height="72"
      app
    >
      <v-text-field
        placeholder="type something!"
        bg-color="grey-lighten-2"
        class="overflow-hidden"
        density="compact"
        rounded="pill"
        variant="solo-filled"
        flat
        hide-details
      />
    </v-footer>
  </v-app>
</template>
<script setup lang="ts">
</script>