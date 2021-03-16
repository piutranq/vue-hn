import hnapi from '@/lib/hnapi'

const actions = {
  fetchItem (context, { id }) {
    hnapi.fetch.item(id, 'cacheFirst')
      .then(data => context.commit('replaceItem', data))
    hnapi.fetch.item(id, 'networkFirst')
      .then(data => context.commit('replaceItem', data))
  },

  fetchUser (context, { id }) {
    hnapi.fetch.user(id, 'cacheFirst')
      .then(data => context.commit('replaceUser', data))
    hnapi.fetch.user(id, 'networkFirst')
      .then(data => context.commit('replaceUser', data))
  },

  fetchMax (context) {
    hnapi.fetch.max('cacheFirst')
      .then(data => context.commit('replaceMax', data))
    hnapi.fetch.max('networkFirst')
      .then(data => context.commit('replaceMax', data))
  },

  fetchUpdates (context) {
    hnapi.fetch.updates('cacheFirst')
      .then(data => context.commit('repaceUpdates', data))
    hnapi.fetch.updates('networkFirst')
      .then(data => context.commit('repaceUpdates', data))
  },

  fetchStories (context, { type }) {
    type = hnapi.url.checkStoriesType(type)
    hnapi.fetch.stories(type, 'cacheFirst')
      .then(data => context.commit('replaceStories', data))
    hnapi.fetch.stories(type, 'networkFirst')
      .then(data => context.commit('replaceStories', data))
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
    const networkPreviews = await Promise.all(
      networkList.slice(range[0], range[1]).forEach(
        async (e, i) => await hnapi.fetch.item(e, 'networkFirst')
      )
    )
    context.commit('replacePreviews', networkPreviews)
  }

}

export default actions
