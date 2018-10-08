<template>
  <v-container>
    <v-card>
      <v-card-title class="headline">{{ book.title }}</v-card-title>
      <v-card-text>
        <p/>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: {
    book: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="css" scoped>
</style>
