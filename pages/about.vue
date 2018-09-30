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
        <v-card-title class="headline">青空文庫について</v-card-title>
        <v-card-text>
          <p>初めての方はまず「
            <a href="guide/aozora_bunko_hayawakari.html">青空文庫早わかり</a>
            」をご覧ください。</p>
          <p>ファイル利用をお考えの方は、
            <a href="guide/kijyunn.html">こちら</a>
            をご一読ください。</p>
          <p>ブラウザでは読みにくいと思った方は、「
            <a href="readingTEXT/index.html">青空文庫のXHTML, TEXTの読み方</a>
            」をどうぞ。</p>
          <p>「誤植かな？」とお気づきの方は、
            <a href="guide/aozora_bunko_faq.html#midashi890">こちら</a>
            を参考にご報告いただけると助かります。</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn
            color="primary"
            flat
            nuxt
            to="/">Back</v-btn>
        </v-card-actions>
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
