<template>
  <div>
    <p v-if="not_found">見つかりませんでした</p>
    <v-card v-if="books && books.length">
      <v-toolbar
        color="#000063"
        dark
        flat>
        <v-toolbar-title>作品名</v-toolbar-title>
      </v-toolbar>
      <book-list :books="books"/>
    </v-card>
    <v-card v-if="persons && persons.length">
      <v-toolbar
        color="#000063"
        dark
        flat>
        <v-toolbar-title>著者名</v-toolbar-title>
      </v-toolbar>
      <v-list>
        <v-list-tile
          v-for="(person, i) in persons"
          :key="i">
          <v-list-tile-content>
            <v-list-tile-title>
              {{ person.last_name + ' ' + person.first_name }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-card>
  </div>
</template>


<script>
import BookList from '~/components/BookList.vue'

export default {
  components: {
    BookList
  },
  props: {
    books: {
      type: Array,
      required: true
    },
    persons: {
      type: Array,
      required: true
    }
  },
  data() {
    console.log('data', this)
    return {
      not_found: this.books.length == 0 && this.persons.length == 0
    }
  }
}
</script>

<style lang="css" scoped>
</style>
