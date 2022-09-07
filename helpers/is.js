const isArray = value => Array.isArray(value)
const isBoolean = value => typeof value === 'boolean'
const isDate = value => value instanceof Date && value.toString() !== 'Invalid Date'
const isFunction = value => typeof value === 'function'
const isMap = value => value instanceof Map
const isNumber = value => typeof value === 'number' && !Number.isNaN(value) && Number.isFinite(value)
const isSet = value => value instanceof Set
const isString = value => typeof value === 'string'

const isObject = value => {
  if (
    value === null ||
    isArray(value) ||
    value instanceof Date ||
    isSet(value) ||
    isMap(value)
  ) {
    return false
  }

  return typeof value === 'object'
}

const isEmpty = value => {
  if (value === undefined || value === null || Number.isNaN(value)) {
    return true;
  }

  if (isBoolean(value) || isNumber(value)) {
    return false;
  }

  if (isString(value)) {
    return value.trim().length === 0;
  }

  if (isArray(value)) {
    return value.length === 0;
  }

  if (isSet(value) || isMap(value)) {
    return value.size === 0;
  }

  if (value instanceof Date) {
    return !isDate(value);
  }

  if (isObject(value)) {
    return Object.keys(value).length === 0;
  }

  return false;
}
