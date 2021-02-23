import TypeUtil from '@/lib/utils/typeutil'
import Base from './Base'

class Job extends Base {
  constructor (input) {
    super(input)
    this.type = TypeUtil.checkValue(input.type, 'job')
    this.text = TypeUtil.checkType(input.text, 'string')
    this.url = TypeUtil.checkType(input.url, 'string')
    this.title = TypeUtil.checkType(input.title, 'string')
  }
}

export default Job
