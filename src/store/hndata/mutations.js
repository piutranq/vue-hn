const mutations = {
  replaceItem (state, item) { state.item = item },
  replaceUser (state, user) { state.user = user },
  replaceMax (state, max) { state.max = max },
  replaceUpdates (state, updates) { state.updates = updates },
  replaceStories (state, stories) { state.stories = stories }
}

export default mutations
