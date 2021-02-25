import hnapi from '@/lib/hnapi'

const actions = {
  async fetchItem (context, id, forceUpdate = false) {
    const data = await hnapi.fetchItem(id, forceUpdate)
    context.commit('replaceItem', data)
  },

  async fetchUser (context, id, forceUpdate = false) {
    const data = await hnapi.fetchUser(id, forceUpdate)
    context.commit('replaceUser', data)
  },

  async fetchMax (context, forceUpdate = false) {
    const data = await hnapi.fetchMax(forceUpdate)
    context.commit('replaceMax', data)
  },

  async fetchUpdates (context, forceUpdate = false) {
    const data = await hnapi.fetchUpdates(forceUpdate)
    context.commit('repaceUpdates', data)
  },

  async fetchNewStories (context, forceUpdate = false) {
    const data = await hnapi.fetchNewStories(forceUpdate)
    context.commit('repaceStories', data)
  },

  async fetchTopStories (context, forceUpdate = false) {
    const data = await hnapi.fetchTopStories(forceUpdate)
    context.commit('repaceStories', data)
  },

  async fetchBestStories (context, forceUpdate = false) {
    const data = await hnapi.fetchBestStories(forceUpdate)
    context.commit('repaceStories', data)
  },

  async fetchAskStories (context, forceUpdate = false) {
    const data = await hnapi.fetchAskStories(forceUpdate)
    context.commit('repaceStories', data)
  },

  async fetchShowStories (context, forceUpdate = false) {
    const data = await hnapi.fetchShowStories(forceUpdate)
    context.commit('repaceStories', data)
  },

  async fetchJobStories (context, forceUpdate = false) {
    const data = await hnapi.fetchJobStories(forceUpdate)
    context.commit('repaceStories', data)
  }
}

export default actions
