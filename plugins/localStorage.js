import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  if (process.client) {
    window.onNuxtReady(nuxt => {
      createPersistedState()(store)
    })
  }
}
