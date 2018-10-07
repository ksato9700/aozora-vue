<template>
  <v-layout
    column
    justify-center
    align-center>
    <search
      :books="books"
      :persons="persons" />
  </v-layout>
</template>

<script>
import Search from '~/components/Search.vue'
export default {
  components: {
    Search
  },
  async asyncData({ app, query }) {
    const books = await app.$axios.$get(
      '/books?title=/' + query.q + '/&limit=10'
    )
    const persons = await app.$axios.$get(
      '/persons?name=' + query.q + '&limit=10'
    )
    return {
      books: books,
      persons: persons
    }
  }
}
</script>
