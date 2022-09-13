import { splitArrayIntoChunks } from '../src/helpers/array'

const data = [
  { name: 'A' },
  { name: 'B' },
  { name: 'C' },
  { name: 'D' },
  { name: 'E' },
  { name: 'F' },
  { name: 'G' },
  { name: 'H' },
  { name: 'I' },
  { name: 'J' }
]

const result: any = splitArrayIntoChunks(data, 3, console.log)
// Math.ceil na função - Arredondar para cima, pois a regra do número de partes tem que ser respeitado
// 10 / 3 = 3.333333333333333 - seria dividido assim: 3,3,3,1 - 4 partes - X
// Math.ceil(10 / 3) = 4 - divisão: 4,4,2 - 3 partes - V

console.log('-------------------------')
console.log(result)
console.log('-------------------------')
console.log(result[0])
console.log('++++++')
console.log(result[1])
console.log('++++++')
console.log(result[2])
console.log('++++++')

const example: any = []
let count = 0
const callbackExample = (chunk: unknown) => {
  count++
  example.push({ [`chunk${count}`]: chunk })
}

splitArrayIntoChunks(data, 3, callbackExample)

console.log('-------------------------')
console.log(example)
console.log('-------------------------')
