<template>
  <v-container>
    <v-row class="flex-child text-subtitle-2">
      <v-col cols="12">
        <v-sheet
          class="d-flex"
          color="yellow-lighten-3"
          height="150"
        >
          <sheet-footer>
            <v-btn
              icon="mdi-flask"
              class="ma-1"
              to="/meta/changelog"
            />
            <v-btn
              icon="mdi-code-braces"
              class="ma-1"
              to="/examples/postit_sheets"
              target="_blank"
            />
            <v-btn
              icon="mdi-bulletin-board"
              class="ma-1"
              to="/wireframes"
              target="_blank"
            />
          </sheet-footer>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const SheetFooter = defineComponent({
  setup(_, { slots }) {
    return () => h('v-sheet', {
      class: 'ma-auto px-4',
      color: 'rgba(0, 0, 0, .36)',
      height: 50,
    }, slots.default?.())
  },
})
</script>
