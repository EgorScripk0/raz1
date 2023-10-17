const path = require("path")
const fs = require('fs')
const { dirname } = require("path")

console.log("Название файла: ",  path.basename(__filename))
console.log("Путь файла: ",  path.dirname(__filename))
console.log("Его формат: ", path.extname(__filename))
fs.mkdir(path.join(__dirname , 'tmp'), function (err) {
    if (err) {
        console.error(err)
    } else {
        console.log("Папка создана")
    }
})
const filepass = path.join(__dirname , 'tmp', "2.txt")
console.log(filepass)
fs.writeFile(filepass, "Something wrong in your file", function (err) {
    if (err) {
        console.error(err)
    } else {
        console.log("Папка создана")
    }
})
fs.appendFile(filepass, "\nSomething wrong in your file", function (err) {
    if (err) {
        console.error(err)
    } else {
        console.log("Папка создана")
    }
})
fs.readFile(filepass,  "UTF-8" ,(err, data) => {
    if (err) {console.error(err)}
    console.log(data)
})