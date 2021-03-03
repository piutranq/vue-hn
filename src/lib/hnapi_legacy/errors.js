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

const errors = {
  HTTPStatusError,
  ResponseNotExistError
}

export default errors
