const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
 
data.name = 'Otonye'
data.age = 30

const reWrite = JSON.stringify(data)
fs.writeFileSync('1-json.json', reWrite)









