import hnapi from '@/lib/hnapi'

const actions = {
  async fetchItem (context, payload = {}) {
    const id = 'id' in payload ? payload.id : 0
    const forceUpdate = 'forceUpdate' in payload
    const data = await hnapi.fetch.item(id, forceUpdate)
    context.commit('replaceItem', data)
    return data
  },

  async fetchUser (context, payload = {}) {
    const id = 'id' in payload ? payload.id : 0
    const forceUpdate = 'forceUpdate' in payload
    const data = await hnapi.fetch.user(id, forceUpdate)
    context.commit('replaceUser', data)
    return data
  },

  async fetchMax (context, payload = {}) {
    const forceUpdate = 'forceUpdate' in payload
    const data = await hnapi.fetch.max(forceUpdate)
    context.commit('replaceMax', data)
    return data
  },

  async fetchUpdates (context, payload = {}) {
    const forceUpdate = 'forceUpdate' in payload
    const data = await hnapi.fetch.updates(forceUpdate)
    context.commit('repaceUpdates', data)
    return data
  },

  async fetchNewStories (context, payload = {}) {
    const forceUpdate = 'forceUpdate' in payload
    const data = await hnapi.fetch.newstories(forceUpdate)
    context.commit('replaceStories', data)
    return data
  },

  async fetchTopStories (context, payload = {}) {
    const forceUpdate = 'forceUpdate' in payload
    const data = await hnapi.fetch.topstories(forceUpdate)
    context.commit('replaceStories', data)
    return data
  },

  async fetchBestStories (context, payload = {}) {
    const forceUpdate = 'forceUpdate' in payload
    const data = await hnapi.fetch.beststories(forceUpdate)
    context.commit('replaceStories', data)
    return data
  },

  async fetchAskStories (context, payload = {}) {
    const forceUpdate = 'forceUpdate' in payload
    const data = await hnapi.fetch.askstories(forceUpdate)
    context.commit('replaceStories', data)
    return data
  },

  async fetchShowStories (context, payload = {}) {
    const forceUpdate = 'forceUpdate' in payload
    const data = await hnapi.fetch.showstories(forceUpdate)
    context.commit('replaceStories', data)
    return data
  },

  async fetchJobStories (context, payload = {}) {
    const forceUpdate = 'forceUpdate' in payload
    const data = await hnapi.fetch.jobstories(forceUpdate)
    context.commit('replaceStories', data)
    return data
  },

  async fetchPreviews (context, payload = {}) {
    const range = 'range' in payload ? payload.range : [0, 20]
    const forceUpdate = 'forceUpdate' in payload
    const sliced = context.state.stories.slice(range[0], range[1])
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
