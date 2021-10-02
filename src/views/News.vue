<template>
  <v-app id="inspire">
        <div
        class="d-flex flex-wrap justify-space-around mb-6"
        :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
        flat
        tile
        >
            <div class="pa-2" v-for="item, i in arrayCard" :key="i">
                    <MyCard :infoCard=arrayCard[i] />
            </div>
        </div>
  </v-app>
</template>

<script>
  import MyCard from '@/components/MyCard'

  export default {
    name: 'InfoCard',

    components: {
      MyCard,
    },

    data: () => ({
        arrayCard: [
        {
            titleCard: "New Books arrived",
            subtitleCard: "Library Shop",
            textCard: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora quas voluptate magni repellat eligendi! Inventore voluptas voluptates quia voluptatum expedita, ducimus delectus dolore eaque maiores iusto modi eum aut corporis? ",
            img: require('@/assets/Bitacora_del_naufragio.jpg'),
        },
        {
            titleCard: "Our main event for 2021",
            subtitleCard: "Library Shop",
            textCard: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora quas voluptate magni repellat eligendi! Inventore voluptas voluptates quia voluptatum expedita, ducimus delectus dolore eaque maiores iusto modi eum aut corporis? ",
            img: require('@/assets/main_event.jpg'),
        },
        {
            titleCard: "Register!! and win great prizes",
            subtitleCard: "Library Shop",
            textCard: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora quas voluptate magni repellat eligendi! Inventore voluptas voluptates quia voluptatum expedita, ducimus delectus dolore eaque maiores iusto modi eum aut corporis? ",
            img: require('@/assets/gift.jpg'),
        },
        {
            titleCard: "Library closed for Holiday",
            subtitleCard: "Library Shop",
            textCard: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora quas voluptate magni repellat eligendi! Inventore voluptas voluptates quia voluptatum expedita, ducimus delectus dolore eaque maiores iusto modi eum aut corporis? ",
            img: require('@/assets/closed.jpg'),
        }
    ]
    })
  }
</script>