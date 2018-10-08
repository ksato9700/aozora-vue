<template>
  <v-layout
    column
    justify-center
    align-center>
    <book-card :book="book" />
  </v-layout>
</template>

<script>
import BookCard from '~/components/BookCard.vue'

export default {
  components: {
    BookCard
  },
  async asyncData({ app, params }) {
    return {
      book: await app.$axios.$get('/books/' + params.id)
    }
  }
}
</script>
