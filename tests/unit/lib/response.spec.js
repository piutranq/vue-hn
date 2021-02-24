import response from '@tests/mocks/response'
import Item from '@/lib/response/item'
import User from '@/lib/response/user'

const LOG_LENGTH = 80

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

const isUser = data => {
  const user = new User(data)
  logUser(user)
}

const isStory = data => {
  const item = new Item.Story(data)
  logItem(item.id, item.type, item.title)
}

const isJob = data => {
  const item = new Item.Job(data)
  logItem(item.id, item.type, item.title)
}

const isComment = data => {
  const item = new Item.Comment(data)
  logItem(item.id, item.type, item.text)
}

describe('@/lib/response/user', () => {
  it('fetch User', done => {
    isUser(response.exampleUser)
    done()
  })
})

describe('@/lib/response/item', () => {
  it('fetch Story', done => {
    isStory(response.exampleStory)
    done()
  })

  it('fetch Job', done => {
    isJob(response.exampleJob)
    done()
  })

  it('fetch Comment', done => {
    isComment(response.exampleComment)
    done()
  })
})
