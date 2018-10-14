<template>
  <v-layout
    column
    justify-center
    align-center>
    <book-card
      :book="book"
      :items="items"/>
  </v-layout>
</template>

<script>
import BookCard from '~/components/BookCard.vue'

export default {
  components: {
    BookCard
  },
  async asyncData({ app, params }) {
    const book = await app.$axios.$get('/books/' + params.id)
    const person = await app.$axios.$get(
      '/persons/' + book.authors[0].person_id
    )
    return {
      book: {
        title: book.title,
        title_yomi: book.title_yomi
      },
      items: [
        {
          title: '作品データ',
          fields: [
            {
              name: '分類',
              value: book.ndc_code
            },
            {
              name: '初出',
              value: book.first_appearance
            },
            {
              name: '文字遣い種別',
              value: book.font_kana_type
            }
          ]
        },
        {
          title: '作家データ',
          fields: [
            {
              name: '作家名',
              value: person.last_name + ' ' + person.first_name
            },
            {
              name: '作家名読み',
              value: person.last_name_yomi + ' ' + person.first_name_yomi
            },
            {
              name: 'ローマ字表記',
              value: person.last_name_roman + ', ' + person.first_name_roman
            },
            {
              name: '生年',
              value: person.date_of_birth
            },
            {
              name: '没年',
              value: person.date_of_death
            }
          ]
        },
        {
          title: '底本データ',
          fields: [
            {
              name: '底本',
              value: book.base_book_1
            },
            {
              name: '出版社',
              value: book.base_book_1_publisher
            },
            {
              name: '初版発行日',
              value: book.base_book_1_1st_edition
            },
            {
              name: '入力に使用',
              value: book.base_book_1_edition_input
            },
            {
              name: '校正に使用',
              value: book.base_book_1_edition_proofing
            }
          ]
        },
        {
          title: '工作員データ',
          fields: [
            {
              name: '入力',
              value: book.input
            },
            {
              name: '校正',
              value: book.proofing
            }
          ]
        }
      ]
    }
  }
}
</script>
