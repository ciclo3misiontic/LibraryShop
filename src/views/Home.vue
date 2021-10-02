<template>
  <v-app>
    <Carousel />
    <Footer /> 
  </v-app>
</template>

<script>
import Carousel from '../components/Carousel.vue'
import Footer from '../components/Footer.vue'

 
  export default {
    name: 'Home',

    components: {
        Carousel,
        Footer,
        
    },
  }
</script>

