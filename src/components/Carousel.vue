<template>
  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>
<script>



  export default {
    data () {
      return {
        items: [
          {
            src: require('@/assets/Library_backgorund.jpg'),
          },
          {
            src: require('@/assets/Bitacora_del_naufragio.jpg'),
          },
          {
            src: require('@/assets/gift.jpg'),
          },
          {
            src: require('@/assets/closed.jpg'),
          },
        ],
      }
    },
  }
</script>