class RequiredPropertyError extends Error {
  constructor (message = 'No exists required property') {
    super(message)
    this.name = 'RequiredPropertyError'
  }
}

const isPrimitive = (value) => (typeof value !== 'object')

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
  if (get(value) === expected || value === undefined) return value
  else {
    throw new TypeError([
      `expected type is ${expected}, `,
      `but the given value ${value} is ${get(value)}`
    ].join(''))
  }
}

const checkArray = (value, expected, required = false) => {
  value = checkType(value, 'Array', required)
  if (value === undefined) return value
  return value.map(e => checkType(e, expected))
}

const TypeUtil = {
  checkType,
  checkArray
}

export default TypeUtil