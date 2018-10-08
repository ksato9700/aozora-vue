<template>
  <v-layout
    column
    justify-center
    align-center>
    <v-container>
      <favorite :books="books" />
    </v-container>
  </v-layout>
</template>

<script>
import Favorite from '~/components/Favorite.vue'

const find_books = async function(axios, book_ids) {
  return Promise.all(
    book_ids.map(book_id => {
      return axios.$get('/books/' + book_id)
    })
  ).then(books => {
    return { books }
  })
}

export default {
  components: {
    Favorite
  },
  async asyncData({ app, store }) {
    return await find_books(app.$axios, store.state.stars.list)
  },
  watch: {
    '$store.state.stars.list': function() {
      find_books(this.$axios, this.$store.state.stars.list).then(res => {
        this.books = res.books
      })
    }
  }
}
</script>
