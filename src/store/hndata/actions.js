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

  async fetchStories (context, payload = {}) {
    const type = hnapi.url.checkStoriesType(payload.type)
    const forceUpdate = 'forceUpdate' in payload
    const data = await hnapi.fetch.stories(type, forceUpdate)
    context.commit('replaceStories', data)
    return data
  },

  async fetchPreviews (context, payload = {}) {
    const range = 'range' in payload ? payload.range : [0, 20]
    const forceUpdate = 'forceUpdate' in payload
    const data = await context.dispatch('fetchStories', payload)
    const sliced = data.slice(range[0], range[1])
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
