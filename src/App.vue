<template>
  <v-app>

    <!-- Menu Lateral -->
    <v-navigation-drawer
      app
      v-model="drawer"
    >
     
      

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>
              <router-link
                :to="{ name: item.url }"
                style="text-decoration: none; color: inherit;"
              >
                {{ item.title }}
                </router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Menu Aplicación -->
    <v-app-bar
        app
        color="light-blue darken-3"
        dense
        dark
      >
        <!-- Icono Menu Lateral -->
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Library Shop</v-toolbar-title>

        <v-spacer></v-spacer>

        <!-- Opciones Lateral derecho Menu Aplicación -->
        <v-menu
          left
          bottom
        >
         

          <v-list>
            <v-list-item
              v-for="n in 5"
              :key="n"
              @click="() => {}"
            >
              <v-list-item-title>Option {{ n }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        
    </v-app-bar>>

    <!-- Sizes your content based upon application components -->
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>

        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>
    
  </v-app>
  
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    drawer: true,
    items: [
          { title: 'Home', url: 'Home', icon: 'mdi-home-city' },
          { title: 'Profile', url: 'Profile', icon: 'mdi-account' },
          { title: 'Books', url: 'Books', icon: 'mdi-bookshelf' },
          { title: 'News', url: 'News', icon: 'mdi-newspaper' },
          { title: 'Team', url: 'Team', icon: 'mdi-account-group' },
        ],
  }),
};
</script>