import TypeUtil from '@/lib/utils/typeutil'
import hnapi from '@/lib/hnapi'

import Item from '@/lib/response/item'
import User from '@/lib/response/user'

const LOG_LENGTH = 80
const EXAMPLE_USER_ID = 'sequoia' // See https://hacker-news.firebaseio.com/v0/user/sequoia.json?print=pretty
const EXAMPLE_JOB_ID = 26233783 // See https://hacker-news.firebaseio.com/v0/item/26233783.json?print=pretty
const EXAMPLE_STORY_ID = 26227123 // See https://hacker-news.firebaseio.com/v0/item/26227123.json?print=pretty
const EXAMPLE_COMMENT_ID = 22496313 // See https://hacker-news.firebaseio.com/v0/item/22496313.json?print=pretty
// const EXAMPLE_POLL_ID = 0 // ???
// const EXAMPLE_POLLOPT_ID = 0 // ???

const testFetch = (done, verify, api) => {
  return hnapi.fetch(api)
    .then(res => {
      verify(res)
      done()
    })
    .catch(done)
}

const fmtlog = (log) => {
  log = '    - ' + log
  if (log.length > LOG_LENGTH) {
    log = log.slice(0, LOG_LENGTH - 3) + '...'
  }
  return log
}

const logItem = (id, type, summary) => {
  const log = `[${id} is ${type}]: ${summary}`
  console.log(fmtlog(log))
}

const logUser = (data) => {
  const log = `[${data.id} is user]: ${data.about}`
  console.log(fmtlog(log))
}

const isUser = res => {
  TypeUtil.checkValue(res.status, 200)
  const user = new User(res.data)
  logUser(user)
}

const isStory = res => {
  TypeUtil.checkValue(res.status, 200)
  const item = new Item.Story(res.data)
  logItem(item.id, item.type, item.title)
}

const isJob = res => {
  TypeUtil.checkValue(res.status, 200)
  const item = new Item.Job(res.data)
  logItem(item.id, item.type, item.title)
}

const isComment = res => {
  TypeUtil.checkValue(res.status, 200)
  const item = new Item.Comment(res.data)
  logItem(item.id, item.type, item.text)
}

describe('@/lib/response/user', () => {
  it('fetch User', done => {
    const verify = isUser
    const api = hnapi.USER
    const id = EXAMPLE_USER_ID
    testFetch(done, verify, [api, id])
  })
})

describe('@/lib/response/item', () => {
  it('fetch Story', done => {
    const verify = isStory
    const api = hnapi.ITEM
    const id = EXAMPLE_STORY_ID
    testFetch(done, verify, [api, id])
  })

  it('fetch Job', done => {
    const verify = isJob
    const api = hnapi.ITEM
    const id = EXAMPLE_JOB_ID
    testFetch(done, verify, [api, id])
  })

  it('fetch Comment', done => {
    const verify = isComment
    const api = hnapi.ITEM
    const id = EXAMPLE_COMMENT_ID
    testFetch(done, verify, [api, id])
  })
})
