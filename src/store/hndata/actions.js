import hnapi from '@/lib/hnapi'

const actions = {
  async fetchItem (context, id, forceUpdate = false) {
    const data = await hnapi.fetch.item(id, forceUpdate)
    context.commit('replaceItem', data)
    return data
  },

  async fetchUser (context, id, forceUpdate = false) {
    const data = await hnapi.fetch.user(id, forceUpdate)
    context.commit('replaceUser', data)
    return data
  },

  async fetchMax (context, forceUpdate = false) {
    const data = await hnapi.fetch.max(forceUpdate)
    context.commit('replaceMax', data)
    return data
  },

  async fetchUpdates (context, forceUpdate = false) {
    const data = await hnapi.fetch.updates(forceUpdate)
    context.commit('repaceUpdates', data)
    return data
  },

  async fetchNewStories (context, forceUpdate = false) {
    const data = await hnapi.fetch.newstories(forceUpdate)
    context.commit('replaceStories', data)
    return data
  },

  async fetchTopStories (context, forceUpdate = false) {
    const data = await hnapi.fetch.topstories(forceUpdate)
    context.commit('replaceStories', data)
    return data
  },

  async fetchBestStories (context, forceUpdate = false) {
    const data = await hnapi.fetch.beststories(forceUpdate)
    context.commit('replaceStories', data)
    return data
  },

  async fetchAskStories (context, forceUpdate = false) {
    const data = await hnapi.fetch.askstories(forceUpdate)
    context.commit('replaceStories', data)
    return data
  },

  async fetchShowStories (context, forceUpdate = false) {
    const data = await hnapi.fetch.showstories(forceUpdate)
    context.commit('replaceStories', data)
    return data
  },

  async fetchJobStories (context, forceUpdate = false) {
    const data = await hnapi.fetch.jobstories(forceUpdate)
    context.commit('replaceStories', data)
    return data
  },

  async fetchPreviews (context, payload = { range: [0, 20], forceUpdate: false }) {
    const range = payload.range
    const forceUpdate = payload.forceUpdate
    const sliced = context.state.stories
      .slice(range[0], range[1])
    const preview = await Promise.all(
      sliced.map(async (e, i) => {
        return await hnapi.fetch.item(e, forceUpdate)
      })
    )
    context.commit('replacePreviews', preview)
    return preview
  }

}

export default actions
