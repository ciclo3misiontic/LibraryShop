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
            textCard: "Like the children who followed the Pied Piper of Hamelin, humanity walked with joyous indifference towards disaster, convinced that its excesses and advances were proof of evolution and development, until the pandemic emerged that turned the entire world upside down. Overnight everything slowed down or stopped, time was distorted, and many had the feeling of being trapped in a nightmare loop. Mario Mendoza lucidly anticipated this disaster in several of his novels such as Lady Massacre, Diario del fin del mundo, Akelarre and Crononautas and in the stories of The Book of Revelations. Now, in the Shipwreck Log, he witnesses from his confinement the strange days that we live and invites us to accept this disaster coldly, without hope, but also without drama, and take some notes while we sink.",
            img: require('@/assets/Bitacora_del_naufragio.jpg'),
        },
        {
            titleCard: "Our main event for 2021",
            subtitleCard: "Library Shop",
            textCard: "For Idartes, the Festival of Books for Children and Young People is one of the key projects for the development of reading as a fundamental cultural right of Bogota citizens and is also a generator of new exhibition spaces for books aimed at children and young people from the bookstores and libraries. For more information about the Festival of Books for Children and Young People, check here the events and all the programming.",
            img: require('@/assets/main_event.jpg'),
        },
        {
            titleCard: "Register!! and win great prizes",
            subtitleCard: "Library Shop",
            textCard: "Take part in our SWEEPSTAKES and win fabulous prizes! All you have to do is fill in your data within the form in the Profile tab.",
            img: require('@/assets/gift.jpg'),
        },
        {
            titleCard: "Library closed for Holiday",
            subtitleCard: "Library Shop",
            textCard: "We close the store for deliveries on December 24th. We take a break to recharge our batteries !! We return on January 3, 2022. ",
            img: require('@/assets/closed.jpg'),
        }
    ]
    })
  }
</script>