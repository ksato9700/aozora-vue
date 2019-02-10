import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  if (process.client) {
    window.onNuxtReady(() => {
      createPersistedState()(store)
    })
  }
}
