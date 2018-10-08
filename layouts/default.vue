<template>
  <v-app baseline>
    <v-navigation-drawer
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :to="item.to"
          :key="i"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon" />
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
      <v-toolbar-title v-text="title"/>
      <v-spacer/>
      <v-toolbar-items>
        <v-btn
          :to="{path: '/favorite'}"
          flat
          dark>
          <v-icon>star</v-icon>
        </v-btn>
        <v-btn
          :to="{path: '/about'}"
          flat
          dark>
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
        { icon: 'star', title: 'お気に入り', to: '/favorite' },
        { icon: 'info', title: '青空文庫について', to: '/about' }
      ],
      miniVariant: false,
      title: '青空文庫'
    }
  }
}
</script>
