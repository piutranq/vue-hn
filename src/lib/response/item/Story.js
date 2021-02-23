import TypeUtil from '@/lib/utils/typeutil'
import Base from './Base'

class Story extends Base {
  constructor (input) {
    super(input)
    this.type = TypeUtil.checkValue(input.type, 'story')
    this.descendants = TypeUtil.checkType(input.descendants, 'number')
    this.score = TypeUtil.checkType(input.score, 'number')
    this.title = TypeUtil.checkType(input.title, 'string')
    this.url = TypeUtil.checkType(input.url, 'string') // need check url
  }
}

export default Story
