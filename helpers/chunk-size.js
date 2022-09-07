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

const parts = 3
const length = data.length
const chunkSize = Math.round(length / parts)

console.log("🚀 ~ file: chunk-size.js ~ line 15 ~ chunkSize", chunkSize)

for (let index = 0, len = length; index < len; index += chunkSize) {
    const chunk = data.slice(index, index + chunkSize)
    console.log(chunk)
}