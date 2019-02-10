<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-container>
      <search-result
        :books="books"
        :persons="persons"
      />
    </v-container>
  </v-layout>
</template>

<script>
import SearchResult from '~/components/SearchResult.vue'

const do_search = async function(axios) {
  const books = await axios.$get('/books?limit=10')
  const persons = []
  return { books, persons }
}

export default {
  components: {
    SearchResult
  },
  beforeRouteUpdate(to, from, next) {
    do_search(this.$axios).then(res => {
      this.books = res.books
      this.persons = res.persons
      next()
    })
  },
  async asyncData({ app }) {
    return do_search(app.$axios)
  }
}
</script>
