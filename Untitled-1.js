let express = require('express')
let app = express()
let count = 0
app.get('/count',(reg,res) => {
    console.log("I received a request to /count", count)
    count++
    res.send("<h1> This page has been visited> " + count + " times</h>")
} )
app.use('/static',express.static(__dirname + '/public'))
app.listen(4000, () => {
    console.log("server started")
})