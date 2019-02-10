<template>
  <h1> title: {{ bookobj.title }}</h1>
</template>

<script>
import axios from 'axios'
const baseurl = 'http://localhost:5000/api/v0.1'
export default {
  async asyncData(context) {
    console.log('fetch', context)
    const book_id = context.params.num
    const { data } = await axios.get(baseurl + '/books/' + book_id)
    console.log('data', data)
    return {
      bookobj: data
    }
  }
}
</script>
