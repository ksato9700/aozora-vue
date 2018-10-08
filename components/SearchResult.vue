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
      <v-list
        two-line>
        <v-list-tile
          v-for="book in books"
          :key="book.book_id"
          :href="book.html_url">
          <v-list-tile-content>
            <v-list-tile-title>
              {{ book.title }}
            </v-list-tile-title>
            <v-list-tile-sub-title>
              {{ book.subtitle }}
            </v-list-tile-sub-title>
          </v-list-tile-content>
          <v-spacer/>
          <v-list-tile-action>
            {{ book.authors[0].last_name + book.authors[0].first_name }}
          </v-list-tile-action>
          <v-list-tile-action>
            <v-btn
              icon
              ripple
              @click.prevent="toggle(book.book_id)">
              <v-icon
                v-if="included()(book.book_id)"
                color="yellow darken-2">
                star
              </v-icon>
              <v-icon
                v-else
                color="grey lighten-1">
                star_border
              </v-icon>
            </v-btn>
          </v-list-tile-action>
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
  </div>
</template>


<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
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
    return {
      not_found: this.books.length == 0 && this.persons.length == 0
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
