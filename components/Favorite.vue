<template>
  <v-card>
    <v-toolbar
      color="#000063"
      dark
      flat
    >
      <v-toolbar-title>お気に入り</v-toolbar-title>
    </v-toolbar>
    <book-list :books="books" />
  </v-card>
</template>

<script>
import BookList from '~/components/BookList.vue'
import { mapGetters, mapMutations } from 'vuex'

export default {
  components: {
    BookList
  },
  props: {
    books: {
      type: Array,
      required: true
    }
  },
  methods: {
    ...mapGetters({
      included: 'stars/included'
    }),
    ...mapMutations({
      toggle: 'stars/toggle'
    })
  }
}
</script>

<style lang="css" scoped>
</style>
