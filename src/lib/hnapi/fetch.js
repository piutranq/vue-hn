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

const item = async (id, strategy) => {
  const paths = [hnapiURL.item, id]
  const data = await fetchData(paths, strategy)
  return checkdata.item(data)
}

const user = async (id, strategy) => {
  const paths = [hnapiURL.user, id]
  const data = await fetchData(paths, strategy)
  return checkdata.user(data)
}

const maxitem = async (strategy) => {
  const paths = [hnapiURL.max]
  const data = await fetchData(paths, strategy)
  return checkdata.max(data)
}

const updates = async (strategy) => {
  const paths = [hnapiURL.updates]
  const data = await fetchData(paths, strategy)
  return checkdata.updates(data)
}

const stories = async (type, strategy) => {
  const paths = [hnapiURL.checkStoriesType(type)]
  const data = await fetchData(paths, strategy)
  return checkdata.stories(data)
}

const previews = async ({ type, page = 0, amount = 20 }, strategy) => {
  const list = await stories(type, strategy)
  const range = [page * amount, ((page + 1) * amount)]
  const previews = await Promise.all(
    list.slice(range[0], range[1]).map(
      async (e, i) => await item(e, strategy)
    )
  )
  console.log(previews)
  return previews
}

const fetch = {
  item,
  user,
  maxitem,
  updates,
  stories,
  previews
}

export default fetch
