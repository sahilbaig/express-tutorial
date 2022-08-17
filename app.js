const express = require('express')
const api= require('./routes/api')
const auth = require('./routes/auth')
app =express()
// app.use -> for creating middleware
// app.use('/api',logger) => applies to all the routes in /api
app.use(express.static('public'))
app.use(express.urlencoded({"extended":false}))
app.use(express.json()); //this is the build in express body-parser 
// 
app.use("/api",api)
app.use('/auth',auth)



app.listen(5000,()=>{
    console.log("Listeneing at port 5000")
})