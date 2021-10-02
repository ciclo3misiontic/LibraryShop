<template>
  <v-app>
    <Formulario />
  </v-app>
</template>

<script>
import Formulario from '../components/Formulario.vue'


  export default {
    name: 'Profile',

    components: {
        Formulario,
    }
  }
</script>