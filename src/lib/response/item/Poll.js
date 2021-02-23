import TypeUtil from '@/lib/utils/typeutil'
import Base from './Base'

class Poll extends Base {
  constructor (input) {
    super(input)
    this.type = TypeUtil.checkValue(input.type, 'poll')
    this.parts = TypeUtil.checkArray(input.parts, 'number')
    this.descendants = TypeUtil.checkType(input.descendants, 'number')
    this.score = TypeUtil.checkType(input.score, 'number')
    this.title = TypeUtil.checkType(input.title, 'string')
    this.text = TypeUtil.checkType(input.text, 'string')
  }
}

export default Poll
