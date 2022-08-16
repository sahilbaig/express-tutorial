const express = require('express')
app =express()
const logger= require('./logger')
// app.use -> for creating middleware
// app.use('/api',logger) => applies to all the routes in /api
app.use(express.static('public'))
app.use(express.urlencoded({"extended":false}))
app.use('/api',logger)
app.use(express.json()); //this is the build in express body-parser 


app.get('/', logger,(req,res)=>{
    res.send("hello there")
})

app.post('/login',(req,res)=>{
    const {username}= req.body
    res.send(username)
})

app.get('/api/product',(req,res)=>{
    res.send("product page")
})

app.get('/api/something/another-route',(req,res)=>{
    res.send("the same thing")
})
app.get("/test",(req,res)=>{
    res.send("wow")
})
app.post("/test",(req,res)=>{
    const {test}= req.body
    res.send(test)

})
app.listen(5000,()=>{
    console.log("Listeneing at port 5000")
})