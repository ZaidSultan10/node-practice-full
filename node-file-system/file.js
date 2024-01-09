const fs = require('fs')

// read a file
const text = fs.readFileSync('./text/input.txt','utf-8')
console.log(text)

// write to a file

const textToWrite = `I am writing via FS \n thanks on ${Date.now()}`
fs.writeFileSync('./text/input.txt', textToWrite)

//Async file

fs.readFile('./text/start.txt','utf-8', (err,data) => {
    console.log(data)
})