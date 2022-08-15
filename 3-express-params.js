const express= require('express')
const app = express()

app.get('/',(req,res)=>{
    res.json({user:'user1'})
})
app.get("/products/:id",(req,res)=>{
    const {id} = req.params;

    console.log(id)
    res.send(id)
})
app.listen(5000,()=>{
    console.log("running server")
})