<template>
  <v-list
    two-line
  >
    <template
      v-for="(book,index) in books"
    >
      <v-list-tile
        :key="book.book_id"
        :href="book.html_url"
      >
        <v-list-tile-content>
          <v-list-tile-title>
            {{ book.title }}
          </v-list-tile-title>
          <v-list-tile-sub-title>
            {{ book.subtitle }}
          </v-list-tile-sub-title>
        </v-list-tile-content>
        <v-spacer />
        <v-list-tile-action>
          {{ book.authors[0].last_name + book.authors[0].first_name }}
        </v-list-tile-action>
        <v-list-tile-action>
          <v-btn
            icon
            ripple
            @click.prevent="toggle(book.book_id)"
          >
            <v-icon
              v-if="included()(book.book_id)"
              color="yellow darken-2"
            >
              star
            </v-icon>
            <v-icon
              v-else
              color="grey lighten-1"
            >
              star_border
            </v-icon>
          </v-btn>
        </v-list-tile-action>
        <v-list-tile-action>
          <v-btn
            :to="{path: '/book/' + book.book_id}"
            icon
            ripple
          >
            <v-icon color="grey lighten-1">
              info
            </v-icon>
          </v-btn>
        </v-list-tile-action>
      </v-list-tile>
      <v-divider
        v-if="index + 1 < books.length"
        :key="`divider-${index}`"
      />
    </template>
  </v-list>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  props: {
    books: {
      type: Array,
      required: true
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
