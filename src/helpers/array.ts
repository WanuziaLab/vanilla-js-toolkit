import { isArray } from './is'

interface IData {
  length: number
  slice: (start: number, end: number) => unknown[]
  data?: unknown[]
}

type ICallback = (value: IData) => void

export const splitArrayIntoChunks = (data: IData, parts = 1, callback: ICallback) => {
  if (!isArray(data)) return data

  const length = data.length
  const chunkSize = Math.ceil(length / parts)
  const split = []

  for (let index = 0; index < length; index += chunkSize) {
    const chunk = data.slice(index, index + chunkSize)
    split.push(chunk)
    callback && callback(chunk)
  }

  return split
}
