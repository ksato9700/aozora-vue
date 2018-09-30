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
    <search/>
  </v-layout>
</template>

<script>
import AozoraLogo from '~/components/AozoraLogo.vue'
import Search from '~/components/Search.vue'

export default {
  components: {
    AozoraLogo,
    Search
  }
}
</script>
