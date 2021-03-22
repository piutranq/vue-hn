import instance from '@/lib/hnapi/instance'
import hnapiURL from '@/lib/hnapi/url'
import checkdata from '@/lib/hnapi/checkdata'

class HTTPStatusError extends Error {
  constructor (actual, expected) {
    super()
    this.name = 'HTTPStatusError'
    this.message = `http status code ${expected} is expected, but actual is '${actual}'`
  }
}

class ResponseNotExistError extends Error {
  constructor (url) {
    super()
    this.name = 'ResponseNotExistError'
    this.message = `requested to ${url}, but response data is not exists`
  }
}

const getRange = ({ page = 0, amount = 20 }) =>
  [page * amount, (page * amount + amount)]

const fetchData = async (paths, strategy) => {
  const url = paths.join('/') + hnapiURL.extension
  const opt = {
    headers: {
      'X-Caching-Strategy': strategy
    }
  }

  const res = await instance.get(url, opt)

  if (res.status !== 200) throw new HTTPStatusError(res.status, 200)

  switch (res.data) {
    case []:
    case {}:
    case '':
    case null:
    case undefined:
      throw new ResponseNotExistError(url)
    default:
  }

  return res.data
}

const fetchItem = async (id, strategy) => {
  const paths = [hnapiURL.item, id]
  const data = await fetchData(paths, strategy)
  return checkdata.item(data)
}

const fetchUser = async (id, strategy) => {
  const paths = [hnapiURL.user, id]
  const data = await fetchData(paths, strategy)
  return checkdata.user(data)
}

const fetchMaxItem = async (strategy) => {
  const paths = [hnapiURL.max]
  const data = await fetchData(paths, strategy)
  return checkdata.max(data)
}

const fetchUpdates = async (strategy) => {
  const paths = [hnapiURL.updates]
  const data = await fetchData(paths, strategy)
  return checkdata.updates(data)
}

const fetchStories = async (type, strategy) => {
  const paths = [hnapiURL.checkStoriesType(type)]
  const data = await fetchData(paths, strategy)
  return checkdata.stories(data)
}

const fetchPreviews = async (
  { type, page, amount }, strategy
) => {
  const list = await fetchStories(type, strategy)
  const range = getRange({ page, amount })
  const previews = await Promise.all(
    list.slice(range[0], range[1]).map(
      async (e, i) => await fetchItem(e, strategy)
    )
  )
  return previews
}

const fetchSubmittedPreviews = async (
  { id, page, amount }, strategy
) => {
  const user = await fetchUser(id, strategy)
  const submitted = user.submitted
  const range = getRange({ page, amount })
  const previews = await Promise.all(
    submitted.slice(range[0], range[1]).map(
      async (e, i) => await fetchItem(e, strategy)
    )
  )
  console.log(previews)
  return previews
}

const fetch = {
  item: fetchItem,
  user: fetchUser,
  maxitem: fetchMaxItem,
  updates: fetchUpdates,
  stories: fetchStories,
  previews: fetchPreviews,
  submittedPreviews: fetchSubmittedPreviews
}

export default fetch
