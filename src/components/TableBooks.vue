<template>
    <v-container>
        <v-card
        elevation="5"
        dark
        >    

            <v-card-title>
                <v-row>
                    <v-col cols="4">
                        <v-text-field label="Book Title"></v-text-field>
                    </v-col>
                    <v-col cols="4">
                        <v-text-field label="Book Author"></v-text-field>
                    </v-col>
                    <v-col cols="4">
                        <v-btn
                        rounded
                        color="primary"
                        >
                        Find</v-btn>
                    </v-col>
                </v-row>
            </v-card-title> 
            <v-row>
                <v-col cols="6">
                    <v-data-table
                        dense
                        :headers="headers"
                        :items="IdBook"
                        item-key="name"
                        class="elevation-2"
                    ></v-data-table>
                </v-col>
                <v-col cols="6">
                    <v-img 
                        src="@/assets/serach_book_2.jpg"
                        height="500"
                        width="100%"
                    ></v-img>
                </v-col>
            </v-row>
            <p></p>
            <v-btn
            color="primary"
            block
            >
                Request Book
            </v-btn>
            
        </v-card>
    </v-container>
</template>

<script>
  export default {
    data: () => ({
      IdBook: [
        {
          id: 213546,
          title: 'juego de tronos',
          author: 'George R. R. Martin',
          year: 1996,
          quantity: 4,
        },
        {
          id: 654315,
          title: 'codigo da vinci',
          author: 'Dan Brown',
          year: 2003,
          quantity: 2,
        },
      ],
      headers: [
        {
          text: 'IdBook',
          align: 'start',
          sortable: false,
          value: 'id',
        },
        { text: 'BookTitle', value: 'title' },
        { text: 'BookAuthor', value: 'author' },
        { text: 'Year', value: 'year' },
        { text: 'Quantity', value: 'quantity' },
      ],
    }),
  }
</script>