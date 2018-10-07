<template>
  <v-form
    ref="searchForm"
    class="lighten-3 pa-2"
    lazy-validation
    @submit.prevent="submit">
    <v-text-field
      v-model="keyword"
      box
      append-icon="search"
      placeholder="作品名・著者名"
      @click:append="submit"/>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      keyword: null
    }
  },
  methods: {
    submit: function() {
      // console.log('submit', this.keyword)
      this.$router.push({ path: '/search', query: { q: this.keyword } })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
