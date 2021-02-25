import TypeUtil from './typeutil'

const item = (data) => {
  // Base: Required
  TypeUtil.checkType(data.id, 'number', true)
  TypeUtil.checkType(data.type, 'string', true)

  // Base: Optional
  TypeUtil.checkType(data.deleted, 'boolean')
  TypeUtil.checkType(data.by, 'string')
  TypeUtil.checkType(data.time, 'number')
  TypeUtil.checkType(data.dead, 'boolean')
  TypeUtil.checkArray(data.kids, 'number')

  // SubType: Optional
  switch (data.type) {
    case 'job': {
      TypeUtil.checkType(data.text, 'string')
      TypeUtil.checkType(data.url, 'string')
      TypeUtil.checkType(data.title, 'string')
      break
    }
    case 'story': {
      TypeUtil.checkType(data.descendants, 'number')
      TypeUtil.checkType(data.score, 'number')
      TypeUtil.checkType(data.title, 'string')
      TypeUtil.checkType(data.url, 'string')
      break
    }
    case 'comment': {
      TypeUtil.checkType(data.parent, 'number')
      TypeUtil.checkType(data.text, 'string')
      break
    }
    case 'poll': {
      TypeUtil.checkArray(data.parts, 'number')
      TypeUtil.checkType(data.descendants, 'number')
      TypeUtil.checkType(data.score, 'number')
      TypeUtil.checkType(data.title, 'string')
      TypeUtil.checkType(data.text, 'string')
      break
    }
    case 'pollopt': {
      TypeUtil.checkType(data.parent, 'number')
      TypeUtil.checkType(data.score, 'number')
      break
    }
    default: {
      const msg = ['the item type must be one of these: ',
        '[job | story | comment | poll | pollopt]'].join('')
      throw new TypeError(msg)
    }
  }
  return data
}

const user = (data) => {
  // Required
  TypeUtil.checkType(data.id, 'string', true)
  TypeUtil.checkType(data.created, 'number', true)
  TypeUtil.checkType(data.karma, 'number', true)

  // Optional
  TypeUtil.checkType(data.delay, 'number')
  TypeUtil.checkType(data.about, 'string')
  TypeUtil.checkArray(data.submitted, 'number')
  return data
}

const max = (data) => {
  TypeUtil.checkType(data, 'number', true)
  return data
}

const updates = (data) => {
  TypeUtil.checkArray(data.items, 'number', true)
  TypeUtil.checkArray(data.profiles, 'string', true)
  return data
}

const stories = (data) => {
  TypeUtil.checkArray(data, 'number', true)
  return data
}

const checkdata = {
  item,
  user,
  max,
  updates,
  stories
}

export default checkdata
