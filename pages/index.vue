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
      <v-card>
        <v-card-title class="headline">インターネットの電子図書館、青空文庫へようこそ。</v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import AozoraLogo from '~/components/AozoraLogo.vue'

export default {
  components: {
    AozoraLogo
  }
}
</script>
