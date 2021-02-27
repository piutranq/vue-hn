const getters = {
  item: state => state.item,
  user: state => state.user,
  max: state => state.max,
  updates: state => state.updates,
  updatedItems: state => state.updates.items,
  updatedProfiles: state => state.updates.profiles,
  stories: state => state.stories,
  previews: state => state.previews
}

export default getters
