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

splitArrayIntoChunks(data, 3, console.log)

console.log(Math.ceil(10 / 3))
// Math.ceil - Arredondar para cima, pois a regra do número de partes tem que ser respeitado
// 10 / 3 = 3.333333333333333 - seria dividido assim: 3,3,3,1 - 4 partes - X
// Math.ceil(10 / 3) = 4 - divisão: 4,4,2 - 3 partes - V
