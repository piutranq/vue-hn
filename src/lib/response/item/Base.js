import TypeUtil from '@/lib/utils/typeutil'

class Base {
  constructor (input) {
    // Required
    this.id = TypeUtil.checkType(input.id, 'number', true)
    // the `.type` property is checked by each child class

    // Optional
    this.deleted = TypeUtil.checkType(input.deleted, 'boolean')
    this.by = TypeUtil.checkType(input.by, 'string')
    this.time = TypeUtil.checkType(input.time, 'number')
    this.dead = TypeUtil.checkType(input.dead, 'boolean')
    this.kids = TypeUtil.checkArray(input.kids, 'number')
  }
}

export default Base
