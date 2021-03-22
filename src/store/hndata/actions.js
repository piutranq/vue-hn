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

  fetchPreviews (context, { type, page, amount }) {
    type = hnapi.url.checkStoriesType(type)
    hnapi.fetch.previews({ type, page, amount }, 'cacheFirst')
      .then(data => context.commit('replacePreviews', data))
    hnapi.fetch.previews({ type, page, amount }, 'networkFirst')
      .then(data => context.commit('replacePreviews', data))
  },

  fetchSubmittedPreviews (context, { id, page, amount }) {
    hnapi.fetch.submittedPreviews({ id, page, amount }, 'cacheFirst')
      .then(data => context.commit('replacePreviews', data))
    hnapi.fetch.submittedPreviews({ id, page, amount }, 'networkFirst')
      .then(data => context.commit('replacePreviews', data))
  }

}

export default actions
