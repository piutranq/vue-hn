import TypeUtil from '@/lib/utils/typeutil'
import Base from './Base'

class Comment extends Base {
  constructor (input) {
    super(input)
    this.type = TypeUtil.checkValue(input.type, 'comment')
    this.parent = TypeUtil.checkType(input.parent, 'number')
    this.text = TypeUtil.checkType(input.text, 'string')
  }
}

export default Comment
