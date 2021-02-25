import instance from './instance'
import URL from './url'
import checkdata from './checkdata'
import errors from './errors'

const HTTPStatusError = errors.HTTPStatusError
const ResponseNotExistError = errors.ResponseNotExistError

const makeURL = (resources) =>
  resources.join('/') + URL.ext

const makeQuery = (queries) =>
  '?' + new URLSearchParams(queries).toString()

const fetchURL = async (resources, queries, forceUpdate = false) => {
  const url = makeURL(resources) + makeQuery(queries)
  const res = await instance
    .get(url, { forceUpdate, cache: true })

  // Check HTTP Status Code: Should be 200
  if (res.status !== 200) throw new HTTPStatusError(res.status, 200)

  // Check HTTP Response Data: Should be anybody
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

const item = async (id, forceUpdate = false) => {
  const resources = [URL.item, id]
  const queries = []
  const data = await fetchURL(resources, queries, forceUpdate)
  return checkdata.item(data)
}

const user = async (id, forceUpdate = false) => {
  const resources = [URL.user, id]
  const queries = []
  const data = await fetchURL(resources, queries, forceUpdate)
  return checkdata.user(data)
}

const maxitem = async (id, forceUpdate = false) => {
  const resources = [URL.max]
  const queries = []
  const data = await fetchURL(resources, queries, forceUpdate)
  return checkdata.max(data)
}

const updates = async (forceUpdate = false) => {
  const resources = [URL.updates]
  const queries = []
  const data = await fetchURL(resources, queries, forceUpdate)
  return checkdata.updates(data)
}

const newstories = async (forceUpdate = false) => {
  const resources = [URL.newStories]
  const queries = []
  const data = await fetchURL(resources, queries, forceUpdate)
  return checkdata.stories(data)
}

const topstories = async (forceUpdate = false) => {
  const resources = [URL.topStories]
  const queries = []
  const data = await fetchURL(resources, queries, forceUpdate)
  return checkdata.stories(data)
}

const beststories = async (forceUpdate = false) => {
  const resources = [URL.bestStories]
  const queries = []
  const data = await fetchURL(resources, queries, forceUpdate)
  return checkdata.stories(data)
}

const askstories = async (forceUpdate = false) => {
  const resources = [URL.askStories]
  const queries = []
  const data = await fetchURL(resources, queries, forceUpdate)
  return checkdata.stories(data)
}

const showstories = async (forceUpdate = false) => {
  const resources = [URL.showStories]
  const queries = []
  const data = await fetchURL(resources, queries, forceUpdate)
  return checkdata.stories(data)
}

const jobstories = async (forceUpdate = false) => {
  const resources = [URL.jobStories]
  const queries = []
  const data = await fetchURL(resources, queries, forceUpdate)
  return checkdata.stories(data)
}

const fetch = {
  item,
  user,
  maxitem,
  updates,
  newstories,
  topstories,
  beststories,
  askstories,
  showstories,
  jobstories
}

export default fetch
