<template>
  <v-container>
    <v-layout>
      <v-system-bar color="pink-darken-2">
        <v-spacer />

        <v-icon>mdi-window-minimize</v-icon>

        <v-icon>mdi-window-maximize</v-icon>

        <v-icon>mdi-close</v-icon>
      </v-system-bar>

      <v-app-bar color="pink">
        <v-app-bar-nav-icon to="/" link />

        <v-toolbar-title>My Pipe Dreams</v-toolbar-title>

        <v-spacer />

        <v-btn icon="mdi-magnify" />
      </v-app-bar>

      <v-main>
        <v-container>
          <v-row dense>
            <v-col cols="12">
              <v-card color="#385F73">
                <v-card-title class="text-h5">
                  Unlimited ideas coming to the backlog now
                </v-card-title>

                <v-card-subtitle>
                  Amuse yourself with some vague pipe dreams
                </v-card-subtitle>

                <v-card-actions>
                  <v-btn
                    text="Changelog"
                    variant="text"
                    to="/meta/changelog"
                    link
                  />
                  <v-btn
                    text="Backlog"
                    variant="text"
                    to="/meta/backlog"
                    link
                  />
                </v-card-actions>
              </v-card>
            </v-col>

            <v-col cols="12">
              <v-card color="#1F7087" to="/wireframes" link>
                <div class="d-flex flex-no-wrap justify-space-between">
                  <div>
                    <v-card-title class="text-h5">
                      Supermodel Wireframes
                    </v-card-title>

                    <v-tooltip location="top" text="lipstick">
                      <template #activator="{ props }">
                        <v-card-subtitle v-bind="props">
                          Put your tooltip on!
                        </v-card-subtitle>
                      </template>
                    </v-tooltip>

                    <v-card-actions>
                      <v-btn
                        class="ms-2"
                        size="small"
                        text="WIREFRAMES!"
                      />
                    </v-card-actions>
                  </div>

                  <v-avatar
                    class="ma-3"
                    rounded="0"
                    size="125"
                  >
                    <v-img src="https://images-cdn.ubuy.qa/655d9c5bd5dda268411b1c0e-art-pop-audio-cd-audiobook-november.jpg" />
                  </v-avatar>
                </div>
              </v-card>
            </v-col>

            <v-col cols="12">
              <v-card color="#952175">
                <div class="d-flex flex-no-wrap justify-space-between">
                  <div>
                    <v-card-title class="text-h5">
                      Let's dance about web development
                    </v-card-title>

                    <v-card-subtitle>hint: this is not about a pipe</v-card-subtitle>

                    <v-card-actions>
                      <v-btn
                        class="ms-2"
                        icon="mdi-play"
                        variant="text"
                        to="/web"
                      />
                    </v-card-actions>
                  </div>

                  <v-avatar
                    class="ma-3"
                    rounded="0"
                    size="125"
                  >
                    <v-img src="https://i.etsystatic.com/12529226/r/il/a9e390/1954250070/il_fullxfull.1954250070_rozm.jpg" />
                  </v-avatar>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    links: [
      'Home',
      'About Us',
      'Team',
      'Services',
      'Blog',
      'Contact Us',
    ],
  }),
}
</script>
