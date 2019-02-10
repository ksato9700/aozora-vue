<template>
  <v-app baseline>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon />
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="clipped"
      color="#000063"
      dark
      flat
      fixed
      app
    >
      <v-toolbar-side-icon @click="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-toolbar-items>
        <v-btn
          :to="{path: '/latest'}"
          flat
          dark
        >
          <v-icon>new_releases</v-icon>
        </v-btn>
        <v-btn
          :to="{path: '/favorite'}"
          flat
          dark
        >
          <v-icon>star</v-icon>
        </v-btn>
        <v-btn
          :to="{path: '/about'}"
          flat
          dark
        >
          <v-icon>info</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        { icon: 'home', title: 'トップ', to: '/' },
        { icon: 'new_releases', title: '新着', to: '/latest' },
        { icon: 'star', title: 'お気に入り', to: '/favorite' },
        { icon: 'info', title: '青空文庫について', to: '/about' }
      ],
      miniVariant: false,
      title: '青空文庫'
    }
  }
}
</script>
