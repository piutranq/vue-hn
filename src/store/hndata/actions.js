// import hnapi from '@/lib/hnapi'

const actions = {
  async fetchItem (context, { id }) {
    // const data = await hnapi.fetch.item(id)
    const data = {}
    context.commit('replaceItem', data)
    return data
  },

  async fetchUser (context, { id }) {
    // const data = await hnapi.fetch.user(id)
    const data = {}
    context.commit('replaceUser', data)
    return data
  },

  async fetchMax (context) {
    // const data = await hnapi.fetch.max()
    const data = 0
    context.commit('replaceMax', data)
    return data
  },

  async fetchUpdates (context) {
    // const data = await hnapi.fetch.updates()
    const data = {
      items: {},
      profiles: {}
    }
    context.commit('repaceUpdates', data)
    return data
  },

  async fetchStories (context, { type }) {
    // type = hnapi.url.checkStoriesType(type)
    // const data = await hnapi.fetch.stories(type)
    const data = []
    context.commit('replaceStories', data)
    return data
  },

  async fetchPreviews (context, { type, range = [0, 20] }) {
    // const data = await context.dispatch('fetchStories', { type })
    const data = []
    const sliced = data.slice(range[0], range[1])
    const preview = await Promise.all(
      sliced.map(async (e, i) => {
        // return await hnapi.fetch.item(e)
        return {}
      })
    )
    context.commit('replacePreviews', preview)
    return preview
  }

}

export default actions
