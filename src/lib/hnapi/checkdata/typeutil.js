class RequiredPropertyError extends Error {
  constructor (message = 'No exists required property') {
    super(message)
    this.name = 'RequiredPropertyError'
  }
}

const TypeErrorMessage = (expected, value) => [
  `expected type is ${expected}, `,
  `but the given value ${value} is ${getType(value)}`
].join('')

const getType = (value) => {
  if (typeof value !== 'object') return typeof value
  else return value.constructor.name
}

const checkRequired = (value) => {
  if (typeof value !== 'undefined') return value
  else throw new RequiredPropertyError()
}

const checkType = (value, expected, required = false) => {
  required && (value = checkRequired(value))
  switch (getType(value)) {
    case expected: return value
    case 'undefined': return value
    default: {
      throw new TypeError(TypeErrorMessage(expected, value))
    }
  }
}

const checkArray = (value, expected, required = false) => {
  value = checkType(value, 'Array', required)
  if (typeof value === 'undefined') return value
  return value.map(e => checkType(e, expected))
}

const TypeUtil = {
  checkType,
  checkArray
}

export default TypeUtil
