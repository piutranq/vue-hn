class RequiredPropertyError extends Error {
  constructor (message = 'No exists required property') {
    super(message)
    this.name = 'RequiredPropertyError'
  }
}

const isPrimitive = (value) => (typeof value !== 'object')
const isObject = (value) => (typeof value === 'object')

const get = (value) => {
  if (isPrimitive(value)) return typeof value
  else return value.constructor.name
}

const checkRequired = (value) => {
  if (value !== undefined) return value
  else throw new RequiredPropertyError()
}

const checkType = (value, expected, required = false) => {
  required && (value = checkRequired(value))
  const actual = get(value)
  if (actual === expected) return value
  else {
    throw new TypeError([
      `expected ${expected}, `,
      `but the given value ${value} is ${actual}`
    ].join(''))
  }
}

const checkValue = (value, expected) => {
  const actual = value
  if (actual === expected) return value
  else {
    throw new Error(
      `expected ${expected}, but the given value is ${value}`
    )
  }
}

const checkArray = (value, expected, required = false) => {
  value = checkType(value, 'Array', required)
  return value.map(e => checkType(value, expected))
}

const TypeUtil = {
  isPrimitive,
  isObject,
  get,
  checkValue,
  checkType,
  checkArray,
  checkRequired
}

export default TypeUtil
