<template>
  <v-container>
    <v-form
      ref="searchForm"
      class="lighten-3 pa-2"
      lazy-validation
      @submit.prevent="do_search">
      <v-text-field
        v-model="search"
        box
        append-icon="search"
        placeholder="作品名・著者名"
        @click:append="do_search"/>
    </v-form>
    <p v-if="not_found">見つかりませんでした</p>
    <v-card v-if="books && books.length">
      <v-toolbar
        color="#000063"
        dark
        flat>
        <v-toolbar-title>作品名</v-toolbar-title>
      </v-toolbar>
      <v-list
        two-line>
        <v-list-tile
          v-for="book in books"
          :key="book.book_id"
          :href="book.html_url">
          <!--
          -->
          <v-list-tile-content>
            <v-list-tile-title>
              {{ book.title }}
            </v-list-tile-title>
            <v-list-tile-sub-title>
              {{ book.subtitle }}
            </v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn
              :to="{path: '/book/' + book.book_id}"
              icon
              ripple>
              <v-icon color="grey lighten-1">info</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
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
  </v-container>
</template>


<script>
export default {
  data() {
    return {
      search: null,
      books: null,
      persons: null,
      not_found: false
    }
  },
  methods: {
    do_search: function() {
      // console.log('this.search=', this.search)
      this.not_found = false
      this.$axios
        .$get('/books?title=/' + this.search + '/&limit=10')
        .then(books => {
          this.books = books
          // console.log(this.books)
          return this.$axios.$get('/persons?name=' + this.search + '&limit=10')
        })
        .then(persons => {
          this.persons = persons
          // console.log(this.persons)
          if (this.books.length == 0 && this.persons.length == 0) {
            this.not_found = true
          }
        })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
