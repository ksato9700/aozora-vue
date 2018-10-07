<template>
  <v-layout
    column
    justify-center
    align-center>
    <v-flex
      xs12
      sm8
      md6>
      <div class="text-xs-left">
        <aozora-logo/>
      </div>
    </v-flex>
    <h2>インターネットの電子図書館、青空文庫へようこそ。</h2>
    <v-container>
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
    </v-container>
  </v-layout>
</template>

<script>
import AozoraLogo from '~/components/AozoraLogo.vue'
export default {
  components: {
    AozoraLogo
  },
  data() {
    return {
      keyword: null
    }
  },
  methods: {
    submit: function() {
      this.$router.push('/search?q=' + this.keyword)
    }
  }
}
</script>
