import TypeUtil from '@/lib/utils/typeutil'
import Base from './Base'

class PollOption extends Base {
  constructor (input) {
    super(input)
    this.type = TypeUtil.checkValue(input.type, 'pollopt')
    this.parent = TypeUtil.checkType(input.parent, 'number')
    this.score = TypeUtil.checkType(input.score, 'number')
  }
}

export default PollOption
