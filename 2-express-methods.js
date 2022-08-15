const express = require('express')
const path =require('path')
const app = express()


app.use(express.static('./public'))
app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./index.html'))

})
app.get("/s" ,(req,res)=>{
    res.send("<h1>Hellot  ehre</h1>")
})

app.all("*",(req,res)=>{
    res.status(200).send("Resource not found")
})
app.listen(5000,()=>{
    console.log("Hello there , general kenobi")
})


