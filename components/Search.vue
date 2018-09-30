<template>
  <v-container>
    <v-form
      ref="searchForm"
      class="lighten-3 pa-2"
      lazy-validation>
      <v-text-field
        v-model="search"
        box
        append-icon="search"
        placeholder="作品名・著者名"/>
      <v-text-field
        v-model="search"
        outline
        readonly />
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      search: null
    }
  }
}
</script>

<style lang="css" scoped>
</style>
