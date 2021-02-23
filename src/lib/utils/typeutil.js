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

const check = (value, expected, required = false) => {
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

const checkArray = (value, expected, required = false) => {
  value = check(value, 'Array', required)
  return value.map(e => check(value, expected))
}

const TypeUtil = {
  isPrimitive,
  isObject,
  get,
  check,
  checkArray,
  checkRequired
}

export default TypeUtil
