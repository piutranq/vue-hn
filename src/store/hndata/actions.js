import hnapi from '@/lib/hnapi'

const actions = {
  async fetchItem (context, payload = { id: 0, forceUpdate: false }) {
    const data = await hnapi.fetch.item(payload.id, payload.forceUpdate)
    context.commit('replaceItem', data)
    return data
  },

  async fetchUser (context, payload = { id: '', forceUpdate: false }) {
    const data = await hnapi.fetch.user(payload.id, payload.forceUpdate)
    context.commit('replaceUser', data)
    return data
  },

  async fetchMax (context, payload = { forceUpdate: false }) {
    const data = await hnapi.fetch.max(payload.forceUpdate)
    context.commit('replaceMax', data)
    return data
  },

  async fetchUpdates (context, payload = { forceUpdate: false }) {
    const data = await hnapi.fetch.updates(payload.forceUpdate)
    context.commit('repaceUpdates', data)
    return data
  },

  async fetchNewStories (context, payload = { forceUpdate: false }) {
    const data = await hnapi.fetch.newstories(payload.forceUpdate)
    context.commit('replaceStories', data)
    return data
  },

  async fetchTopStories (context, payload = { forceUpdate: false }) {
    const data = await hnapi.fetch.topstories(payload.forceUpdate)
    context.commit('replaceStories', data)
    return data
  },

  async fetchBestStories (context, payload = { forceUpdate: false }) {
    const data = await hnapi.fetch.beststories(payload.forceUpdate)
    context.commit('replaceStories', data)
    return data
  },

  async fetchAskStories (context, payload = { forceUpdate: false }) {
    const data = await hnapi.fetch.askstories(payload.forceUpdate)
    context.commit('replaceStories', data)
    return data
  },

  async fetchShowStories (context, payload = { forceUpdate: false }) {
    const data = await hnapi.fetch.showstories(payload.forceUpdate)
    context.commit('replaceStories', data)
    return data
  },

  async fetchJobStories (context, payload = { forceUpdate: false }) {
    const data = await hnapi.fetch.jobstories(payload.forceUpdate)
    context.commit('replaceStories', data)
    return data
  },

  async fetchPreviews (
    context,
    payload = { range: [0, 20], forceUpdate: false }
  ) {
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
