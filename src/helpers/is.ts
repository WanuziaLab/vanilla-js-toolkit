// eslint-disable-next-line @typescript-eslint/no-explicit-any
type IValue = any

export const isArray = (value: IValue) => Array.isArray(value)
export const isBoolean = (value: IValue) => typeof value === 'boolean'
export const isDate = (value: IValue) => value instanceof Date && value.toString() !== 'Invalid Date'
export const isFunction = (value: IValue) => typeof value === 'function'
export const isMap = (value: IValue) => value instanceof Map
export const isNumber = (value: IValue) => typeof value === 'number' && !Number.isNaN(value) && Number.isFinite(value)
export const isSet = (value: IValue) => value instanceof Set
export const isString = (value: IValue) => typeof value === 'string'

export const isObject = (value: IValue) => {
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

export const isEmpty = (value: IValue) => {
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
