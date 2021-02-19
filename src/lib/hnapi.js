import axios from 'axios'
import detectMocha from 'detect-mocha'

const DB = 'https://hacker-news.firebaseio.com'
const VER = 'v0'
const EXTENSION = '.json'

const TEST_MODE = detectMocha()

const init = () => {
  // CORS Settings
  const CORS_URL = !TEST_MODE
    ? 'http://localhost' // on browser
    : 'http://localhost' // on mocha
  axios.defaults.headers
    .get['Access-Control-Allow-Origin'] = CORS_URL
}

const makeURL = (...api) => {
  return [DB, VER, ...api].join('/') + EXTENSION
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
  fetch: (...api) => {
    const url = makeURL(...api)
    TEST_MODE && console.log('fetching from ' + url)
    return axios.get(url)
  }
}

init()
export default hnapi
