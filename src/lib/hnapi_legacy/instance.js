import axios from 'axios'
import URL from '@/lib/hnapi/url'
// import detectMocha from 'detect-mocha'

// const TEST_MODE = detectMocha()

const instance = axios.create({
  baseURL: [URL.db, URL.ver].join('/'),
  headers: {
    method: 'get',
    'Content-Type': 'application/json;charset=utf-8'/*,
    'Access-Control-Allow-Origin': !TEST_MODE
      ? 'http://localhost' // on browser
      : 'http://localhost' // on mocha
    */
  }
})

export default instance
