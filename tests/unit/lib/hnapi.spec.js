import { expect } from 'chai'
import hnapi from '@/lib/hnapi'

const expectStatus = (res, code) => {
  expect(res.status).to.equals(code)
}

const expectType = (data, type) => {
  expect(data).to.be.a(type)
}

const expectArrayType = (data, type) => {
  data.forEach(e => expectType(e, type))
}

const isStories = res => {
  expectStatus(res, 200) // is OK?
  expectArrayType(res.data, 'number')
}

const isUpdates = res => {
  expectStatus(res, 200) // is OK?
  expectArrayType(res.data.items, 'number')
  expectArrayType(res.data.profiles, 'string')
}

const isMaxItem = res => {
  expectStatus(res, 200) // is OK?
  expectType(res.data, 'number')
}

const isUser = res => {
  expectStatus(res, 200) // is OK?
  expectType(res.data.about, 'string')
  expectType(res.data.created, 'number')
  expectType(res.data.id, 'string')
  expectType(res.data.karma, 'number')
  expectArrayType(res.data.submitted, 'number')
}

const testFetch = (done, verify, ...api) => {
  return hnapi.fetch(...api)
    .then(res => {
      verify(res)
      done()
    })
    .catchdone
}

describe('@/lib/hnapi.js', () => {
  it('fetch newstories', done => {
    const verify = isStories
    const api = hnapi.STORIES.NEW
    testFetch(done, verify, api)
  })

  it('fetch topstories', done => {
    const verify = isStories
    const api = hnapi.STORIES.TOP
    testFetch(done, verify, api)
  })

  it('fetch beststories', done => {
    const verify = isStories
    const api = hnapi.STORIES.BEST
    testFetch(done, verify, api)
  })

  it('fetch askstories', done => {
    const verify = isStories
    const api = hnapi.STORIES.ASK
    testFetch(done, verify, api)
  })

  it('fetch showstories', done => {
    const verify = isStories
    const api = hnapi.STORIES.SHOW
    testFetch(done, verify, api)
  })

  it('fetch jobstories', done => {
    const verify = isStories
    const api = hnapi.STORIES.JOB
    testFetch(done, verify, api)
  })

  it('fetch updates', done => {
    const verify = isUpdates
    const api = hnapi.UPDATES
    testFetch(done, verify, api)
  })

  it('fetch max item', done => {
    const verify = isMaxItem
    const api = hnapi.MAX_ITEM
    testFetch(done, verify, api)
  })

  it('fetch some user', done => {
    const verify = isUser
    const api = hnapi.USER
    const profile = 'sequoia'
    testFetch(done, verify, api, profile)
  })
})
