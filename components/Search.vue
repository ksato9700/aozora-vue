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
    <h3 v-if="titles && titles.length">作品名</h3>
    <v-list>
      <v-list-tile
        v-for="(book, i) in titles"
        :key="i"
      >
        <v-list-tile-content>
          <v-list-tile-title>
            {{ book.title }}
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <h3 v-if="persons && persons.length">著者</h3>
    <v-list>
      <v-list-tile
        v-for="(person, i) in persons"
        :key="i"
      >
        <v-list-tile-content>
          <v-list-tile-title>
            {{ person.last_name + ' ' + person.first_name }}
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-container>
</template>


<script>
import axios from 'axios'
const baseurl = 'http://localhost:5000/api/v0.1'
export default {
  data() {
    return {
      search: null,
      titles: null,
      persons: null,
      not_found: false
    }
  },
  /*
  watch: {
    search: (val, oldval) => {
      console.log('search', val, oldval)
    }
  },
  */
  methods: {
    do_search: function() {
      // console.log('this.search=', this.search)
      this.not_found = false
      axios
        .get(baseurl + '/books?title=/' + this.search + '/&limit=10')
        .then(res => {
          this.titles = res.data
          return axios.get(
            baseurl + '/persons?name=' + this.search + '&limit=10'
          )
        })
        .then(res => {
          this.persons = res.data
          if (this.titles.length == 0 && this.persons.length == 0) {
            this.not_found = true
          }
        })
    }
  },
  not_found: function() {
    return
  }
}
</script>

<style lang="css" scoped>
</style>
