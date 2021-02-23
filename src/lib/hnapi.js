import axios from 'axios'
import { cacheAdapterEnhancer } from 'axios-extensions'
// import detectMocha from 'detect-mocha'

// const TEST_MODE = detectMocha()

class HTTPStatusError extends Error {
  constructor (expected, actual) {
    super()
    this.name = 'HTTPStatusError'
    this.message = `http status code '${expected}' is expected, but actual is '${actual}'`
  }
}

const DB = 'https://hacker-news.firebaseio.com'
const VER = 'v0'
const EXTENSION = '.json'

const instance = axios.create({
  baseURL: [DB, VER].join('/'),
  adapter: cacheAdapterEnhancer(
    axios.defaults.adapter, { enabledByDefault: false }),
  headers: {
    method: 'get',
    'Content-Type': 'application/json;charset=utf-8'/*,
    'Access-Control-Allow-Origin': !TEST_MODE
      ? 'http://localhost' // on browser
      : 'http://localhost' // on mocha
    */
  }
})

const makeURL = (api) => {
  return api.join('/') + EXTENSION
}

const makeQueryString = (paramObj) => {
  return '?' + new URLSearchParams(paramObj).toString()
}

const hnapi = {
  ITEM: 'item',
  USER: 'user',
  MAX_ITEM: 'maxitem',
  UPDATES: 'updates',
  STORIES: {
    NEW: 'newstories',
    TOP: 'topstories',
    BEST: 'beststories',
    ASK: 'askstories',
    SHOW: 'showstories',
    JOB: 'jobstories'
  },
  makeURL,
  makeQueryString,
  fetch: (api, forceUpdate = false) => {
    const url = makeURL(api)
    return instance.get(url, {
      forceUpdate,
      cache: true
    })
  },
  HTTPStatusError
}

export default hnapi
