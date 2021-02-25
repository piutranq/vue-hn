// Mockup response data, based on real data (before declaration)
// arrays are sliced 0 to 3
// strings are sliced to 0 to <70
// because the real data are too large

// https://hacker-news.firebaseio.com/v0/maxitem.json?print=pretty
const max = 26255418

// https://hacker-news.firebaseio.com/v0/newstories.json
const stories = [26255357, 26255345, 26255342]

// https://hacker-news.firebaseio.com/v0/updates.json?print=pretty
const updates = {
  items: [26255412, 26255409, 26252470],
  profiles: ['WaylonKenning', 'AnimalMuppet', 'danans']
}

// https://hacker-news.firebaseio.com/v0/user/sequoia.json?print=pretty
const user = {
  about: 'https:&#x2F;&#x2F;sequoia.makes.software',
  created: 1287517832,
  id: 'sequoia',
  karma: 4951,
  submitted: [26208562, 26204463, 26201915]
}

// https://hacker-news.firebaseio.com/v0/item/26233783.json?print=pretty
const job = {
  by: 'akircher',
  id: 26233783,
  score: 1,
  text: 'SIRUM is making medications affordable for all.',
  time: 1614054051,
  title: 'Sirum (YC W15) Is Hiring Software and QA Engineers with',
  type: 'job'
}

// https://hacker-news.firebaseio.com/v0/item/26227123.json?print=pretty
const story = {
  by: 'rfreytag',
  descendants: 0,
  id: 26227123,
  score: 2,
  time: 1614014292,
  title: 'Tail Risk',
  type: 'story',
  url: 'https://en.wikipedia.org/wiki/Tail_risk'
}

// https://hacker-news.firebaseio.com/v0/item/22496313.json?print=pretty
const comment = {
  by: 'sequoia',
  id: 22496313,
  kids: [22497151, 22498384, 22498656],
  parent: 22492381,
  text: 'This article reminds me of posts about &quot;bullet',
  time: 1583432138,
  type: 'comment'
}

// const poll = {}
// const polloption = {}

const response = {
  user,
  job,
  story,
  comment,
  // poll,
  // polloption,
  stories,
  max,
  updates
}

export default response
