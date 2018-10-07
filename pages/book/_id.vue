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
import axios from 'axios'
const baseurl = 'http://localhost:5000/api/v0.1'

export default {
  components: {
    Book
  },
  async asyncData({ params }) {
    console.log('asyncData', params)
    const { data } = await axios.get(baseurl + '/books/' + params.id)
    console.log('data', data)
    return {
      book: data
    }
  }
}
</script>
