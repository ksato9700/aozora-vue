export const state = () => ({
  list: []
})

export const getters = {
  included(state) {
    return book_id => {
      console.log('included', state.list.indexOf(book_id) >= 0)
      return state.list.indexOf(book_id) >= 0
    }
  }
}

export const mutations = {
  toggle(state, book_id) {
    const i = state.list.indexOf(book_id)
    console.log(state.list, book_id, i)
    if (i > -1) {
      state.list.splice(i, 1)
    } else {
      state.list.push(book_id)
    }
  }
}
