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

const splitArrayIntoChunks = (data, parts = 1, callback) => {
  if (!data) return data

  const length = data.length
  const chunkSize = Math.ceil(length / parts)

  for (let index = 0; index < length; index += chunkSize) {
    const chunk = data.slice(index, index + chunkSize)
    callback && callback(chunk)
  }
}

splitArrayIntoChunks(data, 3, console.log)

console.log(Math.ceil(10 / 3))
// Math.ceil - Arredondar para cima, pois a regra do número de partes tem que ser respeitado
// 10 / 3 = 3.333333333333333 - seria dividido assim: 3,3,3,1 - 4 partes - X
// Math.ceil(10 / 3) = 4 - divisão: 4,4,2 - 3 partes - V
