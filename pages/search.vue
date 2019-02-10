<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-container>
      <search />
      <search-result
        :books="books"
        :persons="persons"
      />
    </v-container>
  </v-layout>
</template>

<script>
import Search from '~/components/Search.vue'
import SearchResult from '~/components/SearchResult.vue'

const do_search = async function(axios, q) {
  const books = await axios.$get('/books?title=/' + q + '/&limit=10')
  const persons = await axios.$get('/persons?name=' + q + '&limit=10')
  return { books, persons }
}

export default {
  components: {
    Search,
    SearchResult
  },
  beforeRouteUpdate(to, from, next) {
    do_search(this.$axios, to.query.q).then(res => {
      this.books = res.books
      this.persons = res.persons
      next()
    })
  },
  async asyncData({ app, query }) {
    // console.log('search: asyncData', store.state.stars.list)
    return do_search(app.$axios, query.q)
  }
}
</script>
