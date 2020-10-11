<template>
  <v-footer padless>
    <v-card
      flat
      tile
      width="100%"
      class="blue lighten-5 text-center"
    >
      <v-card-text>
        <v-btn icon href="https://github.com/madiyar" target="_blank">
          <v-icon size="24px">
            mdi-github
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text>
        {{ new Date().getFullYear() }} — <a href="https://madiyar.github.io" target="_blank">Madiyar Bolatov</a>
      </v-card-text>
    </v-card>
  </v-footer>
</template>