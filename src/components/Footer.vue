<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      width="100%"
      class="indigo lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        
        Information: Library Shop V1.0. Repository github / Contact. Jose Cabrera / Phone. 3006131655

      </v-card-text>
      <v-btn
              icon
              color="white"
              href =  'https://github.com/ciclo3misiontic/LibraryShop' target="_blank"
            >

              <v-icon>mdi-github</v-icon>
      </v-btn>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>

