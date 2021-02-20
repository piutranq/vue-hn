const mutations = {
  replaceItem (state, item) { state.item = item },
  replaceUser (state, user) { state.user = user },
  replaceMax (state, max) { state.max = max },
  replaceUpdates (state, updates) { state.updates = updates },
  replaceStories (state, obj) { state.stories[obj.key] = obj.list }
}

export default mutations
