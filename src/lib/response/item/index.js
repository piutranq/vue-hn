import Job from './Job'
import Story from './Story'
import Comment from './Comment'
import Poll from './Poll'
import PollOption from './PollOption'
import Base from './Base'

const createItem = (data) => {
  switch (data.type) {
    case 'Story': return new Story(data)
    case 'Job': return new Job(data)
    case 'Comment': return new Comment(data)
    case 'Poll': return new Poll(data)
    case 'PollOption': return new PollOption(data)
    default: throw new TypeError(`Unexpected item type ${data.type}`)
  }
}

const Item = {
  Job,
  Story,
  Comment,
  Poll,
  PollOption,
  Base,
  createItem
}

export default Item
