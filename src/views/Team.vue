<template>
  <v-app>
    <Article />
    
    <LogoMintic />

  </v-app>
</template>

<script>
import Article from '../components/Article.vue'
import LogoMintic from '../components/LogoMintic.vue'

  export default {
    name: 'Team',

    components: {
        Article,
        LogoMintic,
    },
  }
</script>