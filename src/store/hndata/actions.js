import hnapi from '@/lib/hnapi'
import Item from '@/lib/response/item'
import User from '@/lib/response/user'
import TypeUtil from '@/lib/utils/typeutil'

const checkHTTPStatus = (res, expected) => {
  if (res.status !== expected) {
    throw new hnapi.HTTPStatusError(expected, res.status)
  }
  return res.status
}

const actions = {
  async fetchItem (context, id, forceUpdate = false) {
    const res = await hnapi.fetch([hnapi.ITEM, id], forceUpdate)
    checkHTTPStatus(res, 200)
    const item = Item.createItem(res.data)
    context.commit('replaceItem', item)
  },

  async fetchUser (context, id, forceUpdate = false) {
    const res = await hnapi.fetch([hnapi.USER, id], forceUpdate)
    checkHTTPStatus(res, 200)
    const user = User.createUser(res.data)
    context.commit('replaceUser', user)
  },

  async fetchMax (context, forceUpdate = false) {
    const res = await hnapi.fetch([hnapi.MAX_ITEM], forceUpdate)
    checkHTTPStatus(res, 200)
    const max = TypeUtil.checkType(res.data, 'number')
    context.commit('replaceMax', max)
  },

  async fetchUpdates (context, forceUpdate = false) {
    const res = await hnapi.fetch([hnapi.UPDATES], forceUpdate)
    checkHTTPStatus(res, 200)
    const items = TypeUtil.checkArray(res.data.items, 'number')
    const profiles = TypeUtil.checkArray(res.data.profiles, 'string')
    context.commit('repaceUpdates', { items, profiles })
  },

  async fetchStories (context, api, forceUpdate = false) {
    switch (api) {
      case hnapi.STORIES.NEW:
      case hnapi.STORIES.TOP:
      case hnapi.STORIES.BEST:
      case hnapi.STORIES.ASK:
      case hnapi.STORIES.SHOW:
      case hnapi.STORIES.JOB:
        break
      default:
        throw new Error(`Given api string '${api}' is invalid`)
    }
    const res = await hnapi.fetch(api, forceUpdate)
    checkHTTPStatus(res, 200)
    const list = TypeUtil.checkArray(res.data, 'number')
    context.commit('repaceStories', { key: api, list })
  }
}

export default actions
