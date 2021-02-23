import TypeUtil from '@/lib/utils/typeutil'

class User {
  constructor (input) {
    // Required
    this.id = TypeUtil.checkType(input.id, 'string', true)
    this.created = TypeUtil.checkType(input.created, 'number', true)
    this.karma = TypeUtil.checkType(input.karma, 'number', true)

    // Optional
    this.delay = TypeUtil.checkType(input.delay, 'number')
    this.about = TypeUtil.checkType(input.about, 'string')
    this.submitted = TypeUtil.checkArray(input.submitted, 'number')
  }

  static createUser (input) {
    return new User(input)
  }
}

export default User
