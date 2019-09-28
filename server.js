let express = require('express')
let app = express()
let count = 0
app.get('/count',(reg,res) => {
    console.log("I received a request to /count", count)
    count++
    res.send("<h1> This page has been visited " + count +  ((count > 1) ? " times</h1>" : " time</h1>"))
} )
app.get('/reset',(reg , res) => {
    console.log("I received a request to /reset")
    count = 0
    res.send("<h1>The visited count has been reset to " + count + " time</h1>")
})
app.get('/count2',(reg , res) => {
    console.log("I received a request to /count", count)
    count++
    res.send("<h1>Multiply the counter by 2 equals to " + 2 * count + "</h1>")
})
app.use('/static',express.static(__dirname + '/public'))
app.listen(4000, () => {
    console.log("server started")
})