import hnapi from '@/lib/hnapi'

const actions = {
  async fetchItem (context, { id }) {
    const data = await hnapi.fetch.item(id)
    context.commit('replaceItem', data)
    return data
  },

  async fetchUser (context, { id }) {
    const data = await hnapi.fetch.user(id)
    context.commit('replaceUser', data)
    return data
  },

  async fetchMax (context) {
    const data = await hnapi.fetch.max()
    context.commit('replaceMax', data)
    return data
  },

  async fetchUpdates (context) {
    const data = await hnapi.fetch.updates()
    context.commit('repaceUpdates', data)
    return data
  },

  async fetchStories (context, { type }) {
    type = hnapi.url.checkStoriesType(type)
    const data = await hnapi.fetch.stories(type)
    context.commit('replaceStories', data)
    return data
  },

  async fetchPreviews (context, { type, range = [0, 20] }) {
    type = hnapi.url.checkStoriesType(type)

    // display cached previews from 'cachedList'
    const cachedList = await hnapi.fetch.stories(type, 'cacheFirst')
    const cachedPreviews = await Promise.all(
      cachedList.slice(range[0], range[1]).map(
        async (e, i) => await hnapi.fetch.item(e, 'cacheFirst')
      )
    )
    context.commit('replacePreviews', cachedPreviews)

    // fetch new list and previews from network,
    // then update cache and display
    const networkList = await hnapi.fetch.stories(type, 'networkFirst')
    const networkPreviews = Promise.all(
      networkList.slice(range[0], range[1]).forEach(
        async (e, i) => await hnapi.fetch.item(e, 'networkFirst')
      )
    )
    context.commit('replacePreviews', networkPreviews)
  }

}

export default actions
