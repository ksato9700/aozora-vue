<template>
  <v-layout
    column
    justify-center
    align-center>
    <book :book="book" />
  </v-layout>
</template>

<script>
import Book from '~/components/Book.vue'

export default {
  components: {
    Book
  },
  async asyncData({ app, params }) {
    return {
      book: await app.$axios.$get('/books/' + params.id)
    }
  }
}
</script>
