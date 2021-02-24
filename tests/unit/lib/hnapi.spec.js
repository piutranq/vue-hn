import TypeUtil from '@/lib/utils/typeutil'
import hnapi from '@/lib/hnapi'

const isStories = res => {
  TypeUtil.checkValue(res.status, 200)
  TypeUtil.checkArray(res.data, 'number', true)
}

const isUpdates = res => {
  TypeUtil.checkValue(res.status, 200)
  TypeUtil.checkArray(res.data.items, 'number', true)
  TypeUtil.checkArray(res.data.profiles, 'string', true)
}

const isMaxItem = res => {
  TypeUtil.checkValue(res.status, 200)
  TypeUtil.checkType(res.data, 'number', true)
}

const isUser = res => {
  TypeUtil.checkValue(res.status, 200)
  TypeUtil.checkType(res.data.about, 'string')
  TypeUtil.checkType(res.data.created, 'number')
  TypeUtil.checkType(res.data.id, 'string')
  TypeUtil.checkType(res.data.karma, 'number')
  TypeUtil.checkArray(res.data.submitted, 'number')
}

const isItem = res => {
  TypeUtil.checkValue(res.status, 200)

  // Required property
  TypeUtil.checkType(res.data.id, 'number', true)
  TypeUtil.checkType(res.data.type, 'string', true)

  // Optional property
  TypeUtil.checkType(res.data.deleted, 'boolean')
  TypeUtil.checkType(res.data.by, 'string')
  TypeUtil.checkType(res.data.time, 'number')
  TypeUtil.checkType(res.data.dead, 'boolean')
  TypeUtil.checkArray(res.data.kids, 'number')
}

const testFetch = (done, verify, api) => {
  return hnapi.fetch(api)
    .then(res => {
      verify(res)
      done()
    })
    .catch(done)
}

describe('@/lib/hnapi.js (Test the actual http request)', () => {
  it('fetch newstories', done => {
    const verify = isStories
    const api = hnapi.STORIES.NEW
    testFetch(done, verify, [api])
  })

  it('fetch topstories', done => {
    const verify = isStories
    const api = hnapi.STORIES.TOP
    testFetch(done, verify, [api])
  })

  it('fetch beststories', done => {
    const verify = isStories
    const api = hnapi.STORIES.BEST
    testFetch(done, verify, [api])
  })

  it('fetch askstories', done => {
    const verify = isStories
    const api = hnapi.STORIES.ASK
    testFetch(done, verify, [api])
  })

  it('fetch showstories', done => {
    const verify = isStories
    const api = hnapi.STORIES.SHOW
    testFetch(done, verify, [api])
  })

  it('fetch jobstories', done => {
    const verify = isStories
    const api = hnapi.STORIES.JOB
    testFetch(done, verify, [api])
  })

  it('fetch updates', done => {
    const verify = isUpdates
    const api = hnapi.UPDATES
    testFetch(done, verify, [api])
  })

  it('fetch max item', done => {
    const verify = isMaxItem
    const api = hnapi.MAX_ITEM
    testFetch(done, verify, [api])
  })

  it('fetch some user', done => {
    const verify = isUser
    const api = hnapi.USER
    const profile = 'sequoia'
    testFetch(done, verify, [api, profile])
  })

  it('fetch some item', done => {
    const verify = isItem
    const api = hnapi.ITEM
    const id = 22496313
    testFetch(done, verify, [api, id])
  })
})
