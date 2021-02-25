import hnapi from '@/lib/hnapi'
import chai from 'chai'
import chaipromised from 'chai-as-promised'

const ResponseNotExistError = hnapi.errors.ResponseNotExistError

chai.should()
chai.use(chaipromised)

// Each test sends actual http request and the timeout is 2000ms.
// If the tests are too slow, you can skip the tests
// by using '.skip' method of 'describe' or each 'it'
// eg) describe.skip('...', () => { ... })
describe('@/lib/hnapi/fetch', () => {
  it('resolve newstories()', async () => {
    await hnapi.fetch.newstories(true)
  })

  it('resolve topstories()', async () => {
    await hnapi.fetch.topstories(true)
  })

  it('resolve beststories()', async () => {
    await hnapi.fetch.beststories(true)
  })

  it('resolve askstories()', async () => {
    await hnapi.fetch.askstories(true)
  })

  it('resolve showstories()', async () => {
    await hnapi.fetch.showstories(true)
  })

  it('resolve jobstories()', async () => {
    await hnapi.fetch.jobstories(true)
  })

  it('resolve updates()', async () => {
    await hnapi.fetch.updates(true)
  })

  it('resolve maxitem()', async () => {
    await hnapi.fetch.maxitem(true)
  })

  it('resolve user()', async () => {
    const id = 'sequoia'
    await hnapi.fetch.user(id, true)
  })

  it('reject user(): with missing user id', async () => {
    const id = undefined
    await hnapi.fetch.user(id, true)
      .should.be.rejectedWith('Request failed with status code')
  })

  it('reject user(): with invalid user id', async () => {
    const id = 22496313
    await hnapi.fetch.user(id, true)
      .should.be.rejectedWith(ResponseNotExistError)
  })

  it('resolve item()', async () => {
    const id = 22496313
    await hnapi.fetch.item(id, true)
  })

  it('reject item(): with missing item id', async () => {
    const id = undefined
    await hnapi.fetch.item(id, true)
      .should.be.rejectedWith('Request failed with status code')
  })

  it('reject item(): with invalid item id', async () => {
    const id = 'sequoia'
    await hnapi.fetch.item(id, true)
      .should.be.rejectedWith(ResponseNotExistError)
  })
})
