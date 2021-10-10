<template>
  <v-app>
    <SignIn />

    <TableBooks />
  </v-app>
</template>

<script>
import SignIn from '../components/SignIn.vue'
import TableBooks from '../components/TableBooks.vue'

  export default {
    name: 'Books',

    components: {
        SignIn,
        TableBooks,
        
    },
  }
        
</script>