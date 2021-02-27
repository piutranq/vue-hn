class StoriesTypeError extends Error {
  constructor (input) {
    super()
    this.name = StoriesTypeError
    this.message = 'The Stories type is must be followings: \n' + [
      URL.newstories, URL.topstories, URL.beststories,
      URL.askstories, URL.showstories, URL.jobstories
    ].join(' | ') + '\n' +
    `Input string: '${input}'`
  }
}

const checkStoriesType = input => {
  switch (input) {
    case URL.newstories:
    case URL.topstories:
    case URL.beststories:
    case URL.askstories:
    case URL.showstories:
    case URL.jobstories:
      return input
    default:
      throw new StoriesTypeError(input)
  }
}

const URL = {
  db: 'https://hacker-news.firebaseio.com',
  ver: 'v0',
  ext: '.json',

  item: 'item',
  user: 'user',
  max: 'maxitem',
  updates: 'updates',
  newstories: 'newstories',
  topstories: 'topstories',
  beststories: 'beststories',
  askstories: 'askstories',
  showstories: 'showstories',
  jobstories: 'jobstories',
  checkStoriesType
}

export default URL
