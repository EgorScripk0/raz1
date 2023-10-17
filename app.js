import express from 'express';
const app = express()
const port = '3000'
app.get('/', function (req, res){
    res.end('Hello World')
})
app.listen(port, () => console.log('asd ' + port))