const express= require('express')
const app= express()

app.get("/",(req,res)=>{
    res.send("wagawaga")
})

app.get("/api/v1/query",(req,res)=>{
    console.log(req.query)
    res.send("ok")
})

app.listen(5000,()=>{
    console.log("server running")
})  