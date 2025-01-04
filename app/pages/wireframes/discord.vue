<script setup lang="ts">
const { reshuffle } = useGagariumStore()
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
      color="orange"
      rail
    >
      <nuxt-link to="/wireframes">
        <v-avatar color="info" class="ma-2">
          <Icon name="unjs:changelogen" size="4em" />
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

    <v-app-bar
      class="px-3"
      color="purple-darken-3"
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
      <gaga-ifx-card />
    </v-main>

    <v-navigation-drawer location="right" width="250">
      <v-sheet
        class="border-xl pa-1"
        color="orange"
        height="128"
        width="100%"
      >
        <p>on mobile, navigation drawers are almost secret</p>
        <p>only show up upon swipe</p>
      </v-sheet>

      <nuxt-img src="/img/a8efef27-77bf-46a8-ba02-f785dfde6e01.jpg" class="ma-2" width="150" />
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
